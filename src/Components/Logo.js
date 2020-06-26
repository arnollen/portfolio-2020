/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import gsap, { Linear } from 'gsap';
import '../Styles/App.scss';
import logo from './svg/logo.svg';

class Logo extends Component {
  currentColor = 0;

  maxColor = 0;

  colorCycles = ['#ffe600', '#ff0000', '#2912D6', '#45FF00'];

  colorTime = 15;

  colorTrans = 2;

  cycleIt = true;

  constructor(props) {
    super(props);
    this.state = { hidden: 'block' };
  }

  componentDidMount = () => {
    this.cycleIt = true;
    this.goComplete();
  }

  componentWillUnmount = () => {
    this.cycleIt = false;
  }

  appColorAnimation = () => {
    this.maxColor = this.colorCycles.length - 1;
    const getColor = this.colorCycles[this.currentColor];

    gsap.to('body', this.colorTrans,
      {
        backgroundColor: getColor, opacity: 1, ease: Linear.easeOut, delay: 3, overwrite: false,
      });

    if (this.currentColor !== this.maxColor) {
      this.currentColor += 1;
    } else {
      this.currentColor = 0;
    }
    // gsap.delayedCall(this.colorTime, this.goComplete, []);
  }

  goComplete = () => {
    if (this.cycleIt === true) {
      this.appColorAnimation();
    }
  }

  render() {
    const { hidden } = this.state;
    return (
      <div style={{ display: { hidden } }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Logo;
