function create(User) {
  async function insert({ firstName, lastName, age }) {
    const created = await User.create({ firstName, lastName, age });
    return created.toEntity();
  }

  async function readAll() {
    const results = await User.findAll();
    return results.map(result => result.toEntity());
  }

  return {
    insert,
    readAll,
  };
}

module.exports.create = create;
