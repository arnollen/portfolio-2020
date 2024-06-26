/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactGA from 'react-ga4';
import { diffHours, numberWithCommas } from '../../Helpers/Helpers';
import { playSound } from '../SoundManager/SoundManager';
import './About.scss';

const newDate = new Date();
const date = newDate.getDate();
const month = newDate.getMonth() + 1;
const year = newDate.getFullYear();
const dt1 = new Date(1977, 3, 31);
const dt2 = new Date(year, month, date);

const getHours = String(` ${numberWithCommas(diffHours(dt2, dt1))} `);

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.currentRoll = '';
    // x: 0, y: 0
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleOver = (topic) => {
    this.showImageRoll(topic);
    ReactGA.send({ hitType: 'pageview', page: `${topic}  about rollover`, title: `${topic}  about rollover` });
    playSound(0);
  };

  handleOut = () => { // eslint-disable-line class-methods-use-this
    document.getElementById('about--gif').style.backgroundImage = 'none';
  };

  showImageRoll = (param) => {
    switch (param) {
      case 'dog':
        this.currentRoll = 'https://media.giphy.com/media/BLeTkfK6TbjTa/giphy.gif';
        break;
      case 'cat':
        this.currentRoll = 'https://media.giphy.com/media/Tfi5w35wly0x2/giphy.gif';
        break;
      case 'chicago':
        this.currentRoll = 'https://media.giphy.com/media/3o751RXSjpayxoKUrC/giphy.gif';
        break;
      case 'cedar rapids':
        this.currentRoll = 'https://media.giphy.com/media/h7u9ZmbcX3rH5ZQAvl/giphy.gif';
        break;
      case 'coconut':
        this.currentRoll = 'https://media.giphy.com/media/31PYLYpkdnaMBhZ1Wk/giphy.gif';
        break;
      case 'travel':
        this.currentRoll = 'https://media.giphy.com/media/rUlu713yOz2wM/source.gif';
        break;
      case 'smells':
        this.currentRoll = 'https://media.giphy.com/media/b5xDLakZRxJ6M/giphy.gif';
        break;
      case 'juices':
        this.currentRoll = 'https://media.giphy.com/media/EYRBBgX1BK5Pi/giphy.gif';
        break;
      case 'door':
        this.currentRoll = 'https://media.giphy.com/media/3WdUt1PX5mlSo/giphy.gif';
        break;
      case 'illustration':
        this.currentRoll = 'https://media.giphy.com/media/d31vTpVi1LAcDvdm/giphy.gif';
        break;
      default:
        this.currentRoll = param;
    }

    document.getElementById('about--gif').style.backgroundImage = `url('${this.currentRoll}')`;
  };

  render() {
    return (
      <div id="about">
        <div id="about--container">
          <h1>Hello!</h1>
          <p id="about--copy">
            My Name is Anthony Nollen and currently reside in
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('chicago')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('chicago')} onTouchCancel={this.handleOut}>Chicago,&nbsp;Illinois</span>
            {' '}
            with my wife and
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('dog')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('dog')} onTouchCancel={this.handleOut}>Dog</span>
            {/* , and
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove.bind(this)} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('cat')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('cat')} onTouchCancel={this.handleOut}>Cat</span> */}
            &nbsp;Deborah. I have spent approximately
            {' '}
            { getHours }
            {' '}
            hours on this rock called planet earth. I went to School in Minneapolis at the now defunct Art Institute of Minnesota
            for graphic design. Born and raised in
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('cedar rapids')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('cedar rapids')} onTouchCancel={this.handleOut}>Cedar&nbsp;Rapids,&nbsp;IA</span>
            {' '}
            the city of five seasons/
            <span className="about--roll" onMouseMove={this.onMouseMove} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('smells')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('smells')} onTouchCancel={this.handleOut}>smells</span>
            . Working in many roles over the years including Front-End development / interactive development, art direction,
            web / UI design, graphic design, animation,&nbsp;
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('illustration')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('illustration')} onTouchCancel={this.handleOut}>illustration</span>
            , and detassler. Just a few odd facts my right thumb was double jointed (I was in a crazy car accident christmas eve, jammed my thumb and it is no longer double jointed. Very interesting). I do not like
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('coconut')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('coconut')} onTouchCancel={this.handleOut}>coconut</span>
            , never have and do not know why. I try it again ever so often and nope its nasty.
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('travel')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('travel')} onTouchCancel={this.handleOut}>Traveling</span>
            {' '}
            and experience new things are always a good time. Its good for the soul and the creative
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('juices')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('juices')} onTouchCancel={this.handleOut}>juices</span>
            . I am always looking to work with awesome people. If you&#39;re looking to feel a role or just get a project out the
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('door')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('door')} onTouchCancel={this.handleOut}>door</span>
            . Shoot me an email anytime at
            {' '}
            <a href="mailto:anthonynollen@gmail.com?subject=Inquiry from anthonynollen.com">anthonynollen@gmail.com</a>
            . This site is also how I learn and experiment from time to time, you can check out the
            {' '}
            <a href="https://github.com/arnollen/portfolio-2020">repo</a>
            {' '}
            here.

          </p>
        </div>
        <div id="about--roll--container">
          <div id="about--gif" />
        </div>
      </div>
    );
  }
}

export default About;
