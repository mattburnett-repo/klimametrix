FROM node:18-alpine

WORKDIR /app

# Copy root workspace files
COPY package.json yarn.lock ./
COPY apps/client/package.json ./apps/client/

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY apps/client ./apps/client

# Build the application
RUN yarn workspace client build

# Expose port
EXPOSE 5173

# Start the application
CMD ["yarn", "workspace", "client", "dev"] 