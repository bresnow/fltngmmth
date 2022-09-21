ARG NODE_VERSION=16
FROM mhart/alpine-node:${NODE_VERSION}  as baseImage
RUN apk add git curl openssl 
FROM baseImage as clean-install
# deps
WORKDIR /app

COPY ["./package.json","./yarn.lock","./turbo.json", "./config ","./.eslintrc.js", "./"]
COPY [ "packages/relay" ,"packages/scripts" ,"packages/temporal" ,"packages/server" ,"packages/ui" ,"packages/scripts" , "/packages/"]


RUN yarn 

FROM clean-install as build
WORKDIR /app
COPY --from=clean-install /app /app
CMD ["yarn", "build"]

# remix app - common js code split 
FROM build as frontend
WORKDIR /app
COPY --from=build /app /app
RUN rm -r packages/relay  packages/scripts packages/temporal 
CMD ["yarn", "start"]

# relay server with temporal workflow - esm code split. NOTE: realy server connects to frontend app via GUN websocket. 
FROM build as relay
WORKDIR /app
COPY --from=build /app /app
RUN rm -r packages/server  packages/ui packages/scripts 
CMD ["yarn", "start"]

FROM build as dev
WORKDIR /app
COPY --from=build /app /app
CMD ["yarn", "dev"]
