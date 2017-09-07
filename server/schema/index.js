const { makeExecutableSchema } = require('graphql-tools');

function create(resolvers) {
  const typeDefs = `
  type User {
    id: ID!
    firstName: String
    lastName: String
    age: Int
  }

  type Query {
    users: [User]
  }
  `;

  return makeExecutableSchema({ typeDefs, resolvers });
}

module.exports.create = create;
