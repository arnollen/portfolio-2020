/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { playSound } from '../SoundManager/SoundManager';
import './Footer.scss';

class Footer extends Component {
  static handleOver = () => {
    playSound(0);
  };

  static handleClick = () => {
    playSound(1);
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="footer">
        <Link onMouseOver={this.handleOver} onClick={this.handleClick} className="scroll-to-link" activeClass="active" to="top-scroll-to" spy smooth="easeInOutCubic" duration={1000} />
      </div>
    );
  }
}

export default Footer;
