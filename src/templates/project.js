import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"

import Img from 'gatsby-image'


import { breakpoints } from "../components/breakpoints"


const VideoGrid = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  align-items: flex-start;

  @media ${breakpoints.laptop} {
    grid-template-columns: 2fr 1fr;
  }
`
const VideoWrapper = styled.div`
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    width: 100%;
    grid-column: 1 / -1;
`

const ImagesWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-gap: 1em;   
    grid-column: 1;
    @media ${breakpoints.laptop} {
      position: sticky;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      top: 0;
    }

    img{
      width: 100%;
      height: auto;
    }
`
const ProjectContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  h1,h2{
    margin: 5px;
    width: 100%;
    text-align: center;
  }

  @media ${breakpoints.laptop} {
    position: sticky;
    display: flex;
    top: 0;
  }

`
const SingleProject = props => {
  const {
    data: { project },
  } = props

  const videoId = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  };

  const images = (project.frontmatter.images ? project.frontmatter.images.map(({ image }) => {
    return (<img src={image.childImageSharp.resize.src} />)
  }) : "")
  return (
    <Layout>
      <SEO title={project.frontmatter.title + " - " + project.fields.type + " " + (project.fields.clients.length ? "for " + project.fields.clients : "")} />
      <VideoGrid>
        


        <ImagesWrapper>

        {project.fields.youtubeLink ?
          <VideoWrapper>
            <iframe style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src={"https://www.youtube.com/embed/" + videoId(project.fields.youtubeLink) + "?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"}></iframe>
          </VideoWrapper> : ""}

          {project.frontmatter.featuredImage ?
            <div style={{width: "100%", height: "100%", display: "block"}}><img src={project.frontmatter.featuredImage.childImageSharp.fixed.src} /></div>
            : ""}

          {project.frontmatter.images ?
             images 
            : ""}


        </ImagesWrapper>



        <ProjectContent>
          <h1>{project.frontmatter.title}</h1>
          <h2>
            {project.fields.type}{" "}
            {project.fields.clients.length ? "for " + project.fields.clients : ""}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: project.html }} />
        </ProjectContent>
      </VideoGrid>
    </Layout>
  )
}

export default SingleProject

export const postQuery = graphql`
  query PostBySlug($id: String!) {
    project: markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
        clients
        type
        youtubeLink
        externalLink
      }
      frontmatter {
        title
        images {
          image {
            childImageSharp {
              resize(width: 1200) {
                src
              }
            }
          }
        }
        featuredImage {
          childImageSharp {
            fixed(width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`
