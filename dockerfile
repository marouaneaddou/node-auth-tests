FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN npm install 

COPY . . 

EXPOSE 3000

CMD ["yarn", "dev"]