const userRepositoryFactory = require('./user');

module.exports = (databases) => {
  const userRepository = userRepositoryFactory.create(databases.mongodb.mappers.User);
  return ({
    userRepository,
  });
};
