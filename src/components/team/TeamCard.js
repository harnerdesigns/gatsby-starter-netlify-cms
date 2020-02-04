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
    box-shadow: var(--boxShadow);
    border-radius: var(--borderRadius);
    width: 100%;
    height: auto;
  }


  .full{

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

  .flipped{ 
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

  @media ${breakpoints.laptopL} {
  grid-template-columns: 1fr 1fr;

  }

  h4,
  h5 {
    margin: 0;
    text-align: center;
  }

  h4{
    font-weight: 900;
        color: var(--mainColor);


  }

  h5{
    font-size: 1rem;
    margin: 0;
  }

    @media ${breakpoints.laptopL} {
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

    h4{
      font-weight: 900;
          color: var(--mainColor);
          font-size: 1.5rem;
  
          @media ${breakpoints.laptop}{
            font-size: 4rem;
          }
  
  
    }
  
    h5{
      font-size: 1rem;
      @media ${breakpoints.laptop}{
        font-size: 2rem;
      }
    }
  }
  
`

const TeamCard = ({ person, full, flipped }) => (
  <Card id={person.fields.teamID}>

    {full ? <FullCard person={person} flipped={flipped} /> : <SmallCard person={person} />}

  </Card>
)



const FullCard = ({ person, flipped }) => (


  <div
      to={"/team#" + person.fields.teamID}
      style={{ textDecoration: `none`, color: "#212121" }}
      className={"full " + (flipped ? "flipped" : "")}>
      <img src={person.frontmatter.featuredImage.childImageSharp.resize.src} />
      <Meta className="full">
        <h4>{person.frontmatter.name}</h4>
        <h5>{person.frontmatter.jobTitle}</h5>
        {person.fields.quote ? <h5 className="quote">"{person.fields.quote}"</h5> : ""}
        {person.html ? <Bio dangerouslySetInnerHTML={{ __html: person.html }} /> : ""}

      </Meta>
    </div>




)

const SmallCard = ({ person }) => (


  <Link
      to={"/team#" + person.fields.teamID}
      style={{ textDecoration: `none`, color: "#212121" }}>
      <img src={person.frontmatter.featuredImage.childImageSharp.resize.src} />
      <Meta>
        <h4>{person.frontmatter.name}</h4>
        <h5>{person.frontmatter.jobTitle}</h5>

      </Meta>
    </Link>




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
