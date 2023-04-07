/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gsap, {
  SteppedEase, Linear, Expo, Back,
} from 'gsap';
import ReactGA from 'react-ga';
import { playSound } from '../SoundManager/SoundManager';
import './Navigation.scss';
import NavigationButton from '../../Images/infoClose.png';
import { thecontext } from '../Context/Context';
import Tag1 from '../svg/tag1.svg';
import Tag2 from '../svg/tag2.svg';
import Tag3 from '../svg/tag3.svg';
import Tag4 from '../svg/tag4.svg';

import NavigationData from '../../Data/navigation.json';

let scrollTimer = '';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationWin: [],
      isToggleOn: false,
      widthWin: window.innerWidth,
      heightWin: window.innerHeight,
    };
    this.getcontext = thecontext;
    this.handleOut = this.handleOut.bind(this);
  }

  componentDidMount() {
    this.setState({ navigationWin: NavigationData.navigation });
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    clearInterval(scrollTimer);
  }

  handleOut = (theTag) => { // eslint-disable-line class-methods-use-this
    gsap.set(theTag, { display: 'none' });
  };

  handleClick = (divTo) => {
    const { isToggleOn } = this.state;

    if (divTo) {
      thecontext.scrollSection = divTo;
    }

    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));

    playSound(0);

    if (!isToggleOn) {
      ReactGA.modalview('navigation open');
      const winWidth = `${window.innerWidth}px`;
      const winHeight = `${window.innerHeight}px`;
      gsap.to('#navi--button--image', 0.05, {
        repeat: 1,
        left: '-276px',
        ease: SteppedEase.config(6),
        rotationZ: 0.01,
        force3D: true,
      });
      gsap.set('#navi--bar', {
        width: winWidth,
        opacity: 0,
      });
      gsap.to('#navi--bar', 0.35, {
        opacity: 1,
        height: winHeight,
        ease: Linear.EaseOut,
        rotationZ: 0.01,
        force3D: true,
      });
      gsap.set('.navi--bar--show', { y: 100, opacity: 0 });
      gsap.to('.navi--bar--show', 0.2, {
        y: 0,
        opacity: 1,
        ease: Back.EaseOut,
        rotationZ: 0.01,
        force3D: true,
        delay: 0.5,
        stagger: 0.1,
      }, 0.1);
    } else {
      ReactGA.modalview('navigation close');
      gsap.to('#navi--button--image', 0.05, {
        repeat: 1,
        left: '0px',
        ease: SteppedEase.config(6),
        rotationZ: 0.01,
        force3D: true,
      });
      gsap.to('#navi--bar', 0.35, {
        opacity: 1,
        height: 0,
        ease: Linear.EaseIn,
        rotationZ: 0.01,
        transformOrigin: '0px 0px',
        force3D: true,
      });
      gsap.set('#navi--bar', {
        width: '0%',
        delay: 0.5,
        onComplete: this.goScroll,
      });
    }
  };

  goScroll = () => {
    if (thecontext.scrollSection !== 'none') {
      this.scrollToSection();
    }
  };

  handleOver = (theTag) => {
    const { widthWin } = this.state;
    const isMobile = widthWin <= 768;
    if (!isMobile) {
      gsap.set(theTag, {
        display: 'block',
        opacity: 0,
      });
      gsap.to(theTag, 0.1, {
        opacity: 0.2,
        ease: Expo.EaseInOut,
        rotationZ: 0.01,
        transformOrigin: '0px 0px',
        force3D: true,
      });
    }
  };

  scrollToSection = () => {
    clearInterval(scrollTimer);
    if (window.location.pathname === '/') {
      const getScroll = this.getcontext.scrollSection;
      if (getScroll !== 'none') {
        const elem = document.getElementById(getScroll);
        const top = elem.offsetTop;
        scrollTimer = setTimeout(() => {
          window.scrollTo({ top, left: 0, behavior: 'smooth' });
        }, 500);
        ReactGA.modalview(`go to ${getScroll}`);
      }
    }
  };

  handleWindowSizeChange = () => {
    const {
      isToggleOn,
      widthWin,
      heightWin,
    } = this.state;
    if (isToggleOn) {
      this.setState({
        widthWin: window.innerWidth,
        heightWin: window.innerHeight,
      });
      gsap.set('#navi--bar', {
        width: widthWin,
        height: heightWin,
      });
    }
  };

  killTheFly = () => {
    if (thecontext.fly) {
      thecontext.fly = false;
    } else {
      thecontext.fly = true;
    }
    this.handleClick();
  };

  render() {
    const { navigationWin, widthWin } = this.state;
    return (
      <div id="navigation">
        <div id="navi--button" onClick={() => this.handleClick('none')} onKeyDown={() => this.handleClick('none')} role="button" tabIndex={0}>
          <div id="navi--button--container">
            <div id="navi--button--image">
              <img src={NavigationButton} alt="Navigation button" title="View Navigation Options" />
            </div>
          </div>
        </div>
        <div id="navi--bar">
          <div id="link--container">
            <div className="side--link">
              <Link className="top--link navi--bar--show" to="/" onClick={() => this.handleClick('root')} onMouseOver={() => this.handleOver('#tag--1')} onMouseOut={() => this.handleOut('#tag--1')} onFocus={() => this.handleOver('#tag--1')} onBlur={() => this.handleOut('#tag--1')}>- Projects -</Link>
              <Link className="top--link navi--bar--show" to="/" onClick={() => this.handleClick('about-scroll-to')} onMouseOver={() => this.handleOver('#tag--2')} onMouseOut={() => this.handleOut('#tag--2')} onFocus={() => this.handleOver('#tag--2')} onBlur={() => this.handleOut('#tag--2')}>- About -</Link>
              <Link className="top--link navi--bar--show" to="/" onClick={() => this.handleClick('archive-scroll-to')} onMouseOver={() => this.handleOver('#tag--3')} onMouseOut={() => this.handleOut('#tag--3')} onFocus={() => this.handleOver('#tag--3')} onBlur={() => this.handleOut('#tag--3')}>- Archive -</Link>
              <Link className="top--link navi--bar--show" to="/" onClick={() => this.handleClick('music-scroll-to')} onMouseOver={() => this.handleOver('#tag--4')} onMouseOut={() => this.handleOut('#tag--4')} onFocus={() => this.handleOver('#tag--4')} onBlur={() => this.handleOut('#tag--4')}>- My Playlist -</Link>

            </div>
            <div id="secondary--nav--container">
              {
                 navigationWin.length === 0
                   ? ''
                   : navigationWin.map((navigation, index) => {
                     //  const listID = `#tag--${navigation.id}`;
                     if (index >= 4 && index <= 6) {
                       return (
                         <div className="bottom--link--container" key={navigation.id}>
                           <div className="side--link navi--bar--show">
                             {/* eslint-disable-next-line max-len */}
                             <ReactGA.OutboundLink
                               className="bottom--link"
                               eventLabel="outbound link"
                               to={navigation.link}
                               target="_blank"
                             >
                               {navigation.copy}
                             </ReactGA.OutboundLink>

                           </div>
                         </div>
                       );
                     }

                     if (index === 7 && widthWin >= 768) {
                       return (
                         <div className="bottom--link--container" key={navigation.id}>
                           <div className="side--link navi--bar--show">
                             {/* eslint-disable-next-line max-len */}
                             <Link to="#top" className="bottom--link" onClick={() => this.killTheFly()}>
                               {navigation.copy}
                             </Link>

                           </div>
                         </div>
                       );
                     }
                     return null;
                   })
                }
            </div>
          </div>
          <div id="tag--1">
            <img src={Tag1} alt="price tag graphic" title="price tag graphic" />
          </div>
          <div id="tag--2">
            <img src={Tag2} alt="price tag2 graphic" title="price tag2 graphic" />
          </div>
          <div id="tag--3">
            <img src={Tag3} alt="price tag3 graphic" title="price tag3 graphic" />
          </div>
          <div id="tag--4">
            <img src={Tag4} alt="price tag4 graphic" title="price tag4 graphic" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
