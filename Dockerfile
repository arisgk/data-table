FROM node:alpine

# Add bash
RUN apk add --no-cache bash

# Run the image as a non-root user
RUN adduser -S web
USER web

# Create app directory
RUN mkdir -p /home/web/app
WORKDIR /home/web/app

# Install app dependencies
COPY package.json /home/web/app
RUN npm install

# Bundle app source
COPY . /home/web/app

# Start the app
CMD ["/bin/bash", "/home/web/app/run.sh"]