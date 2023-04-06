import React from 'react';
import PropTypes from 'prop-types';
import './Ticker.scss';

function Ticker(props) {
  const {
    header, body, body2, gif,
  } = props;

  const tickerSections = [
    { content: body },
    { content: body2 },
    { content: body },
    { content: <img src={gif} alt="gif" title="gif" /> },
    { content: body2 },
    { content: body },
    { content: body2 },
    { content: body },
    { content: <img src={gif} alt="gif" title="gif" /> },
    { content: body2 },
  ];

  return (
    <div id="ticker--container">
      <div id="ticker-content-cotainer">
        {tickerSections.map((section, index) => (
          <div className="ticker-content" key={index}>
            {index % 3 === 0 && <h1>{header}</h1>}
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Ticker.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  body2: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired,
};

export default Ticker;
