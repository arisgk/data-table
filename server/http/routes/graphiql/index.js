const express = require('express');

const router = express.Router();

function create({ graphqlService }) {
  router.use('/', graphqlService.mountExpressGraphiQL());

  return router;
}

module.exports.create = create;
