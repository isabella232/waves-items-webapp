import React, { Component, ComponentType, createContext, PureComponent, ReactNode } from 'react'
import { withApollo, WithApolloClient } from 'react-apollo'
import { IPublicState } from '../helpers/keeper'
import keeperHelper from '../helpers/keeper'

interface IProps {
}

interface IKeeperState extends Partial<IPublicState> {
}

export interface IKeeperContext {
  installed: boolean
  hasAccounts: boolean
  publicState: IKeeperState
}

const defaultKeeperContext: IKeeperContext = { installed: false, hasAccounts: false, publicState: {} }

export const KeeperContext = createContext<IKeeperContext>(defaultKeeperContext)

class KeeperProviderBase extends Component<WithApolloClient<IProps>, IKeeperContext> {
  state: IKeeperContext = defaultKeeperContext

  constructor(props: WithApolloClient<IProps>) {
    super(props)

    // const publicState = keeperHelper.getPublicState()
    // this.publicState = {
    //   ...publicState,
    // }
  }

  async componentDidMount() {

    try {
      const keeper = await keeperHelper.init()

      if (!keeper) {
        return
      }

      this.setState({ installed: true })

      keeper.on('update', (publicState: IPublicState) => {

        const { account } = publicState

        // TODO: temp check changes
        if (account && this.state.publicState && this.state.publicState.account) {
          if (
            account.address === this.state.publicState.account.address &&
            account.balance === this.state.publicState.account.balance
          ) {
            return
          }
        }

        this.setState({ publicState, hasAccounts: account != undefined })
      })

      const publicState = await keeper.publicState()

      this.setState({ publicState, hasAccounts: true })

    } catch (err) {
      // TODO: need replace to const
      if (err.code === 14) {
        this.setState({ hasAccounts: false })
      }

      console.warn(err)
    }
  }

  render() {
    console.log('KeeperProvider render()')
    return (
      <KeeperContext.Provider value={{
        publicState: this.state.publicState,
        hasAccounts: this.state.hasAccounts,
        installed: this.state.installed,
      }}>
        {this.props.children}
      </KeeperContext.Provider>
    )
  }

}

const KeeperProvider = withApollo<IProps>(KeeperProviderBase)
const KeeperConsumer = KeeperContext.Consumer

const withKeeperContext = <P extends {}>(WrappedComponent: ComponentType<P & IKeeperContext>) =>
  class WithKeeperContext extends PureComponent<P> {
    render(): ReactNode {
      return (
        <KeeperConsumer>
          {(context: IKeeperContext) => <WrappedComponent {...this.props} {...context} />}
        </KeeperConsumer>
      )
    }
  }

export {
  KeeperProvider,
  KeeperConsumer,
  withKeeperContext,
}
