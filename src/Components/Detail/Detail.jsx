/* eslint-disable no-bitwise */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import gsap, { Linear } from 'gsap';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { Element } from 'react-scroll';
import ReactGA from 'react-ga';
import projectData from '../../Data/data.json';
import { ProjectCount, thecontext } from '../Context/Context';
import { handleCount, hexToRgbA } from '../../Helpers/Helpers';
import EmbedVideo from './Embed/EmbedVideo';
import EmbedBody from './Embed/EmbedBody';
import EmbedHeader from './Embed/EmbedHeader';
import FooterDetails from '../FooterDetail/FooterDetail';
import Navigation from '../Navigation/Navigation';
import ViewCounter from '../ViewCounter/ViewCounter';
import MouseFly from '../MouseFly/MouseFly';
import { playSound } from '../SoundManager/SoundManager';
import './Detail.scss';

let contextProjects = projectData.projects;
let projCount = '';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      currentProject: 0,
      currentTitle: [],
      currentDesc: [],
      currentVideo: [],
      currentType: 'DIGITAL',
      currentImages: [],
      currentCopy: [],
      currentHeaders: [],
      currentLink: [],
      currentColor: '#000000',
      nextLink: [],
      prevLink: [],
      widthWin: window.innerWidth,
      projectAmount: thecontext.projects.length,
      count: thecontext.count,
      stayFly: thecontext.fly,
    };
    thecontext.projects = projectData.projects;
    this.TheProps = this.props;
    // this.TheState = this.state;
  }

  componentDidMount() {
    contextProjects = projectData.projects;
    this.setState({
      project: contextProjects,
      currentTitle: contextProjects[this.TheProps.content].name,
      currentDesc: contextProjects[this.TheProps.content].description,
      currentVideo: contextProjects[this.TheProps.content].video,
      currentProject: this.TheProps.content,
      currentColor: contextProjects[this.TheProps.content].bgColor,
      currentImages: this.createImageArray(contextProjects[this.TheProps.content].images),
      currentCopy: this.createCopyArray(contextProjects[this.TheProps.content].imageCopy),
      currentHeaders: this.createHeaderArray(contextProjects[this.TheProps.content].imageHeaders),
      currentType: contextProjects[this.TheProps.content].type,
      count: thecontext.count,
      projectAmount: thecontext.projects.length,
    }, () => { this.buildDetails(); });

    ReactGA.pageview(contextProjects[this.TheProps.content].name);

    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    projCount = setTimeout(this.textContext, 500);
  }

  componentWillUnmount() {
    clearTimeout(projCount);
  }

  handleClick = () => {
    playSound(0);
  };

  textContext = () => {
    this.setState({ count: thecontext.count, stayFly: thecontext.fly });
  };

  buildDetails = () => {
    const { currentColor } = this.state;
    this.backColorAnimation(currentColor);

    this.nextPrev(contextProjects, this.TheProps.content);

    if (contextProjects[this.TheProps.content].link !== '') {
      this.setState({ currentLink: contextProjects[this.TheProps.content].link });
    }

    const finalCount = handleCount(contextProjects[this.TheProps.content], thecontext.count);
    thecontext.count = finalCount;
  };

  backColorAnimation = (theColor) => {
    const getColor = hexToRgbA(theColor);
    const { currentVideo } = this.state;
    gsap.to('.detail--view--details', 0.01, {
      // eslint-disable-next-line max-len
      backgroundColor: getColor, opacity: 1, ease: Linear.easeOut, overwrite: true, force3D: true, rotationZ: 0.01,
    });

    gsap.to(['.detail--header', '.detail--body', '.detail--img'], 0.3, {
      opacity: 1, ease: Linear.EaseIn, rotationZ: 0.01, delay: 0.5, force3D: true,
    }, 0.2);
    if (currentVideo === '') {
      gsap.set('#detail--separator-navigation', {
        backgroundColor: 'rgba(1, 24, 53, 0)',
        opacity: 1,
        ease: Linear.easeOut,
        rotationZ: 0.01,
        force3D: true,
        overwrite: true,
      });
    }

    gsap.to(['#prev--top', '#prev--top--bottom', '#next--top', '#next--top--bottom'], 0.5, {
      opacity: 1, ease: Linear.easeOut, rotationZ: 0.01, force3D: true, overwrite: true,
    });
  };

  createCopyArray = (theCopy) => {
    let copySplit = theCopy.split(',');
    // eslint-disable-next-line no-unused-vars
    copySplit = copySplit.map((item, key) => item.split('|').pop().replace(/_/g, ','));
    return copySplit;
  };

  createHeaderArray = (theHeaders) => {
    const headerSplit = theHeaders.split('|');
    const headerSet = String(headerSplit).split(',');
    return headerSet;
  };

  nextPrev = (theData, current) => {
    let setPrev;
    let setNext;
    if (current === 0) {
      setPrev = theData[theData.length - 1].route.path;
    } else {
      setPrev = theData[current - 1].route.path;
    }
    if (current === theData.length - 1) {
      setNext = theData[0].route.path;
    } else {
      setNext = theData[current + 1].route.path;
    }
    this.setState({ nextLink: setNext, prevLink: setPrev });
  };

  createImageArray(theImages) {
    const imgPath = '/images/clients/';
    const imageSplit = theImages.split(',');
    const imageSet = imageSplit.map((x) => imgPath + x);
    return imageSet;
  }

  render() {
    const {
      currentProject,
      currentTitle,
      currentDesc,
      currentLink,
      currentCopy,
      currentHeaders,
      currentImages,
      prevLink,
      projects,
      project,
      nextLink,
      currentVideo,
      currentType,
      projectAmount,
      count,
      widthWin,
      stayFly,
    } = this.state;

    const isMobile = widthWin <= 768;
    let MobileContent = '';
    let flyState = '';
    if (stayFly) {
      flyState = (
        <MouseFly />
      );
    } else {
      flyState = '';
    }
    if (!isMobile) {
      MobileContent = (
        <ProjectCount.Provider value={count}>
          {flyState}
          <ViewCounter valuemax={projectAmount} />
        </ProjectCount.Provider>
      );
    } else {
      MobileContent = '';
    }

    return (
      <div id="detail">
        <Navigation />
        { MobileContent }
        <Element name="top-scroll-to" id="top-scroll-to" />
        <div className="detail--container">
          <div className="detail--view--details">
            {
                project.map((client, index) => {
                  if (index === currentProject) {
                    return (
                      <div key={client.id}>
                        <div id="detail--top">
                          <div className="bigger">{currentProject + 1}</div>
                          <div className="detail--title">
                            <h1>{parse(currentTitle)}</h1>
                          </div>
                          <div className="header--boarder" />
                          <div className="detail--desc">
                            <p>{parse(currentDesc)}</p>
                          </div>
                          <div>
                            <a href={currentLink} className="link--out" target="_blank" rel="noopener noreferrer">{currentLink}</a>
                          </div>
                        </div>
                        <div id="detail--separator-navigation">
                          <div id="separator--container">
                            <div id="prev--top">
                              <div id="prev--link">
                                <Link to={String(prevLink)} data={projects} className="view--project--prev" onClick={() => this.handleClick()}>prev</Link>
                              </div>
                            </div>
                            <div className="title--header">
                              <h2 className="work--title">{currentType}</h2>
                            </div>
                            <div id="next--top">
                              <div id="next--link">
                                <Link to={String(nextLink)} data={projects} className="view--project--next" onClick={() => this.handleClick()}>next</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <EmbedVideo video={currentVideo} />
                        <div id="detail--view-container" key={project.id + 200}>
                          {
                          currentCopy.map((user, indexChild) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <div key={indexChild}>
                              {/* eslint-disable-next-line max-len */}
                              <EmbedHeader theHeader={currentHeaders} theIndex={indexChild} />
                              <EmbedBody theBody={currentCopy} theIndex={indexChild} />
                              <div className="detail--img">
                                <img src={`http://anthonynollen.com${currentImages[indexChild]}`} alt="" title="" />
                              </div>
                            </div>
                          ))
                      }
                        </div>
                      </div>
                    );
                  }
                  return null;
                })
}
          </div>
          <FooterDetails prev={prevLink} next={nextLink} thedata={projects} />
        </div>
      </div>
    );
  }
}

export default Detail;
