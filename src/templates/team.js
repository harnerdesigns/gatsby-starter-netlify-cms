import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"

import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Grid from '../components/layout/grid'
import Content, { HTMLContent } from '../components/Content'
import TeamCard from '../components/team/TeamCard'

import { breakpoints } from "../components/breakpoints"



export const TeamPageTemplate = ({ title, content, contentComponent, team }) => {
  const PageContent = contentComponent || Content

  return (
    <Container>
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <PageContent className="content" content={content} />

      <Grid col={1} >
        {team.map(({ node: member }, i) => (
          <TeamCard person={member} full flipped={i % 2 === 0} />
        ))}
      </Grid>
    </Container>
  )
}

TeamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TeamPage = ({ data }) => {
  const { page: post } = data
  const { edges } = data.team

  return (
    <Layout>
      <TeamPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        team={edges}
      />
    </Layout>
  )
}

TeamPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TeamPage

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    team: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "team-member"}}}, limit: 1000, sort: {fields: fields___weight, order: DESC}) {
      edges {
        node {
          html
          frontmatter {
            name
            jobTitle
            featuredImage {
              childImageSharp {
                resize(width: 1200) {
                  src
                }
              }
            }
          }
          fields {
            slug
            teamID
            quote
          }

        }
      }
    }
  }
`



const Container = styled.section`
  width: 95%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:relative;
  padding: 5vh 1vh;
  margin: 0 auto;

      @media ${breakpoints.laptop} {
  width: 70%;


      }

  & > h1{
    text-align: center;
  }
`