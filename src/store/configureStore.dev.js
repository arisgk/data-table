/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import setupReducers from '../reducers';

const configureStore = (history, apolloClient, preloadedState) => {
  const rootReducer = setupReducers(apolloClient.reducer());

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(apolloClient.middleware()),
      applyMiddleware(thunk, routerMiddleware(history)),
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
