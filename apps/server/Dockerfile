# Build stage
FROM node:18-alpine AS builder
RUN corepack enable && corepack prepare yarn@4.6.0 --activate

WORKDIR /app
COPY . .

# Install dependencies and build
RUN yarn install
RUN cd apps/server && yarn build

# Production stage
FROM node:18-alpine

WORKDIR /app/apps/server
COPY --from=builder /app/apps/server/dist ./dist
COPY --from=builder /app/apps/server/package.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "dist/main"] 
