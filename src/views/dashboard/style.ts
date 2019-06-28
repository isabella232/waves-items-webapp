import styled from 'styled-components'
import { Box } from 'rebass'
import { Button } from '../../components/buttons'
import { themeGet } from 'styled-system'
import { Container } from '../../components/layout'

export const FiltersContainer = styled(Box)`
`

export const ItemContainer = styled(Container)`
  max-width: 512px;
`

export const GameOverview = styled(Box)`
  height: 92px;
  border-bottom: 1px solid ${themeGet('colors.grays.7')};
`

export const LoadMoreButton = styled(Button).attrs({ size: 'lg' })`
  width: 100%;
  display: block;
`
