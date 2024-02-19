FROM node:20.11-alpine3.19

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY .env .

RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 8085

CMD ["npm", "start"]
