import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import loggerMiddleware from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './routers';

import 'SASS/app.scss';


const store = createStore(
  AppRouter,
  compose(applyMiddleware(loggerMiddleware))
);

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
  <Provider store={store}>
    <Router forceRefresh={!supportsHistory}>
        <AppRouter />
    </Router>
  </Provider>,
  document.querySelector('#root') as HTMLElement
);

