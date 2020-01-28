import React from 'react'
import { Link } from 'gatsby'

import SocialIcons from "./SocialIcons"

import styled from "styled-components"



const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>
        <div className="content has-text-centered">
          <Link to="/" title="Logo">
            <h1 style={{ margin: 0, color: "#fff", fontFamily: '"SeattleSans", sans-serif' }}>Sweatshirt Media</h1>
          </Link>
          <h5 style={{ color: "#fff", fontWeight: "100" }}>&copy; 2020 Sweatshirt Media</h5>
        </div>


        <SocialIcons />

      </StyledFooter>
    )
  }
}

export default Footer


const StyledFooter = styled.footer`

padding: 3rem;
background: var(--darkerColor);
box-shadow: inset 0 3px 6px rgba(0,0,0,0.2);

`