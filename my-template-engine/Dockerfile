FROM node
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install express
RUN apt update
COPY . usr/src/app

CMD [ "node", "app.js" ]