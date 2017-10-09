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

  type Mutation {
    addUser(firstName: String!, lastName: String!, age: Int): User
    deleteUsers(ids: [ID]): [ID]
  }
  `;

  return makeExecutableSchema({ typeDefs, resolvers });
}

module.exports.create = create;
