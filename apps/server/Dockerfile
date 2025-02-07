# Use an official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (for better caching)
COPY package.json yarn.lock tsconfig.json ./

# Enable Corepack and install dependencies using traditional node_modules
RUN corepack enable && \
    corepack prepare yarn@4.6.0 --activate && \
    yarn install --mode=classic

# Copy the source code
COPY src ./src

# Build the project
RUN yarn build

# Ensure dependencies and build output exist
RUN ls -la node_modules/@nestjs/core || echo "Dependency missing!" && \
    ls -la dist || echo "No dist folder found!"

# Start the application
CMD ["node", "dist/main.js"]
