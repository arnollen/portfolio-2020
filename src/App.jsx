/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactGA from 'react-ga4';
import projectData from './Data/data.json';
import { ProjectCount, thecontext } from './Components/Context/Context';
import Projects from './Components/Projects/Projects';
import Navigation from './Components/Navigation/Navigation';
import ViewCounter from './Components/ViewCounter/ViewCounter';
// import MouseFly from './Components/MouseFly/MouseFly';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthWin: window.innerWidth,
      projectAmount: 0,
      count: thecontext.count,
      // stayFly: thecontext.fly,
    };
    thecontext.projects = projectData.projects;
  }

  componentDidMount() {
    ReactGA.initialize('G-X8PKM8MKSW');
    window.addEventListener('resize', this.handleWindowSizeChange);

    setInterval(this.textContext, 500);

    this.getProjectAmount();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  textContext = () => {
    this.setState({ count: thecontext.count });
    // stayFly: thecontext.fly
  };

  handleWindowSizeChange = () => {
    this.setState({ widthWin: window.innerWidth });
  };

  getProjectAmount = () => {
    const theProjects = thecontext.projects.length;
    if (theProjects != null) {
      this.setState({ projectAmount: theProjects });
    }
  };

  render() {
    const {
      widthWin,
      projectAmount,
      count,
      // stayFly,
    } = this.state;
    const isMobile = widthWin <= 768;
    let MobileContent = null;
    // let flyState = '';
    // if (stayFly) {
    //   flyState = (
    //     <MouseFly />
    //   );
    // } else {
    //   flyState = '';
    // }
    if (!isMobile) {
      MobileContent = (
        <ProjectCount.Provider value={count}>
          {/* {flyState} */}
          <ViewCounter valuemax={projectAmount} />
        </ProjectCount.Provider>
      );
    } else {
      MobileContent = null;
    }
    return (
      <div>
        {MobileContent}
        <React.StrictMode>
          <Navigation />
          <Projects />
        </React.StrictMode>
        <div className="App" />
      </div>
    );
  }
}

App.propTypes = {
};

export default App;
