const userRepositoryFactory = require('./user');

module.exports = (databases) => {
  const userRepository = userRepositoryFactory.create(databases);
  return ({
    userRepository,
  });
};
