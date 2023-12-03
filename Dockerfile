FROM node:20-buster-slim

LABEL maintainer="carlotadlavega@correo.ugr.es"

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

WORKDIR /app/test

ENTRYPOINT ["yarn", "test"]