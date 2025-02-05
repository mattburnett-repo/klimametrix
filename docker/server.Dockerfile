FROM node:18-alpine

WORKDIR /app

# Copy root workspace files
COPY package.json yarn.lock ./
COPY apps/server/package.json ./apps/server/

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY apps/server ./apps/server

# Build the application
RUN yarn workspace server build

# Expose port
EXPOSE 3000

# Start the application
CMD ["yarn", "workspace", "server", "start:dev"] 