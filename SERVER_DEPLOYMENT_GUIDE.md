# Server Deployment Guide

## Optimizations Made

### Backend Optimizations
- ✅ **Next.js Standalone Output**: Optimized for production deployment
- ✅ **CORS Configuration**: Dynamic CORS based on environment
- ✅ **Security Headers**: Added security headers for production
- ✅ **Health Check Endpoint**: `/health` for monitoring
- ✅ **Graceful Shutdown**: Proper signal handling
- ✅ **Error Handling**: Improved error handling and logging
- ✅ **Environment Variables**: Proper env var management

### Frontend Optimizations
- ✅ **Build Optimization**: Terser minification, code splitting
- ✅ **Asset Optimization**: Optimized asset handling
- ✅ **API Configuration**: Dynamic API URLs based on environment
- ✅ **Nginx Configuration**: Optimized nginx config with caching

### Docker Optimizations
- ✅ **Multi-stage Builds**: Reduced image sizes
- ✅ **Alpine Linux**: Lightweight base images
- ✅ **Health Checks**: Container health monitoring
- ✅ **Security**: Non-root user execution

## Deployment Options

### Option 1: Docker Deployment (Recommended)

1. **Update Environment Variables**:
   ```bash
   # Update .env.production files with your domains
   cp backend/.env.production.example backend/.env.production
   cp frontend/.env.production.example frontend/.env.production
   ```

2. **Deploy with Docker**:
   ```bash
   ./deploy.sh
   ```

### Option 2: Manual Deployment

#### Backend Deployment
```bash
cd backend
npm install
npm run build:prod
npm run start:prod
```

#### Frontend Deployment
```bash
cd frontend
npm install
npm run build
# Serve with nginx or any static file server
```

### Option 3: Cloud Deployment

#### Vercel (Frontend)
```bash
cd frontend
vercel --prod
```

#### Railway/Render (Backend)
- Connect your GitHub repository
- Set environment variables from `.env.production`
- Deploy automatically

## Environment Variables

### Backend (.env.production)
```env
DATABASE_URI=your-mongodb-connection-string
PAYLOAD_SECRET=your-secure-secret-key
PORT=3001
NODE_ENV=production
HOST=0.0.0.0
FRONTEND_URL=https://your-frontend-domain.com
ADMIN_URL=https://your-backend-domain.com
```

### Frontend (.env.production)
```env
VITE_API_BASE_URL=https://your-backend-domain.com/api
VITE_BACKEND_URL=https://your-backend-domain.com
VITE_APP_NAME=O2 Nutrition
VITE_APP_VERSION=1.0.0
```

## Performance Optimizations

### Backend
- Standalone Next.js build (smaller footprint)
- MongoDB connection pooling
- Gzip compression
- Static asset caching
- Memory optimization flags

### Frontend
- Code splitting by vendor/router/UI
- Asset optimization and caching
- Terser minification
- Tree shaking
- Lazy loading

## Security Features

### Backend
- CORS protection
- Security headers (XSS, CSRF protection)
- Environment-based configurations
- Input validation
- Rate limiting ready

### Frontend
- Content Security Policy ready
- XSS protection
- Secure asset serving
- Environment variable protection

## Monitoring & Health Checks

- **Backend Health**: `GET /health`
- **Docker Health Checks**: Built-in container monitoring
- **Logging**: Structured logging for production
- **Error Tracking**: Ready for Sentry integration

## Scaling Considerations

### Horizontal Scaling
- Stateless backend design
- MongoDB Atlas for database scaling
- CDN for static assets
- Load balancer ready

### Vertical Scaling
- Memory optimization
- CPU optimization
- Database indexing
- Caching strategies

## Troubleshooting

### Common Issues

1. **Port Conflicts**:
   ```bash
   # Check what's running on ports
   lsof -i :3001 -i :80
   ```

2. **Environment Variables**:
   ```bash
   # Verify env vars are loaded
   docker-compose -f docker-compose.prod.yml config
   ```

3. **Database Connection**:
   ```bash
   # Test MongoDB connection
   curl -f http://localhost:3001/health
   ```

4. **CORS Issues**:
   - Update FRONTEND_URL in backend .env
   - Check browser network tab for CORS errors

### Logs
```bash
# View logs
docker-compose -f docker-compose.prod.yml logs -f

# View specific service logs
docker-compose -f docker-compose.prod.yml logs -f backend
docker-compose -f docker-compose.prod.yml logs -f frontend
```

## Next Steps

1. **Domain Setup**: Point your domains to the server
2. **SSL Certificate**: Set up HTTPS with Let's Encrypt
3. **Monitoring**: Add monitoring tools (Grafana, Prometheus)
4. **Backup**: Set up automated database backups
5. **CI/CD**: Set up automated deployments

## Support

For issues or questions:
1. Check logs first
2. Verify environment variables
3. Test health endpoints
4. Check network connectivity