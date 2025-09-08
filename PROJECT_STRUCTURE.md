# O2 E-Commerce Project Structure

## Overview
A full-stack e-commerce application with separated frontend and backend architecture using modern web technologies.

## Project Architecture

```
O2-FINAL-UPDATE/
├── backend/                    # Next.js + Payload CMS backend
├── frontend/                   # React + Vite + Tailwind CSS frontend
├── deployment files           # Docker, deployment scripts
└── documentation             # Setup guides and documentation
```

## Technology Stack

### Backend
- **Framework**: Next.js 15.3.2
- **CMS**: Payload CMS 3.49.0
- **Database**: MongoDB (via @payloadcms/db-mongodb)
- **Authentication**: JWT with custom auth
- **Language**: TypeScript
- **Package Manager**: pnpm

### Frontend
- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.11
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: React Context + TanStack Query
- **Routing**: React Router DOM 6.26.2
- **Language**: TypeScript

## Complete Folder Structure

```
O2-FINAL-UPDATE/
├── backend/
│   ├── .next/                    # Next.js build output
│   ├── media/                    # Uploaded media files
│   ├── public/
│   │   ├── favicon.ico
│   │   └── og-image.jpg
│   ├── src/
│   │   ├── app/
│   │   │   ├── (frontend)/
│   │   │   │   ├── globals.css
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── styles.css
│   │   │   ├── (payload)/
│   │   │   │   ├── admin/
│   │   │   │   │   └── [[...segments]]/
│   │   │   │   │       ├── not-found.tsx
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── api/
│   │   │   │   │   ├── [...slug]/
│   │   │   │   │   │   └── route.ts
│   │   │   │   │   ├── auth/
│   │   │   │   │   │   ├── login/route.ts
│   │   │   │   │   │   ├── logout/route.ts
│   │   │   │   │   │   ├── me/route.ts
│   │   │   │   │   │   └── signup/route.ts
│   │   │   │   │   ├── brands/route.ts
│   │   │   │   │   ├── categories/
│   │   │   │   │   │   ├── [id]/route.ts
│   │   │   │   │   │   ├── seed/route.ts
│   │   │   │   │   │   └── route.ts
│   │   │   │   │   ├── graphql/route.ts
│   │   │   │   │   ├── products/
│   │   │   │   │   │   └── slug/[slug]/route.ts
│   │   │   │   │   ├── products-custom/route.ts
│   │   │   │   │   ├── test/route.ts
│   │   │   │   │   └── user/profile/route.ts
│   │   │   │   ├── custom.scss
│   │   │   │   └── layout.tsx
│   │   │   ├── api/
│   │   │   │   ├── coupons/
│   │   │   │   │   ├── available/route.ts
│   │   │   │   │   ├── create/route.ts
│   │   │   │   │   └── validate/route.ts
│   │   │   │   ├── gift-cards/
│   │   │   │   │   ├── generate/route.ts
│   │   │   │   │   ├── redeem/route.ts
│   │   │   │   │   └── validate/route.ts
│   │   │   │   ├── orders/
│   │   │   │   │   ├── create/
│   │   │   │   │   ├── track/route.ts
│   │   │   │   │   ├── verify-payment/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── payment-success/route.ts
│   │   │   │   ├── sales-analytics/
│   │   │   │   └── subscribers/route.ts
│   │   │   └── my-route/route.ts
│   │   ├── collections/
│   │   │   ├── announcements/index.ts
│   │   │   ├── brands/index.ts
│   │   │   ├── category/index.ts
│   │   │   ├── coupons/index.ts
│   │   │   ├── hero-banner/index.ts
│   │   │   ├── orders/index.ts
│   │   │   ├── products/index.ts
│   │   │   ├── subscribers/index.ts
│   │   │   ├── Media.ts
│   │   │   └── Users.ts
│   │   ├── components/
│   │   │   ├── AnalyticsDashboard.tsx
│   │   │   ├── BeforeLogin.tsx
│   │   │   ├── OrderView.tsx
│   │   │   ├── PrintableOrder.tsx
│   │   │   └── SalesAnalytics.tsx
│   │   ├── lib/
│   │   │   ├── Globals/Slug.ts
│   │   │   ├── hooks/CustomSlugField.tsx
│   │   │   ├── auth.ts
│   │   │   ├── jwt.ts
│   │   │   ├── payload.ts
│   │   │   └── utils.ts
│   │   ├── middleware.ts
│   │   ├── payload-types.ts
│   │   ├── payload.config.ts
│   │   ├── seed-categories-mega.ts
│   │   ├── seed-coupons.ts
│   │   ├── seed-full.ts
│   │   ├── seed-hero-banner.ts
│   │   ├── seed-homeproduct.ts
│   │   ├── seed-simple.ts
│   │   ├── seed.ts
│   │   └── server.ts
│   ├── tests/
│   │   ├── e2e/frontend.e2e.spec.ts
│   │   └── int/api.int.spec.ts
│   ├── .env
│   ├── .env.example
│   ├── .env.production
│   ├── .gitignore
│   ├── .npmrc
│   ├── .prettierrc.json
│   ├── .yarnrc
│   ├── components.json
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.mjs
│   ├── package.json
│   ├── payload.config.ts
│   ├── playwright.config.ts
│   ├── pnpm-lock.yaml
│   ├── README.md
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   ├── vitest.config.mts
│   ├── vitest.setup.ts
│   └── [various seed/utility scripts]
├── frontend/
│   ├── public/
│   │   ├── placeholder.svg
│   │   └── robots.txt
│   ├── src/
│   │   ├── assets/
│   │   │   ├── Banners/
│   │   │   │   ├── Desktop/
│   │   │   │   │   ├── 1 - DEsktop.png
│   │   │   │   │   ├── 2 - DESKTOP.png
│   │   │   │   │   └── 3 - Desktop.png
│   │   │   │   └── Phone/
│   │   │   │       ├── 1 - Mobile Banner.png
│   │   │   │       ├── 3 - Mobile.png
│   │   │   │       └── Banners 2 - Mobile.png
│   │   │   ├── fonts/
│   │   │   │   ├── helvetica-neue/
│   │   │   │   │   └── [font files]
│   │   │   │   └── fonts.css
│   │   │   ├── shopbygoalimages/
│   │   │   │   ├── BUILDMUSCLE.png
│   │   │   │   ├── IMPROVEENDURANCE.png
│   │   │   │   ├── LOSEWEIGHT.png
│   │   │   │   └── WELLNESS.png
│   │   │   ├── favicon.svg
│   │   │   ├── logo.svg
│   │   │   ├── O2logo.png
│   │   │   └── [other assets]
│   │   ├── components/
│   │   │   ├── Layout/
│   │   │   │   ├── AnnouncementBar.tsx
│   │   │   │   ├── BrandsMegaMenu.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── JsonMegaMenu.tsx
│   │   │   │   └── MegaMenu.tsx
│   │   │   ├── ui/
│   │   │   │   ├── accordion.tsx
│   │   │   │   ├── alert-dialog.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   └── [40+ UI components]
│   │   │   ├── ApiDebug.tsx
│   │   │   ├── BuyItWith.tsx
│   │   │   ├── CartSidebarUpsells.tsx
│   │   │   ├── CartUpsells.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── GiftCardGenerator.tsx
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── PaymentSuccess.tsx
│   │   │   ├── ProductsFromAPI.tsx
│   │   │   ├── ShopByGoal.tsx
│   │   │   ├── SubscribeCTA.tsx
│   │   │   ├── UpsellOffer.tsx
│   │   │   └── WhatsAppFloat.tsx
│   │   ├── context/
│   │   │   ├── AuthContext.tsx
│   │   │   ├── CartContext.tsx
│   │   │   └── GiftCardContext.tsx
│   │   ├── data/
│   │   │   ├── bestseller_mega.tsx
│   │   │   ├── brands_mega.tsx
│   │   │   ├── brands.json
│   │   │   ├── categories.json
│   │   │   ├── giftcards.json
│   │   │   ├── homeproduct.json
│   │   │   └── products.ts
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   ├── use-toast.ts
│   │   │   ├── useApiData.ts
│   │   │   ├── useCategories.ts
│   │   │   ├── useCheckout.ts
│   │   │   ├── useUpsells.ts
│   │   │   └── useWishlist.ts
│   │   ├── lib/
│   │   │   ├── functions.ts
│   │   │   ├── performance.ts
│   │   │   ├── testConnection.ts
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── About.tsx
│   │   │   ├── ApiProducts.tsx
│   │   │   ├── BrandPage.tsx
│   │   │   ├── BrandsPage.tsx
│   │   │   ├── Cart.tsx
│   │   │   ├── Category.tsx
│   │   │   ├── CategoryPage.tsx
│   │   │   ├── Checkout.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── GiftCard.tsx
│   │   │   ├── Index.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── NotFound.tsx
│   │   │   ├── Offers.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── ProductsPage.tsx
│   │   │   ├── Signup.tsx
│   │   │   ├── ThankYou.tsx
│   │   │   └── TrackOrder.tsx
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   ├── categoryService.ts
│   │   │   ├── couponService.ts
│   │   │   ├── giftCardService.ts
│   │   │   ├── mockApi.ts
│   │   │   └── orderService.ts
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── .env
│   ├── .env.production
│   ├── .gitignore
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── vite.config.ts
├── .gitignore
├── deploy-guide.md
├── deploy.sh
├── docker-compose.prod.yml
├── Dockerfile.backend
├── Dockerfile.frontend
├── JSON_DATA_GUIDE.md
├── MEGA_MENU_SETUP.md
├── ORDER_MANAGEMENT_SETUP.md
├── package.json
├── README.md
├── SERVER_DEPLOYMENT_GUIDE.md
├── setup-categories.sh
├── start-backend.sh
├── TEMPLATE_homeproduct.json
├── test-api.js
└── vercel.json
```

