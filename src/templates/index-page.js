import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled, { keyframes } from "styled-components"

import logo from '../img/logo.svg'


import Layout from '../components/Layout'
import TeamCard from "../components/team/TeamCard"
import ProjectCard from "../components/project/ProjectCard"

import Grid from "../components/layout/grid"

import { breakpoints } from "../components/breakpoints"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialIcons from '../components/SocialIcons'

import BannerVideo from "../img/videobanner.mp4"


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
          })`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", alignItems: "center", justifyContent: "center"
      }} >

        <div style={{zIndex: 999}}>
          <img src={logo} alt="Sweatshirt" style={{ width: '100%', height: 'auto' }} />
          <BannerNav>

            <Link to="/portfolio">See Our Work</Link>
            <Link to="/contact">Get In Touch &raquo;</Link> 



          </BannerNav>
          <SocialIcons />
        </div>

        <video loop muted autoPlay poster={image.childImageSharp.fluid.src} style={{position: "absolute", filter:"grayscale(1)", top: 0, left:0, right: 0, bottom: 0, width: "auto", height: "100%"}}>
          <source src={BannerVideo} type="video/mp4" />
        </video>

      </Container>

      <Container>
        <h1>We Are Makers. <Link to="/portfolio" style={{fontSize: "0.5em", verticalAlign: "middle", color: "inherit", fontWeight: 100}}>See&nbsp;Our&nbsp;Work&nbsp;&raquo;</Link></h1>
        <Grid col={3}>
          {projects.map(({ node: project }, i) => (
            <ProjectCard project={project} />
            // <ProjectCard project={project} featured={i === 0}/>
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
        id
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
          teamID
          slug
        }
      }
    }
  }
  projects: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}}}, limit: 6, sort: {fields: fields___weight, order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          
          featuredImage {
            childImageSharp {
              resize(width: 1200) {
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
  background: var(--mainColor);
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

width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 2rem 0;
color: #fff;

    @media ${breakpoints.laptop} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;

      width: 50vw;

    }

  a{ 
    color: inherit;
    text-decoration: none;
    padding: 0.5em;
    border-radius: 5px;
    border: 1px solid #fff;
    width: 100%;
    text-align: center;
    transition: 100ms;
    margin-bottom: 1em;
    &:hover{
      background: rgba(255,255,255,0.2);
    }


    @media ${breakpoints.laptop} {
      
      margin-bottom: 0;

    }


    &:last-of-type{
      background: var(--mainColor);
      font-weight: 900;
      border: 1px solid var(--darkerColor);
      margin-bottom: 0;

      &:hover{
        background: var(--darkerColor);
      }
    }
    
    

}
`



