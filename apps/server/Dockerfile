# Use an official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Enable Corepack, which will manage Yarn for us
RUN corepack enable

# Copy package.json (and yarn.lock if necessary)
COPY package.json yarn.lock ./

# Install dependencies using Corepack-managed Yarn (respecting the packageManager field)
RUN yarn install --no-lockfile

# Copy the rest of the application files
COPY . .

# Expose port and set the startup command
EXPOSE 3000
CMD ["yarn", "start"]
