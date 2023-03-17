/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { playSound } from '../SoundManager/SoundManager';
import './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSound = playSound;
  }

  // handleOver = () => {
  //   this.getSound(0);
  // };

  handleClick = () => {
    this.getSound(1);
  };

  render() {
    return (
      <div id="footer">
        <ScrollLink className="scroll-to-link" activeClass="active" to="top-scroll-to" spy smooth="easeInOutCubic" duration={1000} onClick={() => this.handleClick()}>^</ScrollLink>
      </div>
    );
  }
}

export default Footer;
