/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import gsap, { Linear, SteppedEase, TimelineMax } from 'gsap';
import { thecontext } from '../Context/Context';

import './MouseFly.scss';

import FlyImage from '../../Images/gifs/mouseFlySprite.png';

class MouseFly extends Component {
  static rotateOnMouse = (mX, mY, elt) => {
    const offset = elt.offset();
    const centerX = (offset.left) + (elt.width() / 2);
    const centerY = (offset.top) + (elt.height() / 2);
    const mouseX = mX;
    const mouseY = mY;
    const radians = Math.atan2(mouseX - centerX, mouseY - centerY);
    const degree = (radians * (180 / Math.PI) * -1) + 90;
    return degree;
  };

  setY;

  setX;

  setOffsetX = 50;

  setOffsetY = 50;

  setOffsetRotation = '-50px -25px';

  circleTween = [];

  mouseTween = [];

  constructor(props) {
    super(props);
    this.state = { speed: thecontext.flySpeed };
    this.mouseTween = new TimelineMax({ delay: 0 });
  }

  componentDidMount() {
    document.body.addEventListener('mousemove', (e) => {
      this.moveFly(e, this);
    });

    document.body.addEventListener('mousedown', (e) => {
      this.moveFlyChangeDown(e, this);
      this.moveFly(e, this);
    });

    document.body.addEventListener('mouseup', (e) => {
      this.moveFlyChangeUp(e, this);
      this.moveFly(e, this);
    });

    this.flyAnimation();
  }

  componentWillUnmount() {
    document.body.removeEventListener('mousemove', (e) => {
      this.moveFly(e, this);
    });

    document.body.removeEventListener('mousedown', (e) => {
      this.moveFlyChangeDown(e, this);
      this.moveFly(e, this);
    });

    document.body.removeEventListener('mouseup', (e) => {
      this.moveFlyChangeUp(e, this);
      this.moveFly(e, this);
    });
  }

  flyAnimation = () => {
    this.circleTween = new TimelineMax({ delay: 0, repeat: -1, repeatDelay: 0 });
    this.circleTween.add(gsap.to('#fly--mouse', this.state.speed, {
      rotation: '-360',
      ease: Linear.easeOut,
      repeat: -1,
      transformOrigin: this.setOffsetRotation,
      force3D: true,
    }));

    gsap.to('#fly--mouse--img', 0.1, {
      repeat: -1,
      left: '-950px',
      ease: SteppedEase.config(19),
      rotationZ: 0.01,
      force3D: true,
    });
  };

  moveFlyChangeDown = () => {
    this.setOffsetX = Math.floor(((Math.random() * 600) - 300) + 100);
    this.setOffsetY = Math.floor(((Math.random() * 600) - 300) + 100);
    this.setOffsetRotation = '-150px -75px';
  };

  moveFlyChangeUp = () => {
    this.setOffsetX = 50;
    this.setOffsetY = 50;
    this.setOffsetRotation = '-50px -25px';
  };

  moveFly = (e) => {
    this.setY = e.pageY + this.setOffsetY;
    this.setX = e.pageX + this.setOffsetX;

    gsap.to('#fly--mouse--container', 0.25, {
      top: this.setY,
      left: this.setX,
      ease: Linear.easeIn,
      rotationZ: 0.01,
      force3D: true,
      overwrite: true,
      onComplete: MouseFly.rotateIT,
    });

    this.mouseTween.add(gsap.to('#fly--mouse--container', 0.25, {
      top: this.setY,
      left: this.setX,
      ease: Linear.easeIn,
      rotationZ: 0.01,
      force3D: true,
      overwrite: true,
    }));
  };

  render() {
    return (
      <div>
        <div id="fly--mouse--container">
          <div id="fly--mouse">
            <div id="fly--mouse--img">
              <img src={FlyImage} alt="Mouse Fly Follow" title="Mouse Fly Follow" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MouseFly;
