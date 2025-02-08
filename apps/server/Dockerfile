# Use the official Node.js image as the base image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy the package.json from the root of the project
COPY package.json yarn.lock ./

# Install corepack and set Yarn version to stable
RUN corepack enable && yarn set version stable

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile --network-timeout 600000

# Copy only the server workspace files
COPY apps/server ./apps/server

# Focus on the server workspace and install required dependencies
RUN yarn workspaces focus server --all

# Expose the port that your app will run on
EXPOSE 3000

# Set the default command to run your app
CMD ["yarn", "start"]
