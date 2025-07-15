FROM node:lts-alpine

WORKDIR /app

# 1. Установка зависимостей
RUN npm install -g prisma
COPY package.json package-lock.json ./
RUN npm install

# 2. Копируем Prisma схему и .env файл
COPY prisma ./prisma/
COPY .env ./

# 3. Генерируем клиент (без применения миграций)
RUN npx prisma generate

# 4. Копируем остальной код
COPY . .

# 5. Запускаем приложение (миграции применятся при запуске)
CMD ["sh", "-c", "npm run db:migrate && npm run db:deploy && npm run db:seed && npm run dev"]
