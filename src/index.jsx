/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ReactGA from 'react-ga4';
import App from './App';
import Detail from './Components/Detail/Detail';
import fourzerofour from './Components/404/404';
import './index.scss';
import projectData from './Data/data.json';

const root = createRoot(document.getElementById('root'));

const buildNavi = projectData.projects;

ReactGA.initialize('UA-151508756-1');

root.render(
  (
    <div>
      <BrowserRouter>
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
  ),
);
