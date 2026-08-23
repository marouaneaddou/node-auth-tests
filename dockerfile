FROM node:20-alpine

ARG PORT=3000

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci 

COPY . . 

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]