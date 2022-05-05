# HREG - Server

> Prerequisites: NodeJS and Docker have to be installed on running machine.

## Develop

1. `npm i`
2. `npm run develop` - runs the server in the development mode on `3000` port.

## Production

1. `docker-compose -f docker-compose.yml up -d --build` - runs the server in the production mode inside of the docker container on `80` port.
