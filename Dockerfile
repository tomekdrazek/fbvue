FROM node:alpine

RUN apk add openjdk11

RUN npm install -g firebase-tools

WORKDIR /app

COPY firebase.json /app/firebase.json

CMD [ "firebase", "-P", "demo-fb", "emulators:start", "--only", "database,auth,hosting" ]