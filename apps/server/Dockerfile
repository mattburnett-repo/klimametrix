FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src

# Install dependencies
RUN corepack enable && \
    corepack prepare yarn@4.6.0 --activate && \
    yarn install

# Build the application
RUN yarn build

EXPOSE 3000

CMD ["node", "dist/main"]
