/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import projectData from './Data/data.json';
import { ProjectCount, thecontext } from './Components/Context';
import Projects from './Projects';
import Navigation from './Components/Navigation';
import ViewCounter from './Components/ViewCounter';
import './Styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthWin: window.innerWidth,
      projectAmount: 0,
      count: thecontext.count,
    };
    thecontext.projects = projectData.projects;
  }

  componentDidMount = () => {
    const { location } = this.props;
    const { pathname } = location;
    if (pathname === '/') {
      setTimeout(this.changeUrl, 500);
    }
    window.addEventListener('resize', this.handleWindowSizeChange);

    setInterval(this.textContext, 500);

    this.getProjectAmount();
  }

  textContext = () => {
    this.setState({ count: thecontext.count });
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ widthWin: window.innerWidth });
  };

  changeUrl = () => {
    // getHistory().push('/projects');
  }

  getProjectAmount = () => {
    const theProjects = thecontext.projects.length;
    this.setState({ projectAmount: theProjects });
  }

  render = () => {
    const { widthWin, projectAmount, count } = this.state;
    const isMobile = widthWin <= 768;
    let MobileContent = '';
    if (!isMobile) {
      MobileContent = (
        <ProjectCount.Provider value={count}>
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
  location: PropTypes.object,
  pathname: PropTypes.string,
};

export default App;
