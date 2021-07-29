FROM node:carbon

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

COPY . /app

CMD npm start

EXPOSE 3000

