# Adjust NODE_VERSION as desired
ARG NODE_VERSION=22.2.0
FROM node:${NODE_VERSION}-slim as base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages, log errors if occur
RUN npm install || cat npm-debug.log

# Bundle app source
COPY . .

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Set production environment
ENV NODE_ENV="production"

# Run the app when the container launches
CMD ["node", "server.js"]
