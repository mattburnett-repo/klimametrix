# Build stage
FROM node:18-alpine as builder

# Enable Yarn
RUN corepack enable && corepack prepare yarn@4.6.0 --activate

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies and build
RUN yarn install
RUN yarn build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/.pnp.* .
COPY --from=builder /app/yarn.lock .

EXPOSE 3000
CMD ["yarn", "node", "dist/main"]
