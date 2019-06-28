import React, { ChangeEvent, Component, FormEvent, ReactNode } from 'react'
import { IItem } from '../../../types'
import { Form } from '../../../components/globals'
import { Box, Flex } from 'rebass'
import { TextInput } from '../../../components/inputs'

type TProps = {
  item?: IItem
}

type TMisc = {
  [key: string]: string
}

type TState = {
  name?: string
  quantity?: string
  imageUrl?: string
  misc?: TMisc
}

class ItemForm extends Component<TProps> {
  state: TState = {}

  constructor(props: TProps) {
    super(props)

    const { item } = props

    if (item) {
      this.state.name = item.name
      this.state.quantity = item.quantity ? item.quantity.toString() : ''
      this.state.imageUrl = item.imageUrl
    }
  }

  render(): ReactNode {
    return (
      <Form
        onSubmit={ev => this._handleSubmit(ev)}
      >
        <Flex>
          <Box width={1 / 2}>
            <TextInput value={this.state.name}
                       onChange={this._changeName}
                       placeholder={'Sword of Pain'}
            >Name</TextInput>
          </Box>
          <Box width={1 / 2} ml={'base'}>
            <TextInput value={this.state.quantity}
                       onChange={this._changeQuantity}
                       placeholder={'100'}
            >Quantity</TextInput>
          </Box>
        </Flex>
        <Box>
          <TextInput value={this.state.imageUrl}
                     onChange={this._changeImageUrl}
                     placeholder={'Image URL in PNG format'}
          >Image URL</TextInput>
        </Box>
      </Form>
    )
  }

  _changeName = (ev: ChangeEvent<HTMLInputElement>) => {
    const name = ev.target.value

    this.setState({
      name,
    })
  }

  _changeQuantity = (ev: ChangeEvent<HTMLInputElement>) => {
    const quantity = ev.target.value

    this.setState({
      quantity,
    })
  }

  _changeImageUrl = (ev: ChangeEvent<HTMLInputElement>) => {
    const imageUrl = ev.target.value

    this.setState({
      imageUrl,
    })
  }

  _handleSubmit = async (ev: FormEvent) => {
    console.log('boom')
  }
}

export default ItemForm
