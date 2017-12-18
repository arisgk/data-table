#!/usr/bin/env bash
set -e
set -x

export NODE_ENV="${NODE_ENV:-development}"

if [ $NODE_ENV == "development" ]; then
  # this runs webpack-dev-server with hot reloading
  npm start
else
  # build the app and serve it
  npm run build
  node server.js
fi