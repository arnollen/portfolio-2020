/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import '../Styles/About.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  componentDidMount = () => {
    this.cycleIt = true;
  }

  componentWillUnmount = () => {
    this.cycleIt = false;
  }

  onMouseMove(e) {
    this.setState({ x: e.nativeEvent.screenX, y: e.nativeEvent.screenY });
  }

  handleOver = (topic) => {
    this.showImageRoll(topic);
    ReactGA.modalview(`${topic}  about rollover`);
  }

  handleOut = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('about--roll--container'));
  }

  rollFollow = () => {
    const title = this.state;
    const rollDiv = document.getElementById('about--roll--container');
    const rollHeight = rollDiv.clientHeight;
    const yOffset = 350 + rollHeight;
    rollDiv.style.top = `${title.y - yOffset}px`;
    rollDiv.style.left = `${title.x - 550}px`;
  }

  showImageRoll = (param) => {
    let currentRoll = '';
    switch (param) {
      case 'dog':
        currentRoll = 'https://media.giphy.com/media/BLeTkfK6TbjTa/giphy.gif';
        break;
      case 'cat':
        currentRoll = 'https://media.giphy.com/media/Tfi5w35wly0x2/giphy.gif';
        break;
      case 'chicago':
        currentRoll = 'https://media.giphy.com/media/3o751RXSjpayxoKUrC/giphy.gif';
        break;
      case 'cedar rapids':
        currentRoll = 'https://media.giphy.com/media/h7u9ZmbcX3rH5ZQAvl/giphy.gif';
        break;
      case 'coconut':
        currentRoll = 'https://media.giphy.com/media/31PYLYpkdnaMBhZ1Wk/giphy.gif';
        break;
      case 'travel':
        currentRoll = 'https://media.giphy.com/media/3o6nUYKzUwcW3mDgqI/giphy.gif';
        break;
      case 'smells':
        currentRoll = 'https://media.giphy.com/media/b5xDLakZRxJ6M/giphy.gif';
        break;
      case 'juices':
        currentRoll = 'https://media.giphy.com/media/EYRBBgX1BK5Pi/giphy.gif';
        break;
      case 'door':
        currentRoll = 'https://media.giphy.com/media/3WdUt1PX5mlSo/giphy.gif';
        break;
      case 'illustration':
        currentRoll = 'https://media.giphy.com/media/d31vTpVi1LAcDvdm/giphy.gif';
        break;
      default:
        currentRoll = param;
    }
    const element = <div id="about--gif" />;
    ReactDOM.render(element, document.getElementById('about--roll--container'));
    document.getElementById('about--gif').style.backgroundImage = `url('${currentRoll}')`;
  }

  render() {
    return (
      <div id="about">
        <div id="about--container">
          <h1>Hello!</h1>
          <p>
            My Name is Anthony Nollen and currently reside in
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove.bind(this)} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('chicago')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('chicago')} onTouchCancel={this.handleOut}>Chicago, Illinois</span>
            {' '}
            with my wife,
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove.bind(this)} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('dog')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('dog')} onTouchCancel={this.handleOut}>Dog</span>
            , and
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove.bind(this)} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('cat')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('cat')} onTouchCancel={this.handleOut}>Cat</span>
            . I went to School in Minneapolis at the now defunct Art Institute of Minnesota
            for graphic design. Born and raised in
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove.bind(this)} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('cedar rapids')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('cedar rapids')} onTouchCancel={this.handleOut}>Cedar Rapids, IA</span>
            {' '}
            the city of five seasons/
            <span className="about--roll" onMouseMove={this.onMouseMove.bind(this)} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('smells')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('smells')} onTouchCancel={this.handleOut}>smells</span>
            . Working in many roles over the years including Front-End development / interactive development, art direction,
            web / UI design, animation, and
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove.bind(this)} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('illustration')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('illustration')} onTouchCancel={this.handleOut}>illustration</span>
            . Just a few odd facts my right thumb is double jointed (its inherited). I do not like
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove.bind(this)} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('coconut')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('coconut')} onTouchCancel={this.handleOut}>coconut</span>
            , never have and do not know why. I try it again ever so often and nope its nasty.
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove.bind(this)} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('travel')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('travel')} onTouchCancel={this.handleOut}>Traveling</span>
            {' '}
            and experience new things are always a good time. Its good for the soul and the creative
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove.bind(this)} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('juices')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('juices')} onTouchCancel={this.handleOut}>juices</span>
            . I am always looking to work with great people. If you&#39;re looking to feel a role or just get a project out the
            {' '}
            <span className="about--roll" onMouseMove={this.onMouseMove.bind(this)} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={() => this.handleOver('door')} onMouseOut={this.handleOut} onTouchStart={() => this.handleOver('door')} onTouchCancel={this.handleOut}>door</span>
            . Shoot me an email anytime at
            {' '}
            <a href="mailto:anthonynollen@gmail.com?subject=Inquiry from anthonynollen.com">anthonynollen@gmail.com</a>
            . This site is also how I learn and experiment you can check out the
            {' '}
            <a href="https://github.com/arnollen/portfolio-2020">repo</a>
            {' '}
            here.

          </p>
        </div>
        <div id="about--roll--container" />
      </div>
    );
  }
}

export default About;