## Detailed Structure

### Backend (`/backend/`)

#### Core Application
```
src/
├── app/                       # Next.js App Router
│   ├── (frontend)/           # Frontend routes
│   ├── (payload)/            # Payload CMS routes
│   └── api/                  # Custom API endpoints
├── collections/              # Payload CMS collections
├── components/               # React components for admin
├── lib/                      # Utilities and configurations
└── server.ts                 # Server entry point
```

#### Collections (Data Models)
- **Users**: Authentication and user management
- **Products**: Product catalog with variants and pricing
- **Categories**: Product categorization
- **Brands**: Brand management
- **Orders**: Order processing and tracking
- **Media**: File uploads and media management
- **Coupons**: Discount and coupon system
- **Subscribers**: Newsletter subscriptions
- **Hero Banner**: Homepage banner management
- **Announcements**: Site-wide announcements

#### API Endpoints
```
api/
├── auth/                     # Authentication endpoints
├── brands/                   # Brand management
├── categories/               # Category operations
├── products/                 # Product operations
├── orders/                   # Order management
├── coupons/                  # Coupon system
├── gift-cards/               # Gift card functionality
└── subscribers/              # Newsletter management
```

#### Key Features
- **Authentication**: JWT-based auth with login/logout/signup
- **Order Management**: Complete order lifecycle with tracking
- **Payment Integration**: Payment processing and verification
- **Analytics**: Sales analytics and reporting
- **Seeding Scripts**: Data population utilities
- **Testing**: E2E and integration tests

