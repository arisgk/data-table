const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const graphqlRoute = require('./routes/graphql');
const graphiqlRoute = require('./routes/graphiql');
const errorRoute = require('./routes/error');

const app = express();

module.exports = (resolvers) => {
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, 'build')));

  const graphql = graphqlRoute.create(resolvers);
  const graphiql = graphiqlRoute.create();

  app.use('/graphql', graphql);
  app.use('/graphiql', graphiql);

  app.use(errorRoute);

  app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: '/build' });
  });

  return app;
};
