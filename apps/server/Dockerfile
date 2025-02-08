# Stage 1: Build the dependencies
FROM node:18 as build

# Set working directory for the build stage
WORKDIR /app

# Copy package.json to install dependencies
COPY package.json ./

# Enable Corepack and install Yarn (without the lockfile)
# RUN corepack enable && yarn install --no-lockfile
RUN corepack enable && yarn install

# Stage 2: Final image
FROM node:18

# Set working directory for the final image
WORKDIR /app

# Copy the installed node_modules from the build stage
# COPY --from=build /app/node_modules /app/node_modules

# Copy the rest of the application files
COPY . .

# Expose port and set the startup command
EXPOSE 3000
CMD ["yarn", "start:prod"]
