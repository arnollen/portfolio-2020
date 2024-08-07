/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gsap, { Linear } from 'gsap';
import parse from 'html-react-parser';
import { Element } from 'react-scroll';
import ReactGA from 'react-ga4';
import { playSound } from '../SoundManager/SoundManager';
import Logo from '../Logo/Logo';
import Ticker from '../Ticker/Ticker';
import Archive from '../Archive/Archive';
import About from '../About/About';
// import Spotify from '../Spotify/Spotify';
// import Instagram from '../Instagram/Instagram';
// import Artwork from '../Artwork/Artwork';
import Footer from '../Footer/Footer';
// import RandomContent from '../RandomContent/RandomContent';
import { thecontext } from '../Context/Context';
import './Projects.scss';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: thecontext.projects };
    this.getColor = '';
    this.getcontext = thecontext;
    this.setSound = playSound;
  }

  componentDidMount() {
    const contextProjects = thecontext.projects;
    this.setState({ projects: contextProjects });
    this.scrollToSection();
    this.backColorAnimation('#2912D6');
    ReactGA.send({ hitType: 'pageview', page: 'projects', title: 'Projects Page' });
  }

  componentWillUnmount() {
  }

  handleClick() {
    this.setSound(0);
  }

  scrollToSection = () => {
    const getScroll = this.getcontext.scrollSection;
    const elem = document.getElementById(getScroll);
    const top = elem.offsetTop;
    setTimeout(() => {
      window.scrollTo({ top, left: 0, behavior: 'smooth' });
    }, 500);
    ReactGA.send({ hitType: 'pageview', page: `go to ${getScroll}`, title: `go to ${getScroll}` });
  };

  backColorAnimation = (theColor) => {
    this.getColor = String(theColor);
    gsap.to('body', 1, {
      backgroundColor: this.getColor,
      opacity: 1,
      ease: Linear.easeOut,
      overwrite: true,
    });
  };

  render() {
    const { projects } = this.state;
    return (
      <div>
        <Element name="top-scroll-to" id="top-scroll-to" />
        <div id="project--single--pin" />
        <div id="projects--hide">
          <Logo />
           <Ticker header="PROJECTS" body="A few examples of some projects I worked on" body2="I am always looking to add something new" gif="https://media.giphy.com/media/7JTpNYu7oYGX98KJkL/giphy.gif" />
          {
            projects.length === 0
              ? ''
              : projects.slice(0, 3).map((clients) => (
                  <div key={clients.id} className="project--single">
                    <div>
                      <div className="project--type"><h3>{clients.type}</h3></div>
                    </div>
                    <div style={{ backgroundColor: clients.bgColor }}>
                      <div className="project--container">
                        <div className="bigger"><span className="bigger--count">{clients.id + 1}</span></div>
                        <div className="project--hover--set" id={`project--hover--${clients.id}`} />
                        <div className="project--details">
                        <div><h1>{parse(clients.name)}</h1></div>
                        <div className="header--boarder" />
                        <div>
                          <p>
                            {parse(clients.description).split(' ').slice(0, 60).join(' ')}
                            ...
                          </p>
                        </div>
                        <div className="proj--link--list">
                          <Link to={clients.route.path} data={clients} onClick={() => this.handleClick()}>VIEW</Link>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))
            }
            <Element name="about-scroll-to" id="about-scroll-to" />

            <Ticker header="ABOUT" body="A little history about myself and my career" body2="You could also check out my linkedin" gif="https://media.giphy.com/media/6FE5OzXELzwngAIBHc/giphy.gif" />

            <About />

            <Element name="archive-scroll-to" id="archive-scroll-to" />

            <Ticker header="ARCHIVE" body="An archive of past portfolio work" body2="some of my favorite projects through out my career" gif="https://media.giphy.com/media/xkmQfH1TB0dLW/giphy.gif" />
            <Archive />

            {/* <Element name="music-scroll-to" id="music-scroll-to" /> */}

            {/* <Ticker header="MY PLAYLIST" body="The best way to know some one is by there music choices" body2="My last 25 songs played on Spotify, It may be on random don't judge :)" gif="https://media.giphy.com/media/pHZbB5h1K8OaSkFquN/giphy.gif" /> */}

            {/* <Spotify /> */}

             {/* <Ticker header="Art Fart" body="The pencil is one of mans simplest tools" body2="Nothing like making a little something from nothing." gif="https://media.giphy.com/media/Pv3cmW2HAmvsc/giphy.gif" />

            <RandomContent /> */}

            {/* <Instagram /> */}

            {/* <Artwork /> */}

            <Footer />
        </div>
      </div>
    );
  }
}

export default Projects;
