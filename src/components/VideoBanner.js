import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components"



import BannerVideoMP4 from "../img/videobanner.mp4"
import BannerVideoWEBM from "../img/videobanner.webm"
import BannerCover from "../img/videobg.jpg"

class VideoBanner extends React.Component {
  constructor(props){

    super(props)

    this.state = {playing: false}


  }
  componentDidMount = () => {
    this.refs.vidRef.oncanplaythrough = this.playVideo();

    // this.playVideo();
  };

  componentWillUnmount = () => {
    this.pauseVideo();
  };


  playVideo = () => {
    // You can use the play method as normal on your video ref
    this.refs.vidRef.play();
    this.setState({playing: true})
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
    this.setState({playing: false})

  };
 
  render = () => {
    return (
      <VideoContainer>
        <video ref="vidRef" loop muted playsInline preload="none" poster={BannerCover} 
        style={{ 
          
        filter: "grayscale(1)",
        width: "100%", 
        height: "100%", 
        objectFit: "cover", zIndex: 1 }}>
          <source src={BannerVideoMP4} type="video/mp4" />
          <source src={BannerVideoWEBM} type="video/webm" />
        </video>

        <VideoControls>

          {this.state.playing ? <FontAwesomeIcon width="16" icon="pause" onClick={this.pauseVideo} /> : <FontAwesomeIcon width="16" icon="play" onClick={this.playVideo} />}
          <Link to="/portfolio/desure-youre-so-vain/">Desure - You're So Vain</Link>
        </VideoControls>
      </VideoContainer>
    )
  }
}

VideoBanner.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}


export default VideoBanner

const VideoContainer = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
z-index: 999;
transform: translateZ(1px);
`


const VideoControls = styled.div`

position: absolute;
bottom: 1em;
left: 1em;
color: #fff;
transition: 300ms;
z-index: 2;



a{
  color: inherit;
  text-decoration: underline;
  &:hover{
    opacity: 0.7;
    color: var(--mainColor);
  }
}

  svg{
    width: 1em;
    vertical-align: middle; margin-right: 0.5em;
    &:hover{
      opacity: 0.7;
      color: var(--mainColor);

    }
  }

`