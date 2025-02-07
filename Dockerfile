# Use Node.js 20 (to match React 19 requirements)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and scripts first
COPY package*.json ./
COPY scripts/ ./scripts/

# Install dependencies with legacy peer deps flag
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the project
RUN npm run build

# Expose the port
EXPOSE 7777

# Start the application
CMD ["npm", "run", "dev"]