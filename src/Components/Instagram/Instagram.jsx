import React, { Component } from 'react';
import './Instagram.scss';

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Fetch data from Instagram API
    fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=YOUR_ACCESS_TOKEN')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          photos: data.data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: error.message,
        });
      });
  }

  render() {
    const { photos, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return (
        <div>
          Error:
          {error}
        </div>
      );
    }

    return (
      <div>
        <h1>Instagram Photos</h1>
        <div className="photos-container">
          {photos.map((photo) => (
            <div key={photo.id} className="photo">
              <img src={photo.images.standard_resolution.url} alt={photo.caption.text} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Instagram;
