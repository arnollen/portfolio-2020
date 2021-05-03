
import { get } from 'mongoose';
import React from 'react';
import './Spotify.scss';
import { playSound } from '../SoundManager/SoundManager';
import ReactGA from 'react-ga';

const apiKey = '98a2ee7691589ee264ffe41e2b21d4ca';
const user = 'arnollen';
const amount = '24';
let urlRecent = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=${amount}&period=overall`;

let songCards = document.getElementsByClassName('card');
let firstLoad = false;

class Lastfm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: "",
    };
  }

  componentDidMount = () => {
    this.getRecent();

    // set to 3 min in 30 sec average song length 210000)
    setInterval(this.getRecent, 60000);
  }

  componentWillUnmount = () => {
    clearInterval();
  }

  componentDidUpdate = () => {
   
  }

  handleClick = (e) => {
    playSound(0);
    ReactGA.pageview(`song viewed`);
  }

eqCards = () => {
  const getRandom = String(-(Math.random()*20)-(25)) + 'px';
  return getRandom
}
  
getRecent = () => {
  if(songCards !== undefined & firstLoad === true){
    songCards.style.opacity = 0;
  }
  this.fetchRecent(urlRecent);
}

fetchRecent = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      this.setData(data);
    })
    .catch((err) => {
      //console.log(err);
    });
}

setData = (data) =>{
  // const newData = data.recenttracks.track[0].album["#text"];
  const oldData = this.state.recent[0];

  this.eqCards();

  this.setState({
    recent: data.recenttracks.track
  });
  if(songCards !== undefined & firstLoad === true){
    songCards.style.opacity = 0;
  }

  firstLoad = false;
}

render() {
  const {
    recent
  } = this.state;
  return (
    <div id="spotify">
      {/* <div id="header">
        <h1>Spotify</h1>
        <p>this is the where I say how cool this is</p>
      </div> */}
      <div id="card-container">
        {
                recent.length === 0
                  ? ''
                  : recent.map((data, i) => (
                    <div key={i} className="card">
                        <div className="eq" id={'eq-' + i} style={{top: this.eqCards()}}></div>
                        <div className="artist-count">
                              <div className="artist-count-copy-cotainer">
                                <div className="artist-count-copy">
                                  <p>{i+1}</p>
                                </div>
                              </div>
                          </div>
                        <div className="artist-image">
                          <div className="artist-image-bg" style={{backgroundImage:`url("${data.image[2]["#text"]}")`}}></div>
                        </div>
                        <div className="artist-name">
                          <p>{data.artist["#text"]}</p> 
                        </div>
                        <div className="artist-album">
                          <p>{data.album["#text"]}</p>
                        </div>
                        <div className="artist-song">
                          <p>{data.name}</p>
                        </div>
                        <div className="artist-link">
                          <a href={data.url} data-param={JSON.stringify({name: data.artist["#text"], song: data.name})} rel="noopener noreferrer" target="_blank" onClick={this.handleClick}>Play Song</a>
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
