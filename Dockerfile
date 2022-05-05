FROM nikolaik/python-nodejs:python3.10-nodejs14-alpine as server
WORKDIR /server
COPY package*.json .
RUN npm ci
COPY . .
RUN npm install pm2 -g
ENV NODE_ENV=production
RUN npm run server:build
CMD ["pm2-runtime", "ecosystem.config.js"]