ARG NODE_VERSION=16
FROM mhart/alpine-node:${NODE_VERSION} 
# deps
WORKDIR /app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./turbo.json ./turbo.json
COPY ./.eslintrc.js ./.eslintrc.js
COPY ./packages ./packages
COPY ./config ./config


RUN yarn ci

CMD ["yarn", "dev"]

