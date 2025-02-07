# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
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

# Copy node_modules for production
RUN cp -r node_modules dist/

WORKDIR /app/dist

EXPOSE 3000

CMD ["node", "main"]
