FROM node:18-alpine

WORKDIR /app

# Copy root package files first
COPY ../../package.json ../../yarn.lock ./

# Copy server package.json
COPY package.json ./

# Install dependencies
RUN corepack enable && \
    corepack prepare yarn@4.6.0 --activate && \
    yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN yarn build

EXPOSE 3000

CMD ["node", "dist/main"]
