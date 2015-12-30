FROM node:5.0-wheezy

ENV NODE_ENV=dev
ENV APP_PORT=9090

COPY src /var/www/app
WORKDIR /var/www/app
RUN npm install

EXPOSE 9090