FROM node:18.17.1-alpine

WORKDIR /home/app
COPY . .

RUN npm install

RUN npm run test

RUN npm run build

CMD npm run start:prod
