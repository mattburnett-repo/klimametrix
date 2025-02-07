# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files

# Copy package.json (which is in the same directory as the Dockerfile)
COPY package.json ./

# Copy yarn.lock from two levels up
COPY ../../yarn.lock ./

COPY tsconfig.json ./
COPY src ./src

# Install dependencies
RUN corepack enable && yarn install

# Build the application
RUN yarn build

# Copy node_modules for production
RUN cp -r node_modules dist/

WORKDIR /app/dist

EXPOSE 3000

CMD ["node", "main"]
