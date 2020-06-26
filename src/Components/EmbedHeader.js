/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

class EmbedHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  convertToArray = (currentString) => {
    const setArray = JSON.parse(currentString);
    return setArray;
  }

    render = () => {
      const { theHeader, theIndex } = this.props;
      if (theHeader[theIndex] === '') {
        return null;
      }
      return (
        <div className="detail--header">
          <h1>{parse(String(theHeader[theIndex]))}</h1>
        </div>
      );
    }
}

EmbedHeader.propTypes = {
  // eslint-disable-next-line max-len
  theHeader: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  theIndex: PropTypes.number.isRequired,
};


export default EmbedHeader;
