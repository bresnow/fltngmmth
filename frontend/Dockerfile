ARG NODE_VERSION=16
FROM mhart/alpine-node:${NODE_VERSION}  as baseImage

FROM baseImage as clean-install
# deps
WORKDIR /app

COPY package.json ./package.json
COPY yarn.lock  ./yarn.lock 
COPY turbo.json/ ./turbo.json
COPY .eslintrc.js ./.eslintrc.js 
COPY ./packages ./packages/
COPY ./config ./config/

RUN yarn 

FROM clean-install as build
WORKDIR /app
COPY --from=clean-install /app /app
CMD ["yarn", "build"]


# remix app - common js code split 
FROM build as frontend
WORKDIR /app
COPY --from=build /app /app
# RUN rm -rf /app/packages/{relay,proxy,scripts}
CMD ["yarn", "start"]


FROM relay as dev
WORKDIR /app
COPY --from=build /app/packages/relay/supervisord.conf /app/packages/relay/unified-supervisord.conf /etc/supervisord/
COPY --from=build /app /app
RUN apk add --no-cache zsh &&\
    chmod +x /app/packages/relay/bin/omy.sh &&\
    ./packages/relay/bin/omy.sh 
CMD ["yarn", "dev"]