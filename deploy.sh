#!/bin/bash

# Production deployment script
set -e

echo "🚀 Starting production deployment..."

# Load environment variables
if [ -f .env.production ]; then
    export $(cat .env.production | xargs)
fi

# Build and start services
echo "📦 Building and starting services..."
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml build --no-cache
docker-compose -f docker-compose.prod.yml up -d

# Wait for services to be healthy
echo "⏳ Waiting for services to be healthy..."
sleep 30

# Check health
echo "🔍 Checking service health..."
docker-compose -f docker-compose.prod.yml ps

# Test endpoints
echo "🧪 Testing endpoints..."
curl -f http://localhost:3001/health || echo "❌ Backend health check failed"
curl -f http://localhost:80 || echo "❌ Frontend health check failed"

echo "✅ Deployment completed!"
echo "🌐 Frontend: http://localhost:80"
echo "🔧 Backend: http://localhost:3001"
echo "👨‍💼 Admin: http://localhost:3001/admin"