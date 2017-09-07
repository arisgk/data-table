const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');

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

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema });

module.exports = schema;
