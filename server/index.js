require('dotenv').config();
const logger = require('./libs/logger');
const resolvers = require('./resolvers');
const app = require('./http/app')(resolvers);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  logger.info(`Listening on *:${port}`);
});
