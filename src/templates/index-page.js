import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import  styled, {keyframes} from "styled-components"

import logo from '../img/logo.svg'


import Layout from '../components/Layout'
import TeamCard from "../components/team/TeamCard"
import ProjectCard from "../components/project/ProjectCard"

import Grid from "../components/layout/grid"

import { breakpoints } from "../components/breakpoints"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const IndexPageTemplate = ({
  image,
  team,
  projects,
  storyTeller
}) => (
    <div>

      <Container style={{
        padding: "1rem", minHeight: "100vh", backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`, backgroundSize: "cover", backgroundPosition: "left center", backgroundAttachment: "fixed", alignItems: "center", justifyContent: "center"
      }} >
        <div style={{ background: "#333", padding: "2em", width: "50vw", marginTop: "auto" }}>
          <img src={logo} alt="Sweatshirt" style={{ width: '100%', height: 'auto' }} />
        </div>

        <BannerNav>

          <Link to="/portfolio">See Our Work</Link>



        </BannerNav>


        <ScrollIndicator><FontAwesomeIcon icon='caret-down'/> </ScrollIndicator>

      </Container>

      <Container>
        <h1>We Are Makers.</h1>
        <Grid col={3}>
          {projects.map(({ node: project }) => (
            <ProjectCard project={project} />
          ))}
        </Grid>


      </Container>

      <Container style={{
        minHeight: '60vh', backgroundImage: `url(${
          !!storyTeller.childImageSharp ? storyTeller.childImageSharp.fluid.src : storyTeller
          })`, backgroundSize: "cover", backgroundPosition: "center center", backgroundAttachment: "fixed"
      }}>
        <h1 style={{ color: "#fff", margin: "2em 0" }}>We Are Storytellers.</h1>
        <Grid col={3} style={{ background: "transparent", width: "80%" }}>
          <SkillsCard>
            <h4>Brand Identity</h4>
          </SkillsCard>
          <SkillsCard>
            <h4>Audio + Video</h4>
          </SkillsCard>
          <SkillsCard>
            <h4>Social Strategy</h4>
          </SkillsCard>
        </Grid>

      </Container>


      <Container>
        <h1>This Is Who We Are.</h1>
        <Grid>
          {team.map(({ node: member }) => (
            <TeamCard person={member} />
          ))}
        </Grid>
      </Container>
    </div>
  )

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index
  const { team, projects, storyTeller } = data

  return (
    <Layout noHeader>
      <IndexPageTemplate
        image={frontmatter.image}
        team={team.edges}
        projects={projects.edges}
        storyTeller={storyTeller}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
  index: markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      title
      image {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioHeader
    }
  }
  storyTeller: file(relativePath: {eq: "storytellers.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  team: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "team-member"}}}, limit: 6, sort: {fields: fields___weight, order: DESC}) {
    edges {
      node {
        frontmatter {
          name
          jobTitle
          featuredImage {
            childImageSharp {
              resize {
                src
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
  projects: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}}}, limit: 6) {
    edges {
      node {
        frontmatter {
          title
          
          featuredImage {
            childImageSharp {
              resize(width: 800) {
                src
              }
            }
          }
        }
        fields {
          type
          slug
          clients
        }
      }
    }
  }
}

`



const Container = styled.section`
  width: 100%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5vh 1vh;

  & > h1{
    text-align: center;
  }
`
const SkillsCard = styled.div`
background: #fff;
padding: 1rem;
transition: 100ms;

h4{
  margin: 0;
  text-align: center;
}

&:hover{
  background: #9C27B0;
  color: #fff;
}
`

const Form = styled.form`
margin: 1em auto;
font-size: 1.5rem;
width: 100%;

@media ${breakpoints.laptop} {
  width: 75%;
  }


input{
  width: 100%;
  font-size: 1em;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  padding: 0.25em;
  margin-bottom: 1em;

}

textarea{
  width: 100%;
  font-size: 1em;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  padding: 0.25em;
  min-height: 5ch;
  resize: vertical;
  margin-bottom: 1em;

}


button[type=submit]{
  width: 100%;
  text-align: center;
  font-size: 1em;
  border: 2px solid #fff; 
  color: #fff;
  background: transparent; 
  padding: 0.5em;
}

`



const BannerNav = styled.nav`

background: #333; 
width: 50vw;
display: flex;
align-items: center;
justify-content: center;

color: #fff;

a{ 

  color: inherit;
  text-decoration: none;
  padding: 0.5em;
  margin: 1em;
  border: 1px solid #fff;
  width: 50%;
  text-align: center;
  transition: 100ms;
  &:hover{
    background: rgba(255,255,255,0.2);
  }
}
`


const bounce = keyframes`
  0% {
    bottom: 2rem;
  }

  50%{
    bottom: 5rem;
  }

  100% {
    bottom: 2rem;
  }
`


const ScrollIndicator = styled.div`


display: block;

margin-top: auto;
margin-bottom: 2rem;
font-size: 4rem;
animation: ${bounce} 2s linear infinite;



`
