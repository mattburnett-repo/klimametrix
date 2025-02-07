# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy all files
COPY . .

# Enable Yarn and install dependencies
RUN corepack enable && \
    yarn install

# Build the application
RUN yarn build

# Copy node_modules for production
RUN cp -r node_modules dist/

WORKDIR /app/dist

EXPOSE 3000

# Run the built application
CMD ["yarn", "node", "dist/main"]
