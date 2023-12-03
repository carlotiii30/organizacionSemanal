FROM node:20-buster-slim

LABEL maintainer="carlotadlavega@correo.ugr.es"

RUN mkdir -p /app/test && chown -R node:node /app

USER node

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn cache clean && yarn install --frozen-lockfile

WORKDIR /app/test

ENTRYPOINT ["yarn", "test"]