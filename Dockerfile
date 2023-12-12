FROM node:20-buster-slim

LABEL maintainer="carlotadlavega@correo.ugr.es"

RUN mkdir -p /app/test && chown -R node:node /app

USER node

WORKDIR /app

COPY --chown=node:node package.json ./

RUN yarn config set cache-folder /app/.yarn_cache && \
    yarn install

USER root
RUN chmod -R 777 /app/.yarn_cache
USER node

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app/test

ENTRYPOINT ["yarn", "test"]