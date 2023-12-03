FROM node:20-buster-slim

LABEL maintainer="carlotadlavega@correo.ugr.es"

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

RUN if [ ! -x "$(command -v jest)" ]; then echo "Jest is not installed. Check your dependencies."; exit 1; fi

WORKDIR /app/test

ENTRYPOINT ["yarn", "test"]