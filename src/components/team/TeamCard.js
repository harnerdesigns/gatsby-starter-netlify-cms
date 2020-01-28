import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled from "styled-components"

import React from "react"
import Img from "gatsby-image"
import { breakpoints } from "../breakpoints"


const Card = styled.div`
  background: #fff;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-width: 100%;
  img {
    width: 100%;
    height: auto;
  }


  a.full{

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    font-size: 2rem;
    align-items: center;

    @media ${breakpoints.laptop} {
        grid-template-columns: 1fr 2fr;
        grid-gap: 2rem;
    }

  }

  a.flipped{ 
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;  

    @media ${breakpoints.laptop} {
    grid-template-columns: 2fr 1fr;

}
    img{
      grid-column: 2;
    }
  }

  
`

const Bio = styled.div`
width: 80%;
margin: 0 auto;
  p{font-size: 0.8rem;}

@media ${breakpoints.laptop} {
  
  p{font-size: 1rem;}
    width: 70%;

  }


`

const Meta = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr;
  margin: 0.5em 0;
  width: 100%;

  @media ${breakpoints.laptop} {
  grid-template-columns: 1fr 1fr;

  }

  h4,
  h5 {
    margin: 0;
    text-align: center;
  }

  h4{
    font-weight: 900;
  }

  h5{
    font-size: 1rem;
    margin-bottom: 1em;
  }

    @media ${breakpoints.laptop} {
    h4{
      text-align: left;
    }
    h5{
      text-align: right;
    }
  }

  &.full{

    grid-template-columns: 1fr;
    align-items: center;

    h4,h5{
      text-align: center;

      &.quote{
        font-size: 1rem;
        font-style: italic;
      }
    }
  }
  
`

const TeamCard = ({ person, full, flipped }) => (
  <Card id={person.fields.teamID}>
    <Link
      to={"/team#" + person.fields.teamID}
      style={{ textDecoration: `none`, color: "#212121" }}
      className={(full ? "full" : "") + " " + (flipped ? "flipped" : "")}
    >
      <img src={person.frontmatter.featuredImage.childImageSharp.resize.src} />
      <Meta className={(full ? "full" : "")}>
        <h4>{person.frontmatter.name}</h4>
        <h5>{person.frontmatter.jobTitle}</h5>
        {full && person.fields.quote ? <h5 className="quote">"{person.fields.quote}"</h5> : ""}
        {full && person.html ? <Bio dangerouslySetInnerHTML={{ __html: person.html }} /> : ""}

      </Meta>
    </Link>
  </Card>
)

TeamCard.propTypes = {
  person: PropTypes.object,
  full: PropTypes.bool,
}

TeamCard.defaultProps = {
  person: ``,
  full: false
}

export default TeamCard
