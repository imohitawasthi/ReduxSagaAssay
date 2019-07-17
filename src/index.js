import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

import history from './history'
import routes from './routes'
import configureStore  from './Store/Store'

import Assay from './Assay/Assay'
import Constants from './Assay/Constants'

const store = configureStore()

Assay.initialize({ apiPort: Constants.apiPort, apiUrl: Constants.apiHost, apiProtocol: Constants.apiProtocol})
Assay.setSession('mBjA5QMph47HDrz6vwOZ_RjpKPI7eD5FSsNS')
ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <Router history={history}>
        {routes}
      </Router>
    </CookiesProvider>
  </Provider>, 
  document.getElementById('root')
);
