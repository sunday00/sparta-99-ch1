FROM node:18.17.1-alpine

WORKDIR /home/app
COPY . .

RUN npm install
CMD npm run start:prod
