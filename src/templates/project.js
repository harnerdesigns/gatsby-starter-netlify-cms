import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"

import Img from 'gatsby-image'

import Gallery from "../components/Gallery"


import { breakpoints } from "../components/breakpoints"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const VideoGrid = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  align-items: flex-start;

  @media ${breakpoints.laptop} {
    grid-template-columns: 3fr 2fr;
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
    grid-template-columns: 1fr; 
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

  

  let galleryArray = []

  if (project.frontmatter.featuredImage) { galleryArray.push( project.frontmatter.featuredImage )}
  if (project.frontmatter.images) { galleryArray.push( ...project.frontmatter.images )}
  
  return (
    <Layout>
      <SEO title={project.frontmatter.title + " - " + project.fields.type + " " + (project.fields.clients.length ? "for " + project.fields.clients : "")} />
      <VideoGrid>
        <Gallery pictures={galleryArray} video={project.fields.youtubeLink} />



        {/* <ImagesWrapper>

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
            <div style={{width: "100%", height: "100%", display: "block"}}><img src={project.frontmatter.featuredImage.childImageSharp.resize.src} /></div>
            : ""}

          {project.frontmatter.images ?
             images 
            : ""}


        </ImagesWrapper> */}



        <ProjectContent>
          <h1>{project.frontmatter.title}</h1>
          <h2>
            {project.fields.type}{" "}
            {project.fields.clients.length ? "for " + project.fields.clients : ""}
          </h2>
          {project.fields.externalLink && <a href={project.fields.externalLink} className="button" target="_blank" rel="noreferer" style={{ width: "100%", margin: "1em auto", background: "var(--mainColor)", color: "#fff", fontWeight: 900 }}>View Project&nbsp;<FontAwesomeIcon width="16" icon="external-link-alt" style={{ maxWidth: "1.5em", marginLeft: "0.5em" }} /></a>}

          {project.fields.youtubeLink && <a href={project.fields.youtubeLink} className="button" target="_blank" rel="noreferer" style={{ width: "100%", margin: "1em auto", background: "#f44336", color: "#fff", fontWeight: 900 }}>Watch on YouTube <FontAwesomeIcon width="16" icon={["fab", "youtube"]} style={{ maxWidth: "1.5em", marginLeft: "0.5em" }} /></a>}


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
            resize(width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`
