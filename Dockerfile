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

FROM clean-install as build
WORKDIR /app
COPY --from=clean-install /app /app
CMD ["yarn", "build"]

# remix app - common js code split 
FROM build as frontend
WORKDIR /app
COPY --from=build /app /app
RUN rm -r packages/relay  packages/proxy packages/scripts packages/temporal 
CMD ["yarn", "start"]

# relay server with temporal workflow - esm code split. NOTE: realy server connects to frontend app via GUN websocket. 
FROM build as relay
WORKDIR /app
COPY --from=build /app /app
RUN rm -r packages/server packages/proxy packages/ui packages/scripts 
CMD ["yarn", "start"]

FROM clean-install as dev
WORKDIR /app
COPY --from=clean-install /app /app
CMD ["yarn", "dev"]
