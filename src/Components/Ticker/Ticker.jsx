/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Ticker.scss';

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: '',
      scrollText: 'SOME TEXT GOES HERE AND IT WILL SCROLL ACROSS THE SCREEN',
      scrollText2: 'SOME TEXT GOES HERE AND IT WILL SCROLL ACROSS THE SCREEN',
      scrollGif: 'https://media.giphy.com/media/111ebonMs90YLu/giphy.gif',
    };

    this.myTicker = React.createRef();
  }

  componentDidMount() {
    const myProps = this.props;

    this.setState({
      section: myProps.header,
      scrollText: myProps.body,
      scrollText2: myProps.body2,
      scrollGif: myProps.gif,
      setClassname: '',
    });

    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('onload', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('onload', this.handleScroll);
  }

  handleScroll = () => {
    const myDiv = this.myTicker.current;
    if (!myDiv) return;
    const { top, bottom } = myDiv.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (top < windowHeight && bottom >= 0) {
      this.setState({ setClassname: 'ticker-animation' });
    } else {
      this.setState({ setClassname: '' });
    }
  };

  render() {
    const {
      scrollText, scrollText2, section, scrollGif, setClassname,
    } = this.state;
    return (
      <div id="ticker--container" ref={this.myTicker}>
        <div id="ticker-content-cotainer" className={setClassname ? 'ticker-animation' : ''}>
          <div className="ticker-content">
            <h1>{ section }</h1>
          </div>
          <div className="ticker-content">
            <p>{ scrollText }</p>
            <p>{ scrollText2 }</p>
            <p>{ scrollText }</p>
          </div>
          <div className="ticker-content">
            <h1>{ section }</h1>
          </div>
          <div className="ticker-content">
            <img src={scrollGif} alt="gif" title="gif" />
          </div>
          <div className="ticker-content">
            <h1>{ section }</h1>
          </div>
          <div className="ticker-content">
            <p>{ scrollText2 }</p>
            <p>{ scrollText }</p>
            <p>{ scrollText2 }</p>
          </div>

          <div className="ticker-content">
            <h1>{ section }</h1>
          </div>
          <div className="ticker-content">
            <p>{ scrollText }</p>
            <p>{ scrollText2 }</p>
            <p>{ scrollText }</p>
          </div>
          <div className="ticker-content">
            <h1>{ section }</h1>
          </div>
          <div className="ticker-content">
            <img src={scrollGif} alt="gif" title="gif" />
          </div>
          <div className="ticker-content">
            <h1>{ section }</h1>
          </div>
          <div className="ticker-content">
            <p>{ scrollText2 }</p>
            <p>{ scrollText }</p>
            <p>{ scrollText2 }</p>
          </div>

        </div>
      </div>
    );
  }
}

Ticker.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  body2: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired,
};

export default Ticker;
