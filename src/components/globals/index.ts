import styled, { css } from 'styled-components'
import { Box, BoxProps, Heading, Text, TextProps } from 'rebass'
import {
  borders,
  BordersProps,
  color,
  height,
  HeightProps,
  maxWidth,
  MaxWidthProps,
  space, SpaceProps,
  themeGet,
  width
} from 'styled-system'
import { Container } from '../layout'
import { Link } from 'react-router-dom'

export const hexa = (hex: string, alpha: string | number) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

export const shadow = {
  low: '0 2px 8px',
  mid: '0 4px 12px',
  high: '0 8px 16px',
}

export const truncate = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 0;
`

export const fontStack = css`
  font-family: ${themeGet('fonts.sans')};
`

export const monoStack = css`
  font-family: ${themeGet('fonts.mono')};
`

export const H1 = styled(Heading)`
  font-size: 1.5rem;
`
H1.defaultProps = { as: 'h1' }

export const H2 = styled(Heading)`
  font-size: 1.25rem;
`
H2.defaultProps = { as: 'h2' }

export const H3 = styled(Heading)`
  font-size: 1rem;
`
H3.defaultProps = { as: 'h3' }

export const H4 = styled(Heading)`
  font-size: .875rem;
`
H4.defaultProps = { as: 'h4' }

export const H5 = styled(Heading)`
  font-size: .75rem;
`
H5.defaultProps = { as: 'h5' }

export const H6 = styled(Heading)`
  font-size: .675rem;
  text-transform: uppercase;
`
H6.defaultProps = { as: 'h6' }

export const Form = styled.form`
`

export const Small = styled(Text)`
  font-size: ${themeGet('fontSizes.sm')}px;
`
Small.defaultProps = { as: 'span' }

export const Table = styled.table<BoxProps>`
  border-spacing: 0;
  border-collapse: collapse;
  width: inherit;
  
  ${space}
  ${width}
`

export const TableHeader = styled.thead<BoxProps & BordersProps>`
  ${color}
  ${borders}
`
TableHeader.defaultProps = {
  color: 'grays.4',
  borderBottom: '1px solid',
  borderColor: 'grays.7',
}

export const TableBody = styled.tbody`
`

export const TableRow = styled.tr`
  height: 100%;
  
  &:nth-child(2n) {
    background: ${themeGet('colors.grays.8')};
  }
`

export const TableCell = styled.td<BoxProps>`
  margin: 0;
  padding: 0;
  font-weight: inherit;
  text-align: inherit;
  height: 100%;
  vertical-align: middle;
  
  ${space}
  ${width}
`
TableCell.defaultProps = {
  px: 'sm',
  py: 'sm',
}

export const Tabs = styled(Box)`
  border-bottom: 1px solid ${themeGet('colors.grays.7')};
`

export const TabsContainer = styled(Container)<BoxProps & MaxWidthProps & HeightProps>`
  position: relative;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  margin-bottom: 0;
  list-style: none;
  
  ${maxWidth}
  ${height}
`
TabsContainer.defaultProps = {
  ...TabsContainer.defaultProps,
  as: 'ul',
}

export const TabItem = styled(Box)`
  cursor: pointer;
`
TabItem.defaultProps = { as: 'li' }

export const TabLink = styled(Link)<SpaceProps>`
  display: flex;
  height: 100%;
  align-items: center;
  
  &:hover,
  &:focus {
    background: ${themeGet('colors.grays.8')};
  }
  
  ${space}
`
TabLink.defaultProps = { px: 'lg' }

export const WavesCy = styled(Text)<TextProps & BordersProps>`
  text-transform: uppercase;
  
  &:before {
    content: 'Waves';
  }
  
  ${borders}
`
WavesCy.defaultProps = {
  as: 'span',
  fontSize: 'xs',
  color: 'placeholder',
}
