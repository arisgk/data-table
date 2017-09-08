require('../db')();
const User = require('../models/user');

const resolvers = {
  Query: {
    users: () => User.find({}).then(users => users),
  },
};

module.exports = resolvers;
