const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
