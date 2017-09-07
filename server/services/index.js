// Register all the services here
const graphqlServiceFactory = require('./graphql');

// TODO: Set the db dependencies here
const graphqlService = graphqlServiceFactory.create();

module.exports = {
  graphqlService,
};
