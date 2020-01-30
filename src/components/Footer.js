import React from 'react'
import { Link } from 'gatsby'

import SocialIcons from "./SocialIcons"

import styled from "styled-components"
import { breakpoints } from "./breakpoints"

import logo from '../img/logo.svg'




const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>
        <h5 style={{ color: "#fff", fontWeight: "100", display: "flex", alignItems: "center",justifyContent:"center" }}>&copy; 2020 <Link to="/" title="Logo" style={{ margin: "0 0 0 0.5em", display: "flex", alignItems: "center", justifyContent: "center" }}><img src={logo} alt="Sweatshirt" style={{ width: 'auto', height: '1.25em' }} /></Link>
        </h5>

        <SocialIcons />

      </StyledFooter>
    )
  }
}

export default Footer


const StyledFooter = styled.footer`

padding: 0 3rem;
background: var(--darkerColor);
box-shadow: inset 0 3px 6px rgba(0,0,0,0.2);

display: flex; align-items: center; justify-content: space-around;
flex-direction: column;

@media ${breakpoints.laptop} {
display: grid;
grid-template-columns: 1fr 1fr;

h1, h5{
  text-align: center;
  margin: 0;
}
img{
  margin: 0 auto;
}
}

`