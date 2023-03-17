// import { get } from 'mongoose';
import React from 'react';
import './Spotify.scss';
import ReactGA from 'react-ga';
import { playSound } from '../SoundManager/SoundManager';

const apiKey = '98a2ee7691589ee264ffe41e2b21d4ca';
const user = 'arnollen';
const amount = '24';
const urlRecent = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=${amount}&period=overall`;

const songCards = document.getElementsByClassName('card');
let firstLoad = false;

class Lastfm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: '',
      pos: { left: 0, x: 0 },
    };
    this.ele = document.getElementById('card-container');
    this.getSound = playSound;
    this.getRandom = '';
    this.dx = '';
  }

  componentDidMount() {
    this.getRecent();
    setInterval(this.getRecent, 60000);
  }

  componentWillUnmount() {
    clearInterval();
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
    ReactGA.pageview('song viewed');
  };

  eqCards = () => {
    this.getRandom = `${String(-(Math.random() * 20) - (25))}px`;
    return this.getRandom;
  };

  mouseDownHandler = (e) => {
    // const { pos } = this.state;
    this.state.pos = {
      left: this.ele.scrollLeft,
      x: e.clientX,
    };
    document.addEventListener('mousemove', this.mouseMoveHandler);
  };

  mouseMoveHandler = (e) => {
    const { pos } = this.state;
    this.dx = e.clientX - pos.x;
    this.ele.scrollLeft = pos.left - this.dx;
  };

  getRecent = () => {
    if (songCards !== undefined) {
      if (firstLoad === true) {
        songCards.style.opacity = 0;
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
    this.eqCards();

    this.setState({
      recent: data.recenttracks.track,
    });
    if (songCards !== undefined) {
      if (firstLoad === true) {
        songCards.style.opacity = 0;
      }
    }

    firstLoad = false;
  };

  render() {
    const {
      recent,
    } = this.state;
    return (
      <div id="spotify" onMouseDown={this.handleEvent} onMouseUp={this.handleEvent} role="button" tabIndex="0">
        {/* <div id="header">
        <h1>Spotify</h1>
        <p>this is the where I say how cool this is</p>
      </div> */}
        <div id="card-container">
          {
                recent.length === 0
                  ? ''
                  : recent.map((data, i) => (
                    <div key={recent.id} className="card">
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
