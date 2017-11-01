import 'babel-polyfill'; // Fills in gaps that Babel creates when transpiling ES6 -> ES5
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'; // browserHistory provides clean URLs sans #hash
import routes from './routes';
import './styles/styles.css'; // Webpack lets us import CSS like this
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
