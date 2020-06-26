/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import gsap, { Linear } from 'gsap';
import PropTypes from 'prop-types';

class EmbedVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

    componentDidMount = () => {
      gsap.set('#detail--separator-navigation', {
        backgroundColor: '#300',
        opacity: 1,
        ease: Linear.easeOut,
        rotationZ: 0.01,
        force3D: true,
        overwrite: true,
      });
    }

    render() {
      const { video } = this.props;
      if (video === '') {
        return null;
      }
      return (
        <div id="detail--video">
          <div id="projects--detail--video">
            <div className="video--container">
              <iframe title={video} src={`${video}?portrait=0&amp;color=ff0000&amp;loop=1`} width="500px" height="281px" frameBorder="0" />
            </div>
          </div>
        </div>
      );
    }
}

EmbedVideo.propTypes = {
  video: PropTypes.string.isRequired,
};


export default EmbedVideo;
