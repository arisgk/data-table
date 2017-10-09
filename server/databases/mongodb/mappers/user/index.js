const mongoose = require('mongoose');
const UserEntity = require('../../../../entities/user');

const Schema = mongoose.Schema;

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: Number,
});

schema.statics.findAll = function findAll(cb) {
  return this.find({}, cb);
};

schema.statics.removeMany = async function removeMany(ids) {
  await this.remove({ _id: { $in: ids } }).exec();
  return ids;
};

schema.methods.toEntity = function toEntity() {
  return new UserEntity(this._id.toString(), this.firstName, this.lastName, this.age);
};

const User = mongoose.model('User', schema);

module.exports = User;
