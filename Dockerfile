FROM node:14

WORKDIR /src

COPY package.json .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

COPY . .