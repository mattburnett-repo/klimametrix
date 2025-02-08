# Stage 1: Build the dependencies
FROM node:18 as build

# Set working directory for the build stage
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Enable Corepack and install Yarn (without the lockfile)
RUN corepack enable && yarn install --no-lockfile

# Install TypeScript globally (in case it's not available in the project)
RUN yarn global add typescript

# Copy the rest of the application files
COPY . .

# Run TypeScript compilation using npx
RUN npx tsc --project tsconfig.json

# Stage 2: Final image
FROM node:18

# Set working directory for the final image
WORKDIR /app

# Copy the compiled dist folder from the build stage
COPY --from=build /app/dist /app/dist

# Copy any remaining necessary files
COPY . .

# Expose port and set the startup command
EXPOSE 3000
CMD ["yarn", "start:prod"]
