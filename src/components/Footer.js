import React from 'react'
import { Link } from 'gatsby'

import SocialIcons from "./SocialIcons"

import styled from "styled-components"
import { breakpoints } from "./breakpoints"

import logo from '../img/logo.svg'
import waves from '../img/waves.svg'
import ContactForm from './contact/contactForm'




const Footer = class extends React.Component {
  render() {
    return (
      <>

        {this.props.cta && <FooterCTA>

          <div>
            <h2>We'd love to hear from you.</h2>
          </div>

          <ContactForm />
        </FooterCTA>}

        <StyledFooter>
          <h5 style={{ color: "#fff", fontWeight: "100", display: "flex", alignItems: "center", justifyContent: "center" }}>&copy;&nbsp;2020 <Link to="/" title="Logo" style={{ margin: "0 0 0 0.5em", display: "flex", alignItems: "center", justifyContent: "center" }}><img src={logo} alt="Sweatshirt" style={{ width: 'auto', height: '1.25em' }} /></Link>
          </h5>

          <SocialIcons />

        </StyledFooter>
      </>
    )
  }
}

export default Footer


const FooterCTA = styled.footer`
width: 100%;
background: var(--mainColor) url(${waves}) bottom center no-repeat;
background-size: 100%;
padding: 3rem 1rem;
min-height: 25vh;
display: grid;
grid-template-columns: 1fr;
grid-gap: 2rem;
align-items: center;
justify-content: center;
flex-direction: column;

color: #fff;


& > div {
  margin-left: 0;
  text-align: center;
}

h2{
  font-weight: 900;
  margin: 0;
}

a.button{
  font-size: 1.25em;
  width: 100%;
  margin: 0 auto 0 0;

  font-weight: 900;
  box-shadow: 2px 2px 0 var(--darkerColor), 4px 4px 0 var(--darkerColor), 6px 6px 0 var(--darkerColor);
  transition: 200ms;
  border-radius: var(--borderRadius);

  &:hover{
    background: var(--darkerColor);
    color: #fff;
    box-shadow: 2px 2px 0 #fff, 4px 4px 0 #fff;
  }
}

@media ${breakpoints.laptop} {
  
  display: grid;
grid-template-columns: 1fr 1fr;
padding: 3rem;
grid-gap: 3rem;



& > div {
  margin-left: auto;
  text-align: right;
}

a.button{
  width: 50%;
}

h1, h2 {
  margin: 0 auto;
}


}


form{

  width: 95%;
  margin: 0 auto;
  @media ${breakpoints.laptop} {

  width: 70%;
  margin: 0 auto 0 0;

  }

  label{
    color: #fff;
  }
}

`


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