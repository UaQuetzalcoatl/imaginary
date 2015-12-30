FROM node:5.3.0-wheezy

COPY package.json /var/www/app/package.json
WORKDIR /var/www/app
RUN npm install

EXPOSE 9090

CMD ["npm", "start"]