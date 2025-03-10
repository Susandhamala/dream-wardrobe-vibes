
import { Product, categories, products } from '@/lib/data';

// This is a mock database service that simulates API calls
// In a real application, this would connect to a backend API

export const dbService = {
  // Products related queries
  products: {
    getAll: async (): Promise<Product[]> => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return products;
    },
    
    getById: async (id: string): Promise<Product | undefined> => {
      await new Promise(resolve => setTimeout(resolve, 300));
      return products.find(product => product.id === id);
    },
    
    getByCategory: async (categoryId: string): Promise<Product[]> => {
      await new Promise(resolve => setTimeout(resolve, 500));
      if (categoryId === 'all') return products;
      return products.filter(product => product.category === categoryId);
    },
    
    getFeatured: async (): Promise<Product[]> => {
      await new Promise(resolve => setTimeout(resolve, 400));
      return products.filter(product => product.featured);
    },
    
    getNew: async (): Promise<Product[]> => {
      await new Promise(resolve => setTimeout(resolve, 400));
      return products.filter(product => product.new);
    },
    
    search: async (query: string): Promise<Product[]> => {
      await new Promise(resolve => setTimeout(resolve, 600));
      const lowercaseQuery = query.toLowerCase();
      return products.filter(
        product => 
          product.name.toLowerCase().includes(lowercaseQuery) || 
          product.description.toLowerCase().includes(lowercaseQuery)
      );
    }
  },
  
  // Categories related queries
  categories: {
    getAll: async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      return categories;
    }
  },
  
  // User related queries (auth would be handled separately in a real app)
  users: {
    login: async (email: string, password: string) => {
      await new Promise(resolve => setTimeout(resolve, 800));
      // This is a mock authentication - in a real app you would call your API
      if (email === 'user@example.com' && password === 'password') {
        return { success: true, user: { id: '1', name: 'Test User', email } };
      }
      throw new Error('Invalid credentials');
    },
    
    register: async (name: string, email: string, password: string) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Mock registration - in a real app you would call your API
      return { success: true, user: { id: '2', name, email } };
    }
  }
};
