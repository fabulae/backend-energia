FROM node:latest

RUN mkdir -p /backend-energia

WORKDIR /backend-energia

ADD . /backend-energia

RUN npm install strapi@alpha -g
RUN npm install 
RUN npm run setup

EXPOSE 1337

CMD [ "strapi", "start" ]