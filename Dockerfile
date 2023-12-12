FROM node:20-buster-slim

LABEL maintainer="carlotadlavega@correo.ugr.es"

RUN mkdir -p /app/test && chown -R node:node /app

USER node:node

WORKDIR /app

COPY --chown=node:node package.json ./

RUN yarn config set cache-folder /app/.yarn_cache && \
    yarn install

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app/test

ENTRYPOINT ["yarn", "test"]