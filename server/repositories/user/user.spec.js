/* global describe, it, beforeEach, afterEach, expect */
const mongoose = require('mongoose');
const sinon = require('sinon');
const UserEntity = require('../../entities/user');
const User = require('../../databases/mongodb/mappers/user');
const factory = require('./user');

const repository = factory.create(User);

describe('User Repository', () => {
  describe('Create', () => {
    const dbId = mongoose.Types.ObjectId();

    function createDbModelUser() {
      return new User({ _id: dbId, firstName: 'Lebron', lastName: 'James', age: 32 });
    }

    function createUserEntity() {
      return new UserEntity(dbId.toString(), 'Lebron', 'James', 32);
    }

    beforeEach(() => {
      sinon.stub(User, 'create');
    });

    afterEach(() => {
      User.create.restore();
    });

    it('Uses the data store to create a user', async () => {
      const expected = createUserEntity();
      User.create.resolves(createDbModelUser());

      const result = await repository.insert({ firstName: 'Lebron', lastName: 'James', age: 32 });
      expect(result).toEqual(expected);
    });
  });

  describe('Read', () => {
    const lebronId = mongoose.Types.ObjectId();
    const curryId = mongoose.Types.ObjectId();

    function createDbModelUsers() {
      const james = new User({ _id: lebronId, firstName: 'Lebron', lastName: 'James', age: 32 });
      const curry = new User({ _id: curryId, firstName: 'Steph', lastName: 'Curry', age: 29 });
      return [james, curry];
    }

    function createUserEntities() {
      const james = new UserEntity(lebronId.toString(), 'Lebron', 'James', 32);
      const curry = new UserEntity(curryId.toString(), 'Steph', 'Curry', 29);
      return [james, curry];
    }

    beforeEach(() => {
      sinon.stub(User, 'findAll');
    });

    afterEach(() => {
      User.findAll.restore();
    });

    it('Uses the data store to read all users', async () => {
      const expected = createUserEntities();
      User.findAll.resolves(createDbModelUsers());

      const result = await repository.readAll();
      expect(result).toEqual(expected);
    });
  });

  describe('Delete', () => {
    const ids = [mongoose.Types.ObjectId(), mongoose.Types.ObjectId()];

    beforeEach(() => {
      sinon.stub(User, 'removeMany');
    });

    afterEach(() => {
      User.removeMany.restore();
    });

    it('Uses the data store to delete users', async () => {
      const expected = ids;
      User.removeMany.resolves(ids);

      const result = await repository.remove(ids);
      expect(result).toEqual(expected);
    });
  });
});
