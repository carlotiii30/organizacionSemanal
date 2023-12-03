FROM node:20-buster-slim

LABEL maintainer="carlotadlavega@correo.ugr.es"

RUN mkdir /.npm && chmod 777 /.npm

RUN mkdir -p /app/test && chown -R node:node /app

USER node

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

WORKDIR /app/test

ENTRYPOINT ["yarn", "test"]