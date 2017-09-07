const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
type User {
  id: String
  firstName: String
  lastName: String
  age: Int
}

type Query {
  users: [User]
}
`;

const schema = makeExecutableSchema({ typeDefs });

module.exports = schema;
