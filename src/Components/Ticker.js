/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Ticker.scss';

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: '',
      scrollText: 'SOME TEXT GOES HERE AND IT WILL SCROLL ACROSS THE SCREEN',
      scrollText2: 'SOME TEXT GOES HERE AND IT WILL SCROLL ACROSS THE SCREEN',
      scrollGif: 'https://media.giphy.com/media/111ebonMs90YLu/giphy.gif',
    };
  }

  componentDidMount = () => {
    const myProps = this.props;

    this.setState({
      section: myProps.header,
      scrollText: myProps.body,
      scrollText2: myProps.body2,
      scrollGif: myProps.gif,
    });
  }

  componentWillUnmount = () => {
  }

  componentDidUpdate = () => {
  }


  render() {
    const {
      scrollText, scrollText2, section, scrollGif,
    } = this.state;
    return (
      <div id="ticker--container">
        <div id="ticker-content-cotainer">
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
