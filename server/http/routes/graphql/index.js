const express = require('express');
const { graphqlExpress } = require('apollo-server-express');
const schemaFactory = require('../../../schema');

const router = express.Router();

function create(resolvers) {
  const schema = schemaFactory.create(resolvers);
  router.use('/', graphqlExpress({ schema }));

  return router;
}

module.exports.create = create;
