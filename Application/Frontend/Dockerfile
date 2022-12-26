FROM node:14-alpine
ENV CI=true
#ENV CHOKIDAR_USEPOLLING=true

WORKDIR /frontend/

COPY ./package.json /frontend/package.json
COPY ./src /frontend/src
COPY ./public /frontend/public

# Install all packages, and run tests.
# After tests have been ran, delete development dependencies
# This type of run is important to reclaim freed space
RUN npm install \
    && npm run test \
    && npm prune --production
