/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './RandomContent.scss';

class RandomContent extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount = () => {
  }

  componentWillUnmount = () => {
  }

  onMouseMove(e) {
  }

  handleOver = (topic) => {
  }

  handleOut = () => {
  }

  render() {
    return (
      <div id="random">
        <div id="random--container">
          <div id="image--container">
            <div id="image">

            </div>

            <div id="info--container">
              <div id="info">
                  <p>info</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default RandomContent;
