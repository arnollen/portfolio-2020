import React from 'react';
import PropTypes from 'prop-types';
import './Bio.scss';

class Bio extends React.Component {
  constructor(props) {
    super(props);
    const { bio, name, page } = this.props;
    this.state = { data: bio, artist: name, url: page };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(newProps) {
    const removeAnchors = newProps.bio.replace(/<\/?a[^>]*>/g, '');
    this.setState({ data: removeAnchors, artist: newProps.name, url: newProps.page });
  }

  render() {
    const { data, artist, url } = this.state;
    return (
      <div id="bio-container">
        <div id="bio">
          <h1 className="bio-title">{artist}</h1>
          <p>{data}</p>
          <p><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
        </div>
      </div>
    );
  }
}

Bio.propTypes = {
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default Bio;