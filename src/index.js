/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { hydrate, render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import App from './App';
import Detail from './Detail';
import Projects from './Projects';
import * as serviceWorker from './serviceWorker';
import { GlobalHistory } from './history';
import './Styles/index.scss';
import projectData from './Data/data.json';

const rootElement = document.getElementById('root');
const buildNavi = projectData.projects;

ReactGA.initialize('UA-151508756-1');

if (rootElement.hasChildNodes()) {
  hydrate((
    <div>
      <BrowserRouter>
        <GlobalHistory />
        <Route path="/" component={App} />
        <Route path="/projects" component={Projects} />
        {
          buildNavi.map((projects, index) => (
            <Route path={buildNavi[index].route.path} render={(props) => <Detail {...props} content={index} />} />
          ))
        }
      </BrowserRouter>
      {
}
    </div>
  ), rootElement);
} else {
  render((
    <div>
      <BrowserRouter>
        <GlobalHistory />
        <Route path="/" component={App} />
        <Route path="/projects" component={Projects} />
        {
          buildNavi.map((projects, index) => (
            <Route key={projects.id} path={buildNavi[index].route.path} render={(props) => <Detail {...props} content={index} />} />
          ))
        }
      </BrowserRouter>
    </div>
  ), rootElement);
}

serviceWorker.register();
