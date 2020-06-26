/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import App from './App';
import Detail from './Detail';
import Projects from './Projects';
import * as serviceWorker from './serviceWorker';
import { GlobalHistory } from './history';
import './Styles/index.scss';

ReactGA.initialize('UA-151508756-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render((
  <div>
    <HashRouter>
      <GlobalHistory />
      <Route path="/" component={App} />
      <Route path="/projects" component={Projects} />
      <Route path="/united" render={(props) => <Detail {...props} content={0} />} />
      <Route path="/marriott" render={(props) => <Detail {...props} content={1} />} />
      <Route path="/kraft" render={(props) => <Detail {...props} content={2} />} />
      <Route path="/delve" render={(props) => <Detail {...props} content={3} />} />
      <Route path="/chicago" render={(props) => <Detail {...props} content={4} />} />
      <Route path="/samsung" render={(props) => <Detail {...props} content={5} />} />
      <Route path="/lunchables" render={(props) => <Detail {...props} content={6} />} />
      <Route path="/forza" render={(props) => <Detail {...props} content={7} />} />
      <Route path="/blackberry" render={(props) => <Detail {...props} content={8} />} />
      <Route path="/fuse" render={(props) => <Detail {...props} content={9} />} />
      <Route path="/boa" render={(props) => <Detail {...props} content={10} />} />
      <Route path="/roots" render={(props) => <Detail {...props} content={11} />} />
      <Route path="/divvy" render={(props) => <Detail {...props} content={12} />} />
    </HashRouter>
  </div>
), document.getElementById('root'));

serviceWorker.unregister();
