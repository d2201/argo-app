FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

COPY src/ src/

RUN yarn install --frozen-lockfile --production

CMD ["node", "src/index.js"]