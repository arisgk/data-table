require('dotenv').config();
const logger = require('./libs/logger');
const databases = require('./databases');
const repositories = require('./repositories/')(databases);
const resolvers = require('./resolvers')(repositories);
const app = require('./http/app')(resolvers);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  logger.info(`Listening on *:${port}`);
});
