require('../db')();

const users = [
  {
    id: '1234abcd',
    firstName: 'Lebron',
    lastName: 'James',
    age: 32,
  },
  {
    id: '2345bcde',
    firstName: 'Steph',
    lastName: 'Curry',
    age: 29,
  },
];

const resolvers = {
  Query: {
    users: () => users,
  },
};

module.exports = resolvers;
