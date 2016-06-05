/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Application
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import './styles/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './rootReducer';

import App from './components/App';

/**
 * --------------------------------------------------------
 * Create store
 * --------------------------------------------------------
 */
const store = createStore(rootReducer);

/**
 * --------------------------------------------------------
 * Hanlder render Application
 * --------------------------------------------------------
 */
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
}

/**
 * --------------------------------------------------------
 * Render component
 * --------------------------------------------------------
 */
render();

/**
 * --------------------------------------------------------
 * Subscribe store for update view when change
 * --------------------------------------------------------
 */
store.subscribe(() => {
  render();
});
