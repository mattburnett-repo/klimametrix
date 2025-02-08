# Use an official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Install dependencies: Pull from the monorepo (without needing yarn.lock)
RUN corepack enable && yarn set version stable

# Initialize a new empty package.json
RUN echo '{ "private": true, "workspaces": ["*"] }' > package.json

# Install only the dependencies for `apps/server`
COPY package.json ./
RUN yarn workspaces focus server --all

# Copy the rest of the server app
COPY . .

# Build TypeScript (if applicable)
RUN yarn build

# Expose port (adjust if necessary)
EXPOSE 3000

# Start the server
CMD ["node", "dist/main"]
