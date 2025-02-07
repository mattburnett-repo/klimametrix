# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy workspace files
COPY package.json ./
COPY ../../yarn.lock ./
# COPY ../../.yarn ./.yarn
# COPY ../../.yarnrc.yml ./

# Copy server files
COPY . ./apps/server

# Install dependencies using Yarn 1.x
RUN yarn install

# Build the server
WORKDIR /app/apps/server
RUN yarn build

EXPOSE 3000

# Run the built application
CMD ["node", "dist/main"]
