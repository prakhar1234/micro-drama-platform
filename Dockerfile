# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY frontend/package*.json ./frontend/
COPY backend/package*.json ./backend/
RUN npm install --production=false
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY backend/package*.json ./backend/
RUN npm install --workspace=backend --production
COPY backend/ ./backend/
COPY --from=builder /app/frontend/dist ./frontend/dist

ENV NODE_ENV=production
ENV PORT=10000
EXPOSE 10000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD wget -qO- http://localhost:10000/api/health || exit 1

CMD ["node", "backend/src/server.js"]
