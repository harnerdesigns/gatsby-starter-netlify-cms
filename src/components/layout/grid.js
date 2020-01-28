import React from "react"
import styled from "styled-components"

import { breakpoints } from "../breakpoints"

const StyledGrid = styled.div`
  background: #fff;
  padding: 0.5em;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(${props => (props.col ? props.col/2 : 2)}, 1fr);
  grid-gap: 1em;
  align-items: stretch;
  grid-auto-flow: dense;

  @media ${breakpoints.laptop} {
    grid-template-columns: repeat(${props => (props.col ? props.col : 5)}, 1fr);
  }


  .featured{
    @media ${breakpoints.laptop} {

    grid-column: span 2;
    grid-row: span 2;
    font-size: 1.5em;
    }
  }
`

const Grid = ({ children, col, style }) => (
  <StyledGrid col={col} style={style} >{children}</StyledGrid>
)

export default Grid
