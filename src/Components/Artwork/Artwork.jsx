/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import './Artwork.scss'; // Import SCSS file

class Artwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artworkList: [],
      currentSlideIndex: 0,
      loading: true,
      error: null,
      slidesToShow: 1, // Changed to show only one slide at a time
      totalSlides: 0, // Total number of slides
      hoveredLeft: false,
      hoveredRight: false,
    };
  }

  componentDidMount() {
    // Simulate fetching artwork data from an API
    setTimeout(() => {
      // Sample list of artwork with images
      const artworkList = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= 100; i++) { // Changed to 100 slides for demonstration
        artworkList.push({
          title: `Artwork ${i}`,
          imageUrl: `https://via.placeholder.com/800x600/00${i}${i}FF/FFFFFF/?text=Artwork${i}`,
          description: `Description for Artwork ${i}`,
        });
      }

      this.setState({
        artworkList,
        loading: false,
        totalSlides: artworkList.length,
      });
    }, 1000); // Simulate a delay in fetching data
  }

  handlePrevSlide = () => {
    this.setState((prevState) => ({
      currentSlideIndex: (prevState.currentSlideIndex - 1 + prevState.totalSlides) % prevState.totalSlides,
    }));
  };

  handleNextSlide = () => {
    this.setState((prevState) => ({
      currentSlideIndex: (prevState.currentSlideIndex + 1) % prevState.totalSlides,
    }));
  };

  handleMouseOver = (e) => {
    if (e.target.id === 'right--slide') {
      this.setState({ hoveredRight: true });
    } else {
      this.setState({ hoveredLeft: true });
    }
  };

  handleMouseOut = (e) => {
    if (e.target.id === 'right--slide') {
      this.setState({ hoveredRight: false });
    } else {
      this.setState({ hoveredLeft: false });
    }
  };

  render() {
    const {
      artworkList, currentSlideIndex, loading, error, slidesToShow, hoveredLeft, hoveredRight,
    } = this.state;

    if (loading) {
      return <div className="loading">Loading...</div>;
    }

    if (error) {
      return (
        <div className="error">
          Error:
          {error}
        </div>
      );
    }

    // Calculate the start and end indexes of the visible slides
    const startIndex = currentSlideIndex;
    const endIndex = currentSlideIndex;

    return (
      <div className="artwork-container">
        {/* <h1>Artwork Slideshow</h1> */}
        <div className="slideshow">
          {artworkList.slice(startIndex, endIndex + 1).map((artwork, index) => (
            <div
              key={startIndex + index}
              className={`slide ${currentSlideIndex === startIndex + index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${artwork.imageUrl})` }}
            >
              <div className="overlay">
                <h2>{artwork.title}</h2>
                <p>{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={this.handlePrevSlide}
            onMouseOver={this.handleMouseOver}
            onFocus={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            onBlur={this.handleMouseOut}
            id="left--slide"
          >
            <p>&lt;</p>
          </button>
          {/* {artworkList.map((artwork, index) => (
            <button
              key={index}
              onClick={() => this.setState({ currentSlideIndex: index })}
              className={currentSlideIndex === index ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))} */}
          <button
            onClick={this.handleNextSlide}
            onMouseOver={this.handleMouseOver}
            onFocus={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            onBlur={this.handleMouseOut}
            id="right--slide"
          >
            <p>&gt;</p>
          </button>
        </div>
        <div className="highlights">
          <div id="left-highlight" className={hoveredLeft ? 'hightlight-true' : 'hightlight-false'} />
          <div id="right-highlight" className={hoveredRight ? 'hightlight-true' : 'hightlight-false'} />
        </div>
      </div>
    );
  }
}

export default Artwork;
