function create(User) {
  async function insert({ firstName, lastName, age }) {
    const created = await User.create({ firstName, lastName, age });
    return created.toEntity();
  }

  async function readAll() {
    const results = await User.findAll();
    return results.map(result => result.toEntity());
  }

  async function remove(ids) {
    const results = await User.removeMany(ids);
    console.log(results);
    return results;
  }

  return {
    insert,
    readAll,
    remove,
  };
}

module.exports.create = create;
