FROM postgres:13-alpine

LABEL maintainer="Eakkapat Pattarathamrong (overbid@gmail.com)"

ARG CONTINENT=Asia
ARG CITY=Bangkok
ARG USERID=1000
ARG GROUPID=1000
ARG USERNAME=db

# Change time zone to Bangkok.
RUN set -xe &&\
    apk add --no-cache --update tzdata &&\
    cp /usr/share/zoneinfo/${CONTINENT}/${CITY} /etc/localtime &&\
    # apk del --force tzdata &&\
    echo "${CONTINENT}/${CITY}" >  /etc/timezone

# Add running user
RUN set -x &&\
    if [ "$(getent passwd ${USERID})" == "" ]; \
    then \
            $(adduser -D -u "${USERID}" -g "${GROUPID}" "${USERNAME}"); \
    fi
