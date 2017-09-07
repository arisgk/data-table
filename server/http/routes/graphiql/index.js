const express = require('express');
const { graphiqlExpress } = require('apollo-server-express');

const router = express.Router();

function create() {
  router.use('/', graphiqlExpress({ endpointURL: '/graphql' }));

  return router;
}

module.exports.create = create;
