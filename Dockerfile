FROM node:20-slim AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM node:20-slim AS runtime
WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public
COPY --from=build /app/.tmp ./.tmp
COPY --from=build /app/.env ./.env
COPY package*.json tsconfig.json ./

EXPOSE 1337

CMD ["npm", "run", "start"]
