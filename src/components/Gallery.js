import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components"

class VideoBanner extends React.Component {

  state = {
    mainImage: this.props.pictures[0],
    selectedIndex: 0,
    pictures: this.props.pictures
  }

  updateMainImage = (index) => {

    this.setState({ mainImage: this.state.pictures[index], selectedIndex: index});

  }
   
  render = () => {

    console.log(this.state)


    const pictures = this.state.pictures ? this.state.pictures.map((image, i) => <GridImageSelector image={image} onClick={() => this.updateMainImage(i)} selected = {this.state.selectedIndex === i} />) : "No pictures Found";
    return (
      <GalleryContainer>

        <MainImage>
          {this.state.mainImage && <img src={!!this.state.mainImage.childImageSharp ? this.state.mainImage.childImageSharp.resize.src : this.state.mainImage.image.childImageSharp.resize.src} />}
          {this.state.mainImage && <BlurBG src={!!this.state.mainImage.childImageSharp ? this.state.mainImage.childImageSharp.resize.src : this.state.mainImage.image.childImageSharp.resize.src} />}

          <GalleryControls onClickPrev={() => this.updateMainImage(this.state.selectedIndex - 1)} onClickNext={() => this.updateMainImage(this.state.selectedIndex + 1)} selected={this.state.selectedIndex} max={this.state.pictures.length} />
        </MainImage>

      <ImageGrid>
        {pictures}
      </ImageGrid>

      </GalleryContainer>
    )
  }
}

VideoBanner.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}


export default VideoBanner


const GridImageSelector = ({image, onClick, selected = false}) => (

  <img 
  onClick={onClick} 
  src={!!image.childImageSharp ? image.childImageSharp.resize.src : image.image.childImageSharp.resize.src} 
  className = {selected ? "selected" : ""}
  
  />


)

const GalleryControls = ({onClickPrev, onClickNext, selected, max}) => {


  const prev = (selected > 0 ? <FontAwesomeIcon onClick={onClickPrev} className="gallery__prev" icon="caret-left" fixedWidth /> : "")
  const next = (selected < max - 1 ? <FontAwesomeIcon onClick={onClickNext} className="gallery__next" icon="caret-right" fixedWidth /> : "")
  return(

    <GalleryControlsContainer>
      {prev}
      {next}

    </GalleryControlsContainer>


  )

}

const GalleryContainer = styled.div`
width: 100%;
`
const GalleryControlsContainer = styled.div`

position: absolute;
width: 100%;
color: #000;
display: grid;
grid-template-columns: 1fr 3fr 1fr;
opacity: 0.1;

&:hover{
  opacity: 1;
}
svg{
  width: 1.5em;
}

.gallery__prev,
.gallery__next{
  margin: 0.5em;
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