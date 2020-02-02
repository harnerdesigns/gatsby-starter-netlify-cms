import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components"

import { breakpoints } from "./breakpoints"


class VideoBanner extends React.Component {

  state = {
    mainImage: this.props.pictures[0],
    selectedIndex: 0,
    pictures: this.props.pictures,
    youtubeId: null,
    zoom: false

  }

  componentDidMount = () => {

    let youtubeId = this.getIdFromYouTubeLink(this.props.video)

    this.setState({    youtubeId: youtubeId  })
  }

  getIdFromYouTubeLink = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  }

  updateMainImage = (index) => {

    this.setState({ mainImage: this.state.pictures[index], selectedIndex: index });

  }

  zoomToggle = () => {

    this.setState({
      zoom: !this.state.zoom
    })

  }

  render = () => {

    const pictures = this.state.pictures ? this.state.pictures.map((image, i) => <GridImageSelector image={image} onClick={() => this.updateMainImage(i)} selected={this.state.selectedIndex === i} />) : "No pictures Found";


    return (
      <GalleryContainer className={this.state.zoom ? "zoom" : "no-zoom"}>

        {this.state.youtubeId ?

          <VideoWrapper>
            <iframe style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src={"https://www.youtube.com/embed/" + this.state.youtubeId + "?autoplay=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"}></iframe>
          </VideoWrapper>

          : "" }


          <MainImage>
            {this.state.mainImage && <img src={!!this.state.mainImage.childImageSharp ? this.state.mainImage.childImageSharp.resize.src : this.state.mainImage.image.childImageSharp.resize.src} />}
            {this.state.mainImage && <BlurBG src={!!this.state.mainImage.childImageSharp ? this.state.mainImage.childImageSharp.resize.src : this.state.mainImage.image.childImageSharp.resize.src} />}

            <GalleryControls onClickPrev={() => this.updateMainImage(this.state.selectedIndex - 1)} onClickNext={() => this.updateMainImage(this.state.selectedIndex + 1)}
              onClickZoom={this.zoomToggle} selected={this.state.selectedIndex} min={0} max={this.state.pictures.length - 1} zoomState={this.state.zoom} />
          </MainImage>





        





        {pictures.length > 1 ? <ImageGrid>
          {pictures}
        </ImageGrid> : ""}

      </GalleryContainer>
    )
  }
}

VideoBanner.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}


export default VideoBanner


const GridImageSelector = ({ image, onClick, selected = false }) => (

  <img
    onClick={onClick}
    src={!!image.childImageSharp ? image.childImageSharp.resize.src : image.image.childImageSharp.resize.src}
    className={selected ? "selected" : ""}

  />


)

const GalleryControls = ({ onClickPrev, onClickNext, onClickZoom, selected, min, max, zoomState }) => {


  const prev = (selected > min ? <button onClick={onClickPrev} className="gallery__prev"><FontAwesomeIcon icon="caret-left" fixedWidth /></button> : "")
  const next = (selected < max ? <button onClick={onClickNext} className="gallery__next"><FontAwesomeIcon icon="caret-right" fixedWidth /></button> : "")

  const zoom = <ZoomButton onClick={onClickZoom} >

    {(zoomState ? <FontAwesomeIcon icon="search-minus" /> : <FontAwesomeIcon icon="search-plus" />)}

  </ZoomButton>
  return (

    <GalleryControlsContainer>
      {prev} 
      {zoom}
      {next}

    </GalleryControlsContainer>


  )

}

const MainImage = styled.div`

width: 100%;
height: 50vh;
display: flex;
align-items: center;
justify-content: center;
padding: 1em;
position: relative;
background: rgba(33,33,33,0.5);
overflow: hidden;

img {
  object-fit: contain;

  box-shadow: 0 3px 6px -2px rgba(0,0,0,0.4);
  height: 100%; 

}
`

const VideoWrapper = styled.div`
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    width: 100%;
    grid-column: 1 / -1;
`


const ZoomButton = styled.button`

width: 100%;
height: 100%;
background: none;
border: none;
grid-column: 2;
display: flex;
align-items: center;
justify-content: center;




svg{
  width: 0!important;
  transition: 300ms;
}

&:hover{
  svg{

    width: 3em !important;
  }
}

`

const GalleryContainer = styled.div`
width: 100%;

&.zoom{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #fff;
  overflow: scroll;

  ${MainImage}{
    height: 80vh;
    img{
      height: auto;
      width: 100%;
      // object-fit: cover;

      @media ${breakpoints.laptop} {

        height: 100%;
        width: auto;

      }
    }
  }

  ${ZoomButton}{
    width: 10vw;
    height: 10vw;
    top: 2em;
    right: 2em;
    background: rgba(255,255,255,0.5);
    position: absolute;

    svg{
      width: 100%!important;
    }

    @media ${breakpoints.laptop} {

      width: 5vw;
      height: 5vw;

      svg{
        width:3vw!important;
      }

    }


  }
}
`
const GalleryControlsContainer = styled.div`

position: absolute;
width: 100%;
height: 100%;
color: #000;
display: grid;
grid-template-columns: 1fr 3fr 1fr;
align-items: center;
opacity: 0.1;
transition: 300ms;

&:hover{
  opacity: 1;
}

.gallery__prev,
.gallery__next,
${ZoomButton}{
  margin: 0.5em;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  &:hover{
    svg{color: var(--mainColor)}
  }

  svg{
    width: 1.5em;
  }
}

.gallery__prev{
  grid-column: 1;
  margin-right: auto;
}

.gallery__next{
  margin-left: auto;
  grid-column: 3;
}
`

const BlurBG = styled.img`

filter: blur(4px);
width: 100%!important;
height: 100% !important;
z-index: -1;
object-fit: cover!important;
position: absolute; 
top: 50%;
left: 0;
right: 0;
bottom: 0;
transform: translate(0, -50%);
opacity: 0.5;
`

const ImageGrid = styled.div`
display: grid;
grid-template-columns: repeat(5,1fr);
align-items: center;
grid-gap: 1em;
padding: 0.5em;

img{
  object-fit: cover;
  border: 1px solid #aaa;
  pointer: cursor;
  

  &:hover{
    border: 1px solid #333;
  }

  &.selected{
    border: 2px solid var(--mainColor);
  }
}

`