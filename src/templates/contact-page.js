import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'
import ContactForm from '../components/contact/contactForm'

import { breakpoints } from "../components/breakpoints"

import styled from "styled-components"
import waves from '../img/waves.svg'
import SocialIcons from '../components/SocialIcons'



function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false, pageContent: {...this.props.data.markdownRemark.frontmatter} }
    console.log(this.state);
  }



  render() {
    let content = this.state.pageContent
    return (
      <Layout cta={false}>
        <ContactContainer>
            <ContactContent>
              <h1>{ content.title }</h1>
              
              <ContactForm labels={{name: content.nameLabel, email: content.emailLabel, message: content.messageLabel, submit: content.submitLabel  }} />
      <hr className="or" />
      <h4 style={{margin: 0}}>{content.socialHeader}</h4> 
              <SocialIcons color="#333" width="3rem"/>

            </ContactContent>
        </ContactContainer>
      </Layout>
    )
  }
}



export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        nameLabel
        emailLabel
        messageLabel
        submitLabel
        socialHeader
      }
    }
  }
`

const ContactContainer = styled.section`

width: 100%;
display: flex;
background: var(--mainColor) url(${waves}) bottom center no-repeat;
background-size: 100%;
overflow: hidden;
flex-direction: column;

@media ${breakpoints.laptop} {

  flex-direction: row;
  min-height: 85vh;


}



`

const ContactContent = styled.div`

background: #fff;

padding: 1em;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


form{ width: 95%;}


@media ${breakpoints.laptop} {

width: 50%; 
margin-left: auto;
background: #fff;
z-index: 1;
position: relative;

&:after{
  content: '';
  width: 6vw;
  height: 105vh;
  transform: rotate(5deg) translate(-50%);
  position: absolute;
  // border: 1px solid red;
  background: #fff;
  z-index: -1;
  top: 0;
  left: 0;
}

}


`