const express = require('express');

const router = express.Router();

function create({ graphqlService }) {
  router.use('/', graphqlService.mountExpressGraphQL());

  return router;
}

module.exports.create = create;
