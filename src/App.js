/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from './Components/Navigation';
/* import MouseFly from './Components/MouseFly'; */
import ViewCounter from './Components/ViewCounter';
import getHistory from './history';
import './Styles/App.scss';

import projectData from './Data/data.json';
import { ProjectCount, thecontext } from './Components/Context';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthWin: window.innerWidth,
      projectAmount: 0,
      count: thecontext.count,
    };
  }

  componentDidMount = () => {
    const { location } = this.props;
    const { pathname } = location;
    if (pathname === '/') {
      setTimeout(this.changeUrl, 500);
    }
    window.removeEventListener('resize', this.handleWindowSizeChange);

    thecontext.projects = projectData.projects;

    // this sucks!!!!!!
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
    getHistory().push('/projects');
  }

  getProjectAmount = () => {
    const theProjects = thecontext.projects.length;
    this.setState({ projectAmount: theProjects });
  }

  render = () => {
    const { widthWin, projectAmount, count } = this.state;
    const isMobile = widthWin <= 768;
    let MouseFlyAdd = '';
    if (!isMobile) {
      MouseFlyAdd = (
        <ProjectCount.Provider value={count}>
          <ViewCounter valuemax={projectAmount} />
        </ProjectCount.Provider>
      );
      // <MouseFly ref={(c) => { this.hello = c; }} />;
    } else {
      MouseFlyAdd = '';
    }
    return (
      <div>
        {MouseFlyAdd}
        <Navigation />
        <div className="App" />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape.isRequired,
  pathname: PropTypes.shape.isRequired,
};

export default App;
