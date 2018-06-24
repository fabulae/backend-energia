FROM node:latest

RUN mkdir -p /backend-energia

WORKDIR /backend-energia

ADD . /backend-energia

RUN npm install 
RUN npm run postinstall

EXPOSE 1337

CMD [ "npm", "start" ]