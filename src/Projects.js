/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gsap, { Linear } from 'gsap';
import parse from 'html-react-parser';
import { Element } from 'react-scroll';
import ReactGA from 'react-ga';
import Logo from './Components/Logo';
import Ticker from './Components/Ticker';
import Archive from './Components/Archive';
import About from './Components/About';
import Footer from './Components/Footer';
import { thecontext } from './Components/Context';
import './Styles/Projects.scss';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: thecontext.projects };
  }

  componentDidMount = () => {
    const contextProjects = thecontext.projects;
    this.setState({ projects: contextProjects });
    this.backColorAnimation('#2912D6');
    ReactGA.pageview('projects page');
  }

  componentWillUnmount = () => {
  }

  backColorAnimation = (theColor) => {
    const getColor = String(theColor);
    gsap.to('body', 1, {
      backgroundColor: getColor,
      opacity: 1,
      ease: Linear.easeOut,
      overwrite: true,
    });
  }

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
              : projects.slice(0, 5).map((clients) => (
                  <div key={clients.id} className="project--single">
                    <div>
                      <div className="project--type"><h3>{clients.type}</h3></div>
                    </div>
                    <div style={{ backgroundColor: clients.bgColor }}>
                      <div className="project--container">
                        <div className="bigger"><span className="bigger--count">{clients.id + 1}</span></div>
                        <div className="project--hover--set" id={`project--hover--${clients.id}`} onFocus={this.handleOver} onBlur={this.handleOut} onMouseOver={this.handleOver} onMouseOut={this.handleOut} />
                        <div className="project--details">
                        <div><h1>{parse(clients.name)}</h1></div>
                        <div className="header--boarder" />
                        <div><p>{parse(clients.description)}</p></div>
                        <div className="proj--link--list">
                          <Link to={clients.route.path} data={clients}>VIEW</Link>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))
            }
            <Element name="about-scroll-to" id="about-scroll-to" />
            <Ticker header="ABOUT" body="A little history about myself and my career" body2="You could also check out my linkedin" gif="https://media.giphy.com/media/xYbNcQcQq3V4s/giphy.gif" />
            <About />
            <Element name="archive-scroll-to" id="archive-scroll-to" />
            <Ticker header="ARCHIVE" body="An archive of past portfolio work" body2="some of my favorite projects through out my career" gif="https://media.giphy.com/media/xkmQfH1TB0dLW/giphy.gif" />
            <Archive />
            <Footer />
        </div>
      </div>
    );
  }
}

export default Projects;
