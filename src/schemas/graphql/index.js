export const typeDefs = `

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
