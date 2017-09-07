/*  Mongoose connection module. */
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = () => {
  // Open Connection to Mongo DB
  mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

  // Check for errors on connecting to Mongo DB
  mongoose.connection.on('error', (err) => {
    console.log(`Error! DB Connection failed. Error: ${err}`);
    return err;
  });

  // Connection opened successfully
  mongoose.connection.once('open', () => {
    console.log('Connection to MongoDB established');
  });

  return mongoose.connection;
};
