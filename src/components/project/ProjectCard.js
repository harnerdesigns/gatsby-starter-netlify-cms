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
  justify-content: center;
  margin: 0 0 auto;
  padding: 0.5em 0;
  width: 100%;

  h5
  {
    margin: 0;
    text-align: center;
    font-weight: 100;
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
        <h5>{project.frontmatter.title}</h5>
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
