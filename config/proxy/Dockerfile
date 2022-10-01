FROM alpine:edge as base
COPY unified-supervisord.conf supervisord.conf /etc/supervisord/

RUN apk --no-cache add socat py-pip python3 supervisor

RUN chmod -R 777 /etc/supervisord/  &&\
    mkdir -p /var/log/supervisord/ 

RUN rm -rf /var/cache/apk/*  /sbin/halt /sbin/poweroff /sbin/reboot &&  \
    { rm -rf /root/.gnupg || true; }

FROM base as production
ENV DockerPort 8000
ENV X11Port 8000

ENTRYPOINT supervisord -c "/etc/supervisord/unified-supervisord.conf"