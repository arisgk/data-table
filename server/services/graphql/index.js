const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./schema');

// Has the database as a dependency
function create(db) { // eslint-disable-line
  function mountExpressGraphQL() {
    return graphqlExpress({ schema });
  }

  function mountExpressGraphiQL() {
    return graphiqlExpress({ endpointURL: '/graphql' });
  }

  return {
    mountExpressGraphQL,
    mountExpressGraphiQL,
  };
}

module.exports.create = create;
