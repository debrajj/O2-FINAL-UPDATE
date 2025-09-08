const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.DATABASE_URI;

const sampleProducts = [
  {
    name: "Premium Whey Protein Isolate",
    slug: "premium-whey-protein-isolate",
    image: "https://example.com/whey-protein.jpg",
    price: 2999,
    originalPrice: 3499,
    onSale: true,
    category: "SPORTS NUTRITION",
    subcategory: "Proteins",
    brand: "ON (OPTIMUM NUTRITION)",
    shopByGoal: "MUSCLE_GAIN",
    featured: true,
    description: "High-quality whey protein isolate for muscle building"
  },
  {
    name: "Fat Burner Capsules",
    slug: "fat-burner-capsules",
    image: "https://example.com/fat-burner.jpg",
    price: 1999,
    category: "SPORTS NUTRITION",
    subcategory: "Fat Burners",
    brand: "MUSCLETECH",
    shopByGoal: "WEIGHT_LOSS",
    trending: true,
    description: "Advanced fat burning formula for weight loss"
  },
  {
    name: "Pre-Workout Energy Booster",
    slug: "pre-workout-energy-booster",
    image: "https://example.com/pre-workout.jpg",
    price: 2499,
    category: "SPORTS NUTRITION",
    subcategory: "Pre/Post Workout",
    brand: "GAT",
    shopByGoal: "ENERGY_PERFORMANCE",
    bestSeller: true,
    description: "High-energy pre-workout supplement for enhanced performance"
  },
  {
    name: "Multivitamin Complex",
    slug: "multivitamin-complex",
    image: "https://example.com/multivitamin.jpg",
    price: 1499,
    category: "VITAMINS & SUPPLEMENTS",
    subcategory: "Multivitamins",
    brand: "GNC",
    shopByGoal: "HEALTH_WELLNESS",
    lovedByExperts: true,
    description: "Complete multivitamin for overall health and wellness"
  }
];

async function seedGoalProducts() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db();
    const collection = db.collection('products');
    
    // Insert sample products
    const result = await collection.insertMany(sampleProducts);
    console.log(`Inserted ${result.insertedCount} products with goals`);
    
  } catch (error) {
    console.error('Error seeding goal products:', error);
  } finally {
    await client.close();
  }
}

seedGoalProducts();