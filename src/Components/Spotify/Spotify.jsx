// import { get } from 'mongoose';
import React from 'react';
import './Spotify.scss';
import ReactGA from 'react-ga4';
import { playSound } from '../SoundManager/SoundManager';

const apiKey = '98a2ee7691589ee264ffe41e2b21d4ca';
const user = 'arnollen';
const amount = '24';
const urlRecent = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=${amount}&period=overall`;

let firstLoad = false;

class Lastfm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: '',
      pos: { left: 0, x: 0 },
    };

    this.getSound = playSound;
    this.addIdToArray = this.addIdToArray.bind(this);
  }

  componentDidMount() {
    this.getRecent();
    this.cardContainer = React.createRef();
    this.songCards = React.createRef();
    this.intervalId = setInterval(this.getRecent, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleEvent = (e) => {
    if (e.type === 'mousedown') {
      this.mouseDownHandler(e);
    }
    if (e.type === 'mouseup') {
      document.removeEventListener('mousemove', this.mouseMoveHandler);
    }
  };

  handleClick = () => {
    this.getSound(0);
    ReactGA.send({ hitType: 'Page View', page: 'song viewed') });
  };

  eqCards = () => {
    this.getRandom = `${String(-(Math.random() * 20) - (25))}px`;
    return this.getRandom;
  };

  mouseDownHandler = (e) => {
    this.setState({
      pos: {
        left: this.cardContainer.current.scrollLeft,
        x: e.clientX,
      },
    });

    document.addEventListener('mousemove', this.mouseMoveHandler);
  };

  mouseMoveHandler = (e) => {
    const { pos } = this.state;
    this.dx = e.clientX - pos.x;
    this.cardContainer.current.scrollLeft = pos.left - this.dx;
  };

  getRecent = () => {
    if (this.songCards !== undefined) {
      if (firstLoad === true) {
        this.songCards.current.style.opacity = 0;
      }
    }
    this.fetchRecent(urlRecent);
  };

  fetchRecent = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setData = (data) => {
    this.addIdToArray(data.recenttracks.track);

    this.eqCards();

    this.setState({
      recent: data.recenttracks.track,
    });

    if (this.songCards !== undefined) {
      if (firstLoad === true) {
        this.songCards.current.style.opacity = 0;
      }
    }

    firstLoad = false;
  };

  addIdToArray(data) { // eslint-disable-line class-methods-use-this
    const theData = data;
    theData.forEach((item, i) => {
      item.id = i + 1; // eslint-disable-line no-param-reassign
    });
  }

  render() {
    const {
      recent,
    } = this.state;
    return (
      <div id="spotify" onMouseDown={this.handleEvent} onMouseUp={this.handleEvent} role="button" tabIndex="0">
        <div id="card-container" ref={this.cardContainer}>
          {
                recent.length === 0
                  ? ''
                  : recent.map((data, i) => (
                    <div key={data.id} className="card">
                      <div className="eq" id={`eq-${i}`} style={{ top: this.eqCards() }} />
                      <div className="artist-count">
                        <div className="artist-count-copy-cotainer">
                          <div className="artist-count-copy">
                            <p className="unselectable">{i + 1}</p>
                          </div>
                        </div>
                      </div>
                      <div className="artist-image unselectable">
                        <div className="artist-image-bg" style={{ backgroundImage: `url("${data.image[2]['#text']}")` }} />
                      </div>
                      <div className="artist-name unselectable">
                        <p>{data.artist['#text']}</p>
                      </div>
                      <div className="artist-album unselectable">
                        <p>{data.album['#text']}</p>
                      </div>
                      <div className="artist-song unselectable">
                        <p>{data.name}</p>
                      </div>
                      <div className="artist-link">
                        <a href={data.url} data-param={JSON.stringify({ name: data.artist['#text'], song: data.name })} rel="noopener noreferrer" target="_blank" onClick={this.handleClick} className="unselectable">Play Song</a>
                      </div>
                    </div>
                  ))
                }
        </div>
      </div>
    );
  }
}

export default Lastfm;
