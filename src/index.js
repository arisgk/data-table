/* global document */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'react-apollo';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const history = createHistory();
const client = new ApolloClient();
const store = configureStore(history, client);

ReactDOM.render(
  <Root store={store} history={history} client={client} />,
  document.getElementById('root'),
);

registerServiceWorker();
