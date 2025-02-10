# Use a specific Node.js version to avoid unexpected updates
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock first (for better caching)
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["yarn", "start"]
