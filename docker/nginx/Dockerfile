FROM nginx:mainline-alpine

LABEL maintainer="Eakkapat Pattarathamrong (overbid@gmail.com)"

ARG CONTINENT=Asia
ARG CITY=Bangkok
ARG USERID=1000
ARG GROUPID=1000
ARG USERNAME=CFL

# Change time zone to Bangkok.
RUN set -xe &&\
    apk add --no-cache --update tzdata &&\
    cp /usr/share/zoneinfo/${CONTINENT}/${CITY} /etc/localtime &&\
    apk del --force tzdata &&\
    echo "${CONTINENT}/${CITY}" >  /etc/timezone

RUN set -x &&\
    sed -i "s/user  nginx;/user  ${USERNAME};/g" /etc/nginx/nginx.conf  &&\
    if [ "$(getent passwd ${USERID})" == "" ]; \
    then \
            $(adduser -D -u ${USERID} -g "${GROUPID}" ${USERNAME}); \
    fi
