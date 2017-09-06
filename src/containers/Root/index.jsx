/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../../components/Routes';
import './styles/index.css';

const Root = ({ store, history, client }) => (
  <ApolloProvider store={store} client={client} >
    <MuiThemeProvider>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </MuiThemeProvider>
  </ApolloProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired,
};

export default Root;
