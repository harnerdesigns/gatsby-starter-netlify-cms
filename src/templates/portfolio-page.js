import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"

import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Grid from '../components/layout/grid'
import Content, { HTMLContent } from '../components/Content'
import ProjectCard from '../components/project/ProjectCard'


export const PortfolioPageTemplate = ({ title, content, contentComponent, projects }) => {
  const PageContent = contentComponent || Content

  return (
    <Container>
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <PageContent className="content" content={content} />

      <Grid col={3} >
        {projects.map(({ node: project }, i) => (
          <ProjectCard project={project} featured={i === 0 || i % 4 === 0} />
        ))}
      </Grid>
    </Container>
  )
}

PortfolioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PortfolioPage = ({ data }) => {
  const { page: post } = data
  const { edges } = data.projects

  return (
    <Layout>
      <PortfolioPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        projects={edges}
      />
    </Layout>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PortfolioPage

export const portfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    projects: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}}}, limit: 1000) {
      edges {
        node {
          frontmatter {
            title
            
            featuredImage {
              childImageSharp {
              resize(width: 1200, height: 672, cropFocus: CENTER  ) {
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
  position:relative;
  padding: 5vh 1vh;

  & > h1{
    text-align: center;
  }
`