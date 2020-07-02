/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { hydrate, render } from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import App from './App';
import Detail from './Detail';
import * as serviceWorker from './serviceWorker';
import { GlobalHistory } from './history';
import './Styles/index.scss';
import projectData from './Data/data.json';

const rootElement = document.getElementById('root');
const buildNavi = projectData.projects;

ReactGA.initialize('UA-151508756-1');

const NotFound = () => <h1>404- Page NotFound</h1>;

if (rootElement.hasChildNodes()) {
  hydrate((
    <div>
      <BrowserRouter>
        <GlobalHistory />
        <Switch>
          <Route path="/" exact component={App} />
          {
            buildNavi.map((projects, index) => (
              <Route key={projects.id} path={buildNavi[index].route.path} render={(props) => <Detail {...props} content={index} />} />
            ))
          }
          <Route path="*" component={NotFound} />
        </Switch>
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
        <Switch>
          <Route path="/" exact component={App} />
          {
            buildNavi.map((projects, index) => (
              <Route key={projects.id} path={buildNavi[index].route.path} render={(props) => <Detail {...props} content={index} />} />
            ))
          }
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  ), rootElement);
}

serviceWorker.register();
