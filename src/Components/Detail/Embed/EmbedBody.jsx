/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

class EmbedBody extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { theBody, theIndex } = this.props;
    if (theBody[theIndex] === '') {
      return null;
    }
    return (
      <div className="detail--body">
        <p>{parse(String(theBody[theIndex]))}</p>
      </div>
    );
  }
}

EmbedBody.propTypes = {
  theBody: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  theIndex: PropTypes.number.isRequired,
};

export default EmbedBody;
