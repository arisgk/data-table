/* global describe, it, beforeAll, afterAll, expect */
const sinon = require('sinon');
const User = require('../entities/user');
const resolversFactory = require('./resolvers');

const repositories = { userRepository: { readAll() {}, insert() {} } };
const resolvers = resolversFactory(repositories);

describe('Resolvers', () => {
  describe('Queries', () => {
    function createUsers() {
      const james = new User('1234abcd', 'Lebron', 'James', 32);
      const curry = new User('5678efgh', 'Steph', 'Curry', 29);
      return [james, curry];
    }

    beforeAll(() => {
      sinon.stub(repositories.userRepository, 'readAll');
    });

    afterAll(() => {
      repositories.userRepository.readAll.restore();
    });

    it('Gets all users', async () => {
      const expected = createUsers();
      repositories.userRepository.readAll.resolves(expected);

      const result = await resolvers.Query.users();
      expect(result).toEqual(expected);
    });
  });

  describe('Mutations', () => {
    beforeAll(() => {
      sinon.stub(repositories.userRepository, 'insert');
    });

    afterAll(() => {
      repositories.userRepository.insert.restore();
    });

    it('Creates a user', async () => {
      const id = '2345bcde';
      const firstName = 'Kevin';
      const lastName = 'Durant';
      const age = 28;

      const expected = new User(id, firstName, lastName, age);

      repositories.userRepository.insert.resolves(expected);

      const result = await resolvers.Mutation.addUser({}, { firstName, lastName, age });
      expect(result).toEqual(expected);
    });
  });
});
