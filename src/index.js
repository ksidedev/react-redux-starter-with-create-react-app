import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import helloReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import { logger } from 'redux-logger'

const store = createStore(
  helloReducer,
  applyMiddleware(logger)
)// this is store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