### Frontend (`/frontend/`)

#### Application Structure
```
src/
├── components/               # Reusable UI components
│   ├── Layout/              # Header, Footer, Navigation
│   └── ui/                  # shadcn/ui components
├── pages/                   # Route components
├── context/                 # React Context providers
├── hooks/                   # Custom React hooks
├── services/                # API service layer
├── lib/                     # Utilities and helpers
├── assets/                  # Static assets
└── data/                    # Static data files
```

#### Key Pages
- **Index**: Homepage with hero banner and featured products
- **ProductDetail**: Individual product pages with variants
- **Category/Brand**: Product listing pages
- **Cart/Checkout**: Shopping cart and checkout flow
- **Dashboard**: User account management
- **Auth**: Login/Signup pages

#### Features
- **Shopping Cart**: Persistent cart with upsells
- **Product Catalog**: Advanced filtering and search
- **User Authentication**: Account management
- **Order Tracking**: Real-time order status
- **Gift Cards**: Gift card purchase and redemption
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized loading and caching

## Environment Configuration

### Backend Environment Variables
```
DATABASE_URI=mongodb+srv://...
PAYLOAD_SECRET=your-secret-key
PORT=3001
```

### Frontend Environment Variables
```
VITE_API_URL=http://localhost:3001
VITE_FRONTEND_URL=http://localhost:5173
```

## Development Workflow

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- MongoDB (local or cloud)

### Quick Start
```bash
# Install dependencies
npm install

# Start both frontend and backend
npm run dev

# Or start individually
npm run dev:backend    # Backend on :3001
npm run dev:frontend   # Frontend on :5173
```

### Build & Deployment
```bash
# Build both applications
npm run build

# Production build
npm run build:prod
```

## Data Management

### Seeding Scripts
- `seed-simple.ts`: Basic data seeding
- `seed-full.ts`: Complete data population
- `seed-categories-mega.ts`: Category structure
- `seed-homeproduct.ts`: Homepage products

### Data Files
- Product catalogs with variants and pricing
- Category hierarchies and mega menu structure
- Brand information and logos
- Gift card templates

## Testing

### Backend Testing
- **E2E Tests**: Playwright for end-to-end testing
- **Integration Tests**: Vitest for API testing
- **Test Coverage**: Comprehensive test suite

### Frontend Testing
- **Component Testing**: React Testing Library
- **E2E Testing**: Playwright integration

## Deployment

### Docker Support
- Multi-stage Docker builds
- Production-ready containers
- Docker Compose for local development

### Deployment Options
- **Vercel**: Frontend deployment
- **Railway/Heroku**: Backend deployment
- **Self-hosted**: Complete Docker setup

## Performance Optimizations

### Backend
- MongoDB indexing and optimization
- Payload CMS caching
- Image optimization with Sharp
- API response caching

### Frontend
- Vite build optimization
- Code splitting and lazy loading
- Image optimization
- Bundle analysis tools

## Security Features

### Backend
- JWT authentication
- CORS configuration
- Input validation
- Secure file uploads

### Frontend
- XSS protection
- Secure API communication
- Authentication state management
- Form validation

## Monitoring & Analytics

- Real-time order statistics
- Sales analytics dashboard
- Performance monitoring
- Error tracking and logging

## Documentation Files

- `README.md`: Main project documentation
- `deploy-guide.md`: Deployment instructions
- `JSON_DATA_GUIDE.md`: Data structure guide
- `MEGA_MENU_SETUP.md`: Navigation setup
- `ORDER_MANAGEMENT_SETUP.md`: Order system guide
- `SERVER_DEPLOYMENT_GUIDE.md`: Server deployment

This structure provides a scalable, maintainable e-commerce platform with modern development practices and comprehensive feature set.