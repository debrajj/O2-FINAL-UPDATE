#!/bin/bash

echo "Setting up categories in the backend..."

# Navigate to backend directory
cd backend

# Run the category seeding script
echo "Seeding categories..."
node seed-categories.js

echo "Categories setup complete!"