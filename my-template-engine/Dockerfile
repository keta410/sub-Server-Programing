FROM node  
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app
#workdir เส้นทางเดินไป..
COPY package.json /usr/src/app
#copy ข้อมูลทั้งหมดที่มี package.json (ภายใน Folder ที่เก็บ)
RUN npm install express
#ติดตั้ง npm, express
RUN apt update
COPY . usr/src/app

CMD [ "node", "app.js" ]