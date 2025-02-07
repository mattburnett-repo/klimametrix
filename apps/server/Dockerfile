# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy workspace files
COPY package.json yarn.lock ./
COPY .yarn ./.yarn
COPY .yarnrc.yml ./

# Copy server files
COPY apps/server ./apps/server

# Enable Yarn and install dependencies
RUN corepack enable && \
    corepack prepare yarn@4.6.0 --activate && \
    yarn install

# Build the server
WORKDIR /app/apps/server
RUN yarn build

# Copy node_modules for production
RUN cp -r node_modules dist/

WORKDIR /app/dist

EXPOSE 3000

# Run the built application
CMD ["yarn", "node", "dist/main"]
