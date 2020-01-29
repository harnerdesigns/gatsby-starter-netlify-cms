import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components"



import BannerVideoMP4 from "../img/videobanner.mp4"
import BannerVideoWEBM from "../img/videobanner.webm"
import BannerCover from "../img/videobg.png"

class VideoBanner extends React.Component {
  constructor(props){

    super(props)

    this.state = {playing: false}

  }
  componentDidMount = () => {
    this.playVideo();
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
      <>
        <video ref="vidRef" loop muted preload="metadata" poster={BannerCover} style={{ position: "absolute", filter: "grayscale(1)", top: "50%", left: "50%", right: 0, bottom: 0, width: "100%", height: "100%", transform: "translate(-50%, -50%)", objectFit: "cover" }}>
          <source src={BannerVideoWEBM} type="video/webm" />
          <source src={BannerVideoMP4} type="video/mp4" />
        </video>

        <VideoControls>

          {this.state.playing ? <FontAwesomeIcon icon="pause" onClick={this.pauseVideo} /> : <FontAwesomeIcon icon="play" onClick={this.playVideo} />}
          <Link to="/portfolio/desure-youre-so-vain/">Desure - You're So Vain</Link>
        </VideoControls>
      </>
    )
  }
}

VideoBanner.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}


export default VideoBanner


const VideoControls = styled.div`

position: absolute;
bottom: 1em;
left: 1em;
color: #fff;


a{
  color: inherit;
  text-decoration: underline;
}

  svg{
    width: 1em;
    vertical-align: middle; margin-right: 0.5em;
  }

`