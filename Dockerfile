FROM node:20-alpine AS base

# Install bun
RUN apk add --no-cache curl unzip
RUN curl -fsSL https://bun.sh/install | bash

# Add bun to path
ENV PATH="/root/.bun/bin:${PATH}"

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Generate database schema and build the app
RUN bun run db:generate
RUN bun run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["bun", "start"] 