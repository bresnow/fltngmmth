
FROM node:18-alpine3.16 as build

COPY bin/supervisor /etc/supervisord/
RUN apk update &&\
    gvfs_pkgs=$(apk search gvfs -q | grep -v '\-dev' | grep -v '\-lang' | grep -v '\-doc') \
    apk add --no-cache $gvfs_pkgs gnome apk-gtk3 gcc gjs libsoup webkit2gtk \
    gobject-introspection git wget vim dconf dub  \
    g++ make cairo gcompat py-pip python3 supervisor xdg-user-dirs &&\
    LC_ALL=C xdg-user-dirs-update --force &&\
    chmod -R 777 /etc/supervisord/  &&\
    mkdir -p /var/log/supervisord/ 


ENV GDK_BACKEND broadway
ENV BROADWAY_DISPLAY :5

COPY . /app
WORKDIR /app
RUN yarn 
ENTRYPOINT supervisord -c "/etc/supervisord/unified-supervisord.conf"


FROM build as dev
WORKDIR /app
COPY --from=build /etc/supervisord /etc/supervisord
COPY --from=build /app /app
RUN apk update &&\
    apk add --no-cache zsh \
    nautilus\
    midori \
    wget\
    vim \
    gedit &&\
    chmod +x ./bin/omy.sh &&\
    ./bin/omy.sh &&\
    echo "**** cleanup ****" && \
    rm -rf \
    /tmp/*


