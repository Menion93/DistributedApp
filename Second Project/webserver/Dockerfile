FROM node:4-onbuild

MAINTAINER https://github.com/Menion93/DistributedApp

ADD . /webserver
WORKDIR /webserver

RUN npm install && \
    npm install forever -g

ENTRYPOINT node bin/www