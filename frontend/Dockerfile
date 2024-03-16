# Official Node.js alpine image as base
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy remaining source code
COPY . .

# Install dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
