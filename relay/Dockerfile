
FROM mhart/alpine-node:16 as build

EXPOSE 8085
COPY unified-supervisord.conf supervisord.conf /etc/supervisord/
ENV HOME /app
RUN  apk update &&\
    apk add --no-cache xfce4 midori gedit nautilus htop gcc gjs vim 

RUN apk update &&\
    apk add --no-cache git wget yajl dub dmd terminator 

RUN apk update &&\
    apk add --no-cache gnome xdg-user-dirs gtk4.0 libsoup webkit2gtk  dbus dbus-x11 lxdm \
     gobject-introspection pkgconf \
    g++ make cairo gcompat py-pip python3 supervisor gobject-introspection &&\
    gvfs_pkgs=$(apk search gvfs -q | grep -v '\-dev' | grep -v '\-lang' | grep -v '\-doc') \
    apk add --no-cache $gvfs_pkgs &&\
    LC_ALL=C xdg-user-dirs-update --force &&\
    chmod -R 777 /etc/supervisord/  &&\
    mkdir -p /var/log/supervisord/ 
RUN \
    echo "**** install packages ****" && \
    apk add --no-cache \
    adwaita-icon-theme \
    faenza-icon-theme \
    faenza-icon-theme-xfce4-appfinder \
    faenza-icon-theme-xfce4-panel \
    firefox-esr \
    mousepad \
    thunar \
    xfce4 \
    xfce4-terminal && \
    echo "**** cleanup ****" && \
    rm -rf \
    /tmp/*

ENV GDK_BACKEND broadway
ENV BROADWAY_DISPLAY :5
ENV START_URL ""
ENV PROXY_HOST "socket-proxy"
ENV PROXY_PORT 8000
ENV RELAY_PORT 3000
ENV ROUTE_DIRECTORY "src/routes"
ENV VIRTUAL_PEER "http://front_app:3333/gun"
ENV DEBUG false
COPY . /app
WORKDIR /app
RUN yarn 

ENTRYPOINT supervisord -c "/etc/supervisord/unified-supervisord.conf"

FROM build as dev
WORKDIR /app
COPY --from=build /app/supervisord.conf /app/unified-supervisord.conf /etc/supervisord/
COPY --from=build /app /app
RUN apk add --no-cache zsh &&\
    chmod +x ./bin/omy.sh &&\
    ./bin/omy.sh 
CMD ["yarn", "dev"]