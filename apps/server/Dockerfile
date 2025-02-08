# Use an official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Ensure Yarn 1.x is used
RUN corepack disable && npm install -g yarn@1 && yarn --version

# Copy package files
COPY package.json ./

# Install dependencies without using a lockfile
RUN yarn install --no-lockfile

# Copy the rest of the application files
COPY . .

# Expose port and set the startup command
EXPOSE 3000
CMD ["yarn", "start"]
