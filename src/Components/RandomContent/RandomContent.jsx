/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import ReactGA from 'react-ga';
import './RandomContent.scss';
import zineData from '../../Data/zine.json';

class RandomContent extends Component {
  constructor(props) {
    super(props);
    this.state = { zinePages: zineData, rightPage: '', leftPage: '' };
  }

  componentDidMount() {
    this.loadZineContent();
  }

  componentWillUnmount() {
  }

  loadZineContent = () => {
    // const right = document.getElementById('image-right');
    // const left = document.getElementById('image-left');
    console.log(this.state);
  };

  render() {
    return (
      <div id="random">
        <div id="random--container">
          <div id="random--navigation">
            <div id="navigtion--right">
              <p>{'<'}</p>
            </div>
            <div id="navigtion--left">
              <p>{'>'}</p>
            </div>
          </div>
          <div id="image--container">
            <div id="image-right">
              <div id="info--container">
                <div id="info">
                  <p>Add copy here...</p>
                </div>
              </div>
            </div>
            <div id="image-left">
              <div id="info--container">
                <div id="info">
                  <p>Add copy here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomContent;
