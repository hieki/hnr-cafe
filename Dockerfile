FROM node:13.8.0
LABEL mainainer="hieki <ksakahieki@gmail.com>"

ENV HNR_ROOT /usr/src/hnr-cafe
WORKDIR $HNR_ROOT

COPY ./package.json $HNR_ROOT
COPY ./package-lock.json $HNR_ROOT

RUN npm --version && \
    npm install && \
    npm ls
