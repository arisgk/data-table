# React Data Table
Sample project presenting tabular data using ReactJS, Node.js, GraphQL and MongoDB. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Check out a [deployed version of the app](https://graphql-data-table.herokuapp.com/).

### Front-end
The front-end app is built using [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/) and [Apollo](http://dev.apollodata.com/).

### Back-end
The back-end app is built using [Node.js](https://nodejs.org/), [Express](https://expressjs.com/) and [Apollo Server](https://github.com/apollographql/apollo-server).

### Data Store
[MongoDB](https://www.mongodb.com/) is used as a data store.

## Development
Create an `.env` file in project root to register the following required environment variables:
* `MONGODB_URI` - MongoDB connection URI

### Server

To start the server run:
```
npm install
node server
```

You can use [Nodemon](https://github.com/remy/nodemon) to automatically restart the server when changes are detected:

```
npm install
npm install -g nodemon
nodemon server
```

### Client

To start the client run `npm start`.

Run the test watcher in an interactive mode using `npm test`.

## Deployment
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

You can use [create-react-app deployment instructions](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) as a guide for various solutions.
