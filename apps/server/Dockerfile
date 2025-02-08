# Use a minimal Node.js base image
FROM node:18-slim

# Set working directory inside the container
WORKDIR /app

# Copy only the package.json (without yarn.lock)
COPY package.json ./

# Enable Corepack and install dependencies without yarn.lock
RUN corepack enable && yarn set version stable && yarn install --no-lockfile

# Copy the rest of the server code
COPY . .

# Expose the app's port
EXPOSE 3000

# Start the server
CMD ["yarn", "start"]
