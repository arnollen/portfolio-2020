/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { hydrate, render } from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ReactGA from 'react-ga';
import App from './App';
import Detail from './Detail';
import fourzerofour from './Components/404';
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
        <Switch>
          <Route path="/" exact component={App} />
          {
            buildNavi.map((projects, index) => (
              <Route key={projects.id} path={buildNavi[index].route.path} render={(props) => <Detail {...props} content={index} />} />
            ))
          }
          <Route path="*" component={fourzerofour} />
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
          <Route path="*" component={fourzerofour} />
        </Switch>
      </BrowserRouter>
    </div>
  ), rootElement);
}

serviceWorker.register();
