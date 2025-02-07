# Use Node.js base image
FROM node:18-alpine

# Install curl
RUN apk add --no-cache curl

# Set the working directory inside the container
WORKDIR /app

# Copy package.json first (to take advantage of Docker layer caching)
COPY package.json ./

# Download yarn.lock from GitHub
RUN curl -o yarn.lock https://raw.githubusercontent.com/mattburnett-repo/klimametrix/main/yarn.lock

# Install dependencies
RUN yarn install

# Copy only the server files (avoid unnecessary files)
COPY . .

# Build the server
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Run the built application
CMD ["node", "dist/main"]
