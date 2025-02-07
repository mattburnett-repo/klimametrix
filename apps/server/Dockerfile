FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./
COPY apps/server/package.json ./

# Install dependencies
RUN corepack enable && \
    corepack prepare yarn@4.6.0 --activate && \
    yarn install --frozen-lockfile

# Copy source code
COPY apps/server .

# Build the application
RUN yarn build

EXPOSE 3000

CMD ["node", "dist/main"]
