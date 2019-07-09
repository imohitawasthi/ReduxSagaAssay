import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

import history from './history'
import routes from './routes'
import configureStore  from './Store/Store'

const store = configureStore()

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
