import 'babel-polyfill'; // Fills in gaps that Babel creates when transpiling ES6 -> ES5
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router'; // browserHistory provides clean URLs sans #hash
import routes from './routes';
import {loadCourses} from './actions/courseActions'; // loads api data at the start of the app (index.js)
import {loadAuthors} from './actions/authorActions'; // loads api data at the start of the app (index.js)
import './styles/styles.css'; // Webpack lets us import CSS like this
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
