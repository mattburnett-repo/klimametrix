# Single stage build
FROM node:18-alpine
RUN corepack enable && corepack prepare yarn@4.6.0 --activate

WORKDIR /app
COPY . .

RUN yarn install
# RUN cd apps/server && yarn build
RUN cd apps/server && yarn build && ls -la /app/apps/server/dist


EXPOSE 3000
WORKDIR /app/apps/server
CMD ["node", "dist/main"] 