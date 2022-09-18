FROM nginxinc/nginx-unprivileged:1-alpine

USER root

RUN apk update \
    && apk add openssl socat
    
USER nginx