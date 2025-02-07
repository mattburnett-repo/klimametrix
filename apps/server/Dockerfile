# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies required for building the project
RUN apk add --no-cache curl && \
    corepack enable

# Copy the root package.json and yarn.lock files
COPY package.json yarn.lock ./

# Copy the entire workspace folder structure (e.g., packages/*)
COPY packages ./packages/

# Install all dependencies for the monorepo (including workspaces)
RUN yarn install --frozen-lockfile

# Copy the rest of the application code into the container
COPY . .

# Expose the port the app will run on (adjust as needed)
EXPOSE 3000

# Command to run the application (adjust based on your entry point)
CMD ["yarn", "start"]
