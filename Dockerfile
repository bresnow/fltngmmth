ARG NODE_VERSION=16
FROM mhart/alpine-node:${NODE_VERSION} as base
# deps
FROM base as deps

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn ci

FROM base as production-deps

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn --production

FROM base as build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY . .
RUN yarn build

FROM base as node-server-base

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/packages/remix-app/build /app/packages/remix-app/build
COPY --from=build /app/packages/server/index.js /app/packages/server/index.js

FROM node-server-base as production-node-server

ENV PORT=3333
ENV NODE_ENV=production

CMD ["yarn", "workspace", "server", "start"]

FROM build as watch-dev

WORKDIR /app

CMD ["yarn", "dev"]

