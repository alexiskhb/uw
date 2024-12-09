FROM node:21

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["npx", "nx", "serve", "web-ui", "--host", "0.0.0.0"]
