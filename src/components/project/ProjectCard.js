import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled from "styled-components"

import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"


const Card = styled.div`
  background: #fff;
  // padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: column;
  min-width: 100%;
  border-bottom: 10px solid #000;
  height: 100%;
  img {
    width: 100%;
    height: auto;
    margin-bottom: auto;
  }
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 auto;
  padding: 0.5em 1em;
  width: 100%;

  h4,
  h5 {
    margin: 0;
  }
  h4{
    font-weight: 900;
    margin-right: 1em;
  }
  h5{
    text-align: right;
  }
`

const ProjectCard = ({ project, style, featured }) => (
  <AniLink cover direction="down" bg={"url("+project.frontmatter.featuredImage.childImageSharp.resize.src + ") center / cover"}
    to={project.fields.slug}
    style={{ textDecoration: `none`, color: "#212121", ...style }}
    className = { featured ? "featured" : ""}
  >
    <Card>
      <img src={project.frontmatter.featuredImage.childImageSharp.resize.src} />
      <Meta>
        <h4>{project.frontmatter.title}</h4>
        <h5>
          {project.fields.type}{" "}
          {project.fields.clients.length ? "for " + project.fields.clients : ""}
        </h5>
      </Meta>
    </Card>
  </AniLink>
)

ProjectCard.propTypes = {
  project: PropTypes.object,
}

ProjectCard.defaultProps = {
  project: ``,
}

export default ProjectCard
