/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../Styles/App.scss';

class fourzerofour extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    setTimeout(() => { window.location.href = '/'; }, 10);
  }

  componentWillUnmount = () => {
  }

  render() {
    return (
      <div />
    );
  }
}

export default fourzerofour;
