import React, { Component, ReactNode } from 'react'
import { ViewContent, ViewGrid, ViewSide, ViewWrapper } from '../../components/layout'
import GameNav from '../gameNav'
import { H1 } from '../../components/globals'
import { RouteComponentProps } from 'react-router'
import GameOverview from '../gameOverview'
import { Box } from 'rebass'
import { FiltersContainer } from './style'
import Search from './components/search'
import Items from './components/items'
import { UserRole } from '../../__generated__/globalTypes'

interface BrowseParams {
  address?: string
}

type TState = {
  searchString?: string
}

type TProps = RouteComponentProps<BrowseParams>

class Browse extends Component<TProps> {
  state: TState = {
    searchString: '',
  }

  render(): ReactNode {
    const { match } = this.props
    const { address } = match.params

    // Set GAME role for all items
    const creatorRole = !address ? UserRole.GAME : undefined

    return (
      <ViewWrapper py={0}>
        <ViewGrid>
          <ViewSide>
            <GameNav/>
          </ViewSide>
          <ViewContent>
            {address ? <Box mb={'lg'}><GameOverview address={address}/></Box> : <H1>Feed</H1>}
            <FiltersContainer mb={'lg'}>
              <Search onSearch={(searchString: string) => {
                this.setState({
                  searchString,
                })
              }}/>
            </FiltersContainer>
            <Box mb={'lg'}>
              <Items address={address} searchString={this.state.searchString} creatorRole={creatorRole}/>
            </Box>
          </ViewContent>
        </ViewGrid>
      </ViewWrapper>
    )
  }
}

export default Browse
