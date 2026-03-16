# Build stage
FROM node:22-slim AS builder

WORKDIR /app

# Accept build arguments for environment variables
ARG VITE_API_URL
ARG VITE_EDENAI_API_KEY
ARG VITE_CHAT_ID
ARG VITE_BOT_ID
ARG GENERATE_SOURCEMAP=FALSE

# Set environment variables for build
ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_EDENAI_API_KEY=${VITE_EDENAI_API_KEY}
ENV VITE_CHAT_ID=${VITE_CHAT_ID}
ENV VITE_BOT_ID=${VITE_BOT_ID}
ENV GENERATE_SOURCEMAP=${GENERATE_SOURCEMAP}

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy application code
COPY . .

# Build the application
RUN npm run build


# Production stage
FROM node:22-slim

WORKDIR /app

# Install a lightweight HTTP server to serve static files
RUN npm install -g serve

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start the server
CMD ["serve", "-s", "dist", "-l", "3000"]
