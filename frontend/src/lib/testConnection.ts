import { categoryApi, productApi } from '@/services/api';

export const testBackendConnection = async () => {
  try {
    console.log('Testing backend connection...');
    
    // Test categories endpoint
    const categoriesResponse = await categoryApi.getCategories();
    console.log('Categories response:', categoriesResponse);
    
    // Test products endpoint
    const productsResponse = await productApi.getProducts({ limit: 5 });
    console.log('Products response:', productsResponse);
    
    return {
      success: true,
      categories: categoriesResponse.data.length,
      products: productsResponse.data.length
    };
  } catch (error) {
    console.error('Backend connection test failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};