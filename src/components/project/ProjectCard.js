import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled from "styled-components"

import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"


const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  margin: 0 0 auto;
  padding: 0.5em 0;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  background: rgba(255,255,255,0.8);
  color: #333;
  transition: 100ms;

  h4,h5
  {
    margin: 0;
    text-align: center;
  }

  h4{
    font-weight: 900;
  }

`


const Card = styled.div`
  background: #fff;
  // padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: column;
  min-width: 100%;
  height: 100%;
  position: relative;
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);
  overflow: hidden;
  img {
    border-radius: var(--borderRadius);
    width: 100%;
    height: auto;
    margin-bottom: auto;
    transition: transform 1000ms, filter 300ms;
  }

  &:hover{

    ${Meta}{
      background: var(--mainColor);
      color: #fff;
      box-shadow: var(--boxShadow);
    }

    img{transform: scale(1.1); filter: blur(5px);}
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
{project.fields.type && <h5>{project.fields.type} {project.fields.clients[0] && <span>for {project.fields.clients}</span>}</h5>}
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
