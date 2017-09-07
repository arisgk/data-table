const express = require('express');
const bodyParser = require('body-parser');
const graphqlRoute = require('./routes/graphql');
const errorRoute = require('./routes/error');

const app = express();

module.exports = (services) => {
  const graphql = graphqlRoute.create(services);
  app.use(bodyParser.json());
  app.use('/graphql', graphql);
  app.use(errorRoute);
  return app;
};
