# Official Node.js alpine image as base
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy remaining source code
COPY . .

# Install dependencies
RUN npm install

# Expose port 5000
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
