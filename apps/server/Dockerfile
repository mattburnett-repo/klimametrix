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

# Enable Yarn in production stage
RUN corepack enable && corepack prepare yarn@4.6.0 --activate

WORKDIR /app

# Copy production files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .

# Install production dependencies
# RUN yarn install --production --no-immutable
RUN yarn workspaces focus --production


EXPOSE 3000

CMD ["node", "dist/main"]
