import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const initialState = {};
const enhancers = [];
const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  enhancers.push(devToolsEnhancer());
  middleware.push(logger);
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
