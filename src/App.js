/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import projectData from './Data/data.json';
import { ProjectCount, thecontext } from './Components/Context/Context';
import Projects from './Components/Projects/Projects';
import Navigation from './Components/Navigation/Navigation';
import ViewCounter from './Components/ViewCounter/ViewCounter';
import MouseFly from './Components/MouseFly/MouseFly';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthWin: window.innerWidth,
      projectAmount: 0,
      count: thecontext.count,
      stayFly: thecontext.fly
    };
    thecontext.projects = projectData.projects;
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleWindowSizeChange);

    setInterval(this.textContext, 500);

    this.getProjectAmount();
  }

  textContext = () => {
    this.setState({ count: thecontext.count, stayFly: thecontext.fly });
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ widthWin: window.innerWidth });
  };

  changeUrl = () => {
  }

  getProjectAmount = () => {
    const theProjects = thecontext.projects.length;
    this.setState({ projectAmount: theProjects });
  }

  render = () => {
    const { widthWin, projectAmount, count, stayFly } = this.state;
    const isMobile = widthWin <= 768;
    let MobileContent = '';
    let flyState = '';
    if (stayFly) {
      flyState = (
        <MouseFly></MouseFly>
      );
    }
    else{
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
      <div>
        {MobileContent}
        <Navigation />
        <Projects />
        <div className="App" />
      </div>
    );
  }
}

App.propTypes = {
};

export default App;
