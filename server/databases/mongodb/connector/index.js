/*  Mongoose connection module. */
const mongoose = require('mongoose');
const logger = require('../../../libs/logger');
mongoose.Promise = require('bluebird');

module.exports = {
  connect() {
    // Open Connection to Mongo DB
    mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

    // Check for errors on connecting to Mongo DB
    mongoose.connection.on('error', (err) => {
      logger.info(`Error! DB Connection failed. Error: ${err}`);
      return err;
    });

    // Connection opened successfully
    mongoose.connection.once('open', () => {
      logger.info('Connection to MongoDB established');
    });

    return mongoose.connection;
  },
  close() {
    return mongoose.connection.close();
  },
};
