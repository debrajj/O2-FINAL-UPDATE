# E-Commerce Project Structure

## Overview
Full-stack e-commerce application with separated frontend (React + Vite) and backend (Next.js + Payload CMS).

## Root Structure
```
O2-FINAL-UPDATE-main/
├── backend/                    # Next.js + Payload CMS backend
├── frontend/                   # React + Vite + Tailwind frontend
├── package.json               # Monorepo configuration
├── README.md                  # Project documentation
├── deploy.sh                  # Production deployment script
├── docker-compose.prod.yml    # Production Docker configuration
└── vercel.json               # Vercel deployment config
```

## Backend Structure (`/backend/`)
```
backend/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (payload)/         # Payload CMS routes
│   │   │   ├── admin/         # Admin panel
│   │   │   └── api/           # API endpoints
│   │   └── media/             # Media file serving
│   ├── collections/           # Payload collections
│   │   ├── products/          # Product collection
│   │   ├── category/          # Category collection
│   │   ├── brands/            # Brands collection
│   │   ├── orders/            # Orders collection
│   │   ├── coupons/           # Coupons collection
│   │   ├── hero-banner/       # Hero banners
│   │   ├── announcements/     # Announcements
│   │   ├── subscribers/       # Newsletter subscribers
│   │   ├── Media.ts           # Media/file uploads
│   │   └── Users.ts           # User authentication
│   ├── components/            # Custom Payload components
│   │   └── fields/            # Custom field components
│   └── lib/                   # Utilities and helpers
├── media/                     # Uploaded media files
├── .env                       # Environment variables
├── package.json               # Backend dependencies
├── next.config.mjs            # Next.js configuration
├── payload.config.ts          # Payload CMS configuration
└── tailwind.config.ts         # Tailwind CSS config
```

## Frontend Structure (`/frontend/`)
```
frontend/
├── src/
│   ├── components/            # React components
│   │   ├── Layout/            # Layout components
│   │   │   ├── Header.tsx     # Navigation header
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   └── MegaMenu.tsx   # Mega menu navigation
│   │   ├── ui/                # Shadcn/ui components
│   │   └── ProductImageGallery.tsx  # Product image display
│   ├── pages/                 # Page components
│   │   ├── Index.tsx          # Homepage
│   │   ├── ProductDetail.tsx  # Product details page
│   │   ├── ProductsPage.tsx   # Products listing
│   │   ├── Cart.tsx           # Shopping cart
│   │   ├── Checkout.tsx       # Checkout process
│   │   └── Dashboard.tsx      # User dashboard
│   ├── context/               # React contexts
│   │   ├── CartContext.tsx    # Shopping cart state
│   │   └── AuthContext.tsx    # Authentication state
│   ├── hooks/                 # Custom React hooks
│   │   ├── useApiData.ts      # API data fetching
│   │   ├── useCart.ts         # Cart management
│   │   └── useWishlist.ts     # Wishlist functionality
│   ├── services/              # API services
│   │   ├── api.ts             # Main API service
│   │   ├── orderService.ts    # Order management
│   │   └── couponService.ts   # Coupon validation
│   ├── data/                  # Static data files
│   └── assets/                # Static assets
├── public/                    # Public static files
├── package.json               # Frontend dependencies
├── vite.config.ts             # Vite configuration
└── tailwind.config.ts         # Tailwind CSS config
```

## Key Features

### Backend (Payload CMS)
- **Product Management**: Upload/URL images (1 main + 10 additional)
- **Category System**: Hierarchical categories with subcategories
- **Brand Management**: Brand collection with filtering
- **Order System**: Complete order management with tracking
- **Coupon System**: Discount codes and promotions
- **User Authentication**: Admin and customer accounts
- **Media Management**: File uploads with automatic URL generation
- **API Endpoints**: RESTful API for frontend consumption

### Frontend (React)
- **Product Catalog**: Grid/list view with filtering
- **Product Details**: Image gallery with thumbnails
- **Shopping Cart**: Add/remove items with quantity
- **Checkout Process**: Multi-step checkout with validation
- **User Dashboard**: Order history and account management
- **Responsive Design**: Mobile-first responsive layout
- **Search & Filter**: Product search with category filters

## API Endpoints

### Products
- `GET /api/products` - List all products
- `GET /api/products/{id}` - Get single product
- `POST /api/products` - Create product (admin)

### Categories
- `GET /api/category` - List categories
- `GET /api/category/{id}` - Get single category

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/track/{id}` - Track order

### Media
- `GET /media/{filename}` - Serve uploaded files

## Development Setup

### Prerequisites
- Node.js 18+
- MongoDB (local or cloud)
- pnpm/npm

### Environment Variables
```env
# Backend (.env)
DATABASE_URI=mongodb://localhost:27017/ecommerce
PAYLOAD_SECRET=your-secret-key
PORT=3001

# Frontend (.env)
VITE_API_BASE_URL=http://localhost:3001/api
```

### Start Development
```bash
# Install dependencies
npm install

# Start both servers
npm run dev

# Or individually
npm run dev:backend   # Port 3001
npm run dev:frontend  # Port 8080
```

## Deployment

### Production Build
```bash
npm run build
```

### Docker Deployment
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Manual Deployment
```bash
./deploy.sh
```

## Technology Stack

### Backend
- **Next.js 15** - React framework
- **Payload CMS 3** - Headless CMS
- **MongoDB** - Database
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **React Router** - Navigation

## File Organization

### Collections (Backend)
- Products: Main product catalog with images, variants, pricing
- Categories: Hierarchical category system
- Orders: Order management with status tracking
- Users: Authentication and user management
- Media: File upload and management

### Components (Frontend)
- Layout: Header, footer, navigation
- Product: Product cards, details, gallery
- Cart: Shopping cart and checkout
- UI: Reusable UI components

### Services
- API: Backend communication
- Auth: Authentication handling
- Cart: Shopping cart logic
- Orders: Order processing

This structure provides a scalable, maintainable e-commerce platform with clear separation of concerns and modern development practices.