FROM node:16.13.2-alpine as builder
RUN mkdir -p /usr/src/wishlist/node_modules && chown -R node:node /usr/src/wishlist
WORKDIR /usr/src/wishlist
COPY ./package.json .
RUN npm config set unsafe-perm true
RUN npm install -g typescript
RUN npm install -g ts-node
USER node
RUN npm install
COPY --chown=node:node . .
RUN npm run build

EXPOSE 9000
CMD [ "node", "dist/main/app.js" ]