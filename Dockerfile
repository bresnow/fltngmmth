ARG NODE_VERSION=16
FROM mhart/alpine-node:${NODE_VERSION} 
# deps
WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
COPY ./turbo.json /app/turbo.json
COPY ./.eslintrc.json /app/.eslintrc.json
COPY ./packages /app/packages
COPY ./config /app/config


RUN yarn ci

CMD ["yarn", "dev"]

