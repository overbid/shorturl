FROM node:current-buster

LABEL maintainer="Eakkapat Pattarathamrong (overbid@gmail.com)"

ARG CONTINENT=Asia
ARG CITY=Bangkok
ARG USERID=1000
ARG GROUPID=1000
ARG USERNAME=CFL

RUN set -x &&\
    rm /etc/localtime &&\
    ln -s "/usr/share/zoneinfo/${CONTINENT}/${CITY}" /etc/localtime &&\
    echo "${CONTINENT}/${CITY}" | tee /etc/timezone &&\
    dpkg-reconfigure --frontend noninteractive tzdata

# RUN set -x &&\
#     groupadd -f -g ${GROUPID} ${USERNAME} &&\
#     useradd -M -u ${USERID} -g ${GROUPID} ${USERNAME}
