require('../db')();
const User = require('../models/user');

const resolvers = {
  Query: {
    users: () => User.find({}).then(users => users),
  },
  Mutation: {
    addUser: (root, { firstName, lastName, age }) => {
      const user = new User({ firstName, lastName, age });

      return user.save().then(usr => usr);
    },
  },
};

module.exports = resolvers;
