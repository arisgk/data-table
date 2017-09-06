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
    ),
  );

  return store;
};

export default configureStore;
