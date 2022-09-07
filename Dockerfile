ARG NODE_VERSION=16
FROM mhart/alpine-node:${NODE_VERSION}  as baseImage

FROM baseImage as clean-install
# deps
WORKDIR /app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./turbo.json ./turbo.json
COPY ./.eslintrc.js ./.eslintrc.js
COPY ./packages ./packages
COPY ./config ./config

RUN yarn ci

FROM clean-install as watch-dev
WORKDIR /app
COPY --from=clean-install /app /app
CMD ["yarn", "dev"]
