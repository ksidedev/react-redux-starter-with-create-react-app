import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LandingPage from './containers/landing/LandingPageContainer';
import * as serviceWorker from './serviceWorker';

const target = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <LandingPage />
  </Provider>,
  target,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
