FROM node:14
ENV CI=true
#ENV CHOKIDAR_USEPOLLING=true

WORKDIR /frontend/

COPY ./package.json /frontend/
RUN npm install

COPY ./src /frontend/src
COPY ./public /frontend/public
RUN npm run test
