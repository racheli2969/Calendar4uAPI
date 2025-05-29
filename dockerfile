# Dockerfile for Node.js API server
# This Dockerfile sets up a Node.js environment for running an API server.
# It installs dependencies, copies the application code, and exposes the necessary port.
# Version: 1.0

# Base image
FROM node:18

# Set working directory
WORKDIR /src/server
# Set environment variables

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose API port
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
