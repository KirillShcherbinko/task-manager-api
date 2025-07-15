FROM node:lts-alpine

COPY package.json package-lock.json ./
COPY prisma ./prisma/


RUN npm i

COPY . .

CMD ["sh", "-c", "npm run db:deploy && npm run dev"] 