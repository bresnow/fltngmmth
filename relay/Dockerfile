
FROM mhart/alpine-node:16 as build
# midori gedit nautilus htop
EXPOSE 8085

RUN  apk update &&\
    apk add --no-cache   

RUN apk update &&\
    apk add --no-cache 

RUN apk update &&\
    gvfs_pkgs=$(apk search gvfs -q | grep -v '\-dev' | grep -v '\-lang' | grep -v '\-doc') \
    apk add --no-cache $gvfs_pkgs gnome gtk4.0 gtk4.0-demo gcc gjs libsoup webkit2gtk dbus xdm \
    gobject-introspection pkgconf \
    g++ make cairo gcompat py-pip python3 gobject-introspection &&\
    LC_ALL=C xdg-user-dirs-update --force 
RUN \
    echo "**** install packages ****" && \
    apk add --no-cache \
    git wget vim \
    # Openbox window manager
    openbox \
    xsetroot \
    # Font
    font-croscore && \
    # Remove some unneeded stuff.
    rm -rf /var/cache/fontconfig/* \
    echo "**** cleanup ****" && \
    rm -rf \
    /tmp/*

ENV GDK_BACKEND broadway
ENV DISPLAY :5
ENV BROADWAY_DISPLAY :5
ENV PROXY_HOST "socket-proxy"
ENV PROXY_PORT 8000
ENV RELAY_PORT 3000
ENV ROUTE_DIRECTORY "src/routes"
ENV VIRTUAL_PEER "http://front_app:3333/gun"
ENV DEBUG false
COPY . /app
WORKDIR /app
RUN yarn 



FROM build as dev
WORKDIR /app
COPY --from=build /app /app
RUN apk add --no-cache zsh terminator gedit &&\
    chmod +x ./bin/omy.sh &&\
    ./bin/omy.sh 
CMD ["yarn", "dev"]