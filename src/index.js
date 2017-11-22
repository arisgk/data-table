/* global document */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const history = createHistory();

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:5000/graphql',
});

networkInterface.use([{
  applyMiddleware(req, next) {
    req.options.headers = {
      origin: 'http://localhost:3000',
    };

    next();
  },
}]);

const client = new ApolloClient({
  networkInterface,
});

const store = configureStore(history, client);

ReactDOM.render(
  <Root store={store} history={history} client={client} />,
  document.getElementById('root'),
);

registerServiceWorker();
