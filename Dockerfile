ARG NODE_VERSION=16
FROM mhart/alpine-node:${NODE_VERSION}  as baseImage
RUN apk add git curl openssl 
FROM baseImage as clean-install
# deps
WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
COPY ./turbo.json /app/turbo.json
COPY ./.eslintrc.js /app/.eslintrc.js
COPY ./packages /app/packages
COPY ./config /app/config
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./turbo.json ./turbo.json
COPY ./.eslintrc.js ./.eslintrc.js
COPY ./packages ./packages
COPY ./config ./config
RUN yarn 

FROM clean-install as build
WORKDIR /app
COPY --from=clean-install /app /app
CMD ["yarn", "build"]

# remix app - common js code split 
FROM build as frontend
WORKDIR /app
COPY --from=build /app /app
RUN rm -r packages/relay  packages/scripts 
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

FROM node as aminion

COPY --from=build /app /app
WORKDIR /app
RUN rm -rf **/node_modules

RUN apt-get update && apt-get -y install libgtkextra-dev libgconf2-dev libnss3 libasound2 libxtst-dev libxss1 libgtk-3-0
RUN apt-get update && apt-get install -y curl sudo

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install -y locales && locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LC_CTYPE ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP.utf8
RUN curl -o- -L https://yarnpkg.com/install.sh | bash && export PATH="$PATH:`yarn global bin`"

ARG DOCKER_UID=1001
ARG DOCKER_USER=docker
ARG DOCKER_PASSWORD=docker
RUN useradd -m -u ${DOCKER_UID} -G sudo ${DOCKER_USER} && echo ${DOCKER_USER}:${DOCKER_PASSWORD} | chpasswd

RUN  yarn \ 
    && yarn workspace aminion -D add electron
USER ${DOCKER_USER}

ENV QT_X11_NO_MITSHM=1

# Launch application
CMD ["yarn","workspace","aminion","start"]
