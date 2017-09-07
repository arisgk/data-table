const { graphqlExpress } = require('apollo-server-express');
const schema = require('./schema');

// Has the database as a dependency
function create(db) { // eslint-disable-line
  function mountExpressGraphQL() {
    return graphqlExpress({ schema });
  }

  return {
    mountExpressGraphQL,
  };
}

module.exports.create = create;
