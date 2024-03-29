FROM node:20-buster-slim

LABEL maintainer="carlotadlavega@correo.ugr.es"

RUN mkdir -p /app/test && chown -R node:node /app

USER node

WORKDIR /app

COPY package.json ./

RUN yarn set version stable && yarn install

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app/test

ENTRYPOINT ["yarn", "test"]