/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import gsap, { Linear } from 'gsap';
import ReactGA from 'react-ga4';
import { ProjectCount, thecontext } from '../Context/Context';
import ArchiveSelect from './ArchiveSelect/ArchiveSelect';
import './Archive.scss';
import { playSound } from '../SoundManager/SoundManager';

let contextProjects = [];
let setProjects = [];

class Archive extends Component {
  constructor(props) {
    super(props);
    contextProjects = thecontext.projects;
    this.state = { archive: thecontext.projects };

    this.handleClick = this.handleClick.bind(this);
    this.transitionIn = this.transitionIn.bind(this);
    this.getSound = playSound;
    this.gsap = gsap;
  }

  componentDidMount() {
    contextProjects = thecontext.projects;
    setProjects = this.filterProjects(thecontext.projectType, contextProjects);
    this.setState({ archive: setProjects });
  }

  componentDidUpdate() {
  }

  handleClick = () => {
    this.getSound(0);
  };

  filterProjects = (type, projects) => {
    let filteredProjects = [];
    if (type !== 'ALL') {
      filteredProjects = projects.filter((project) => project.type === type);
      this.setState({ archive: filteredProjects });
    } else {
      filteredProjects = projects.slice(3, projects.length);
      this.setState({ archive: filteredProjects });
    }
    return filteredProjects;
  };

  onChangeValueHandler = (val) => {
    thecontext.projectType = val.value;
    this.filterProjects(thecontext.projectType, contextProjects);
    setTimeout(() => { this.transitionIn('.archive--single'); }, 100);
    ReactGA.send({ hitType: 'pageview', page: `Archive filtered ${val.value}` });
  };

  transitionIn = (theClass) => {
    this.gsap.set(theClass, {
      opacity: 0,
      ease: Linear.EaseIn,
      overwrite: false,
    });
    this.gsap.to(theClass, {
      duration: 0.3,
      stagger: 0.2,
      opacity: 1,
      ease: Linear.EaseIn,
      overwrite: true,
    }, '<-1');
  };

  render() {
    const { archive } = this.state;
    return (
      <div>
        <ArchiveSelect value={thecontext.projectType} onChangeValue={this.onChangeValueHandler} />
        <div id="archive--single--pin" />
        <div id="archive--hide">
          {
            archive.length === 0
              ? ''
              : archive.map((clients) => (
                  <div key={clients.id} className="archive--single">
                    <div>
                      <div className="archive--container">
                        <div className="archive--details">
                          <div className="count--container">
                            <div className="archive--count"><p>{clients.id + 1}</p></div>
                          </div>
                          <div className="copy--container">
                            <div className="archive--type"><h3>{clients.type}</h3></div>
                            <div className="archive--header"><h1>{parse(clients.name)}</h1></div>
                            <div className="archive--paragraph"><p>{parse(clients.description)}</p></div>
                          </div>
                          <div className="link--container">
                            <div className="archive--link">
                              <Link to={clients.route.path} data={clients} onClick={() => this.handleClick()}>VIEW</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))
            }
        </div>
      </div>
    );
  }
}

Archive.contextType = ProjectCount;

export default Archive;
