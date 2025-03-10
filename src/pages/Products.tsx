
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui-custom/ProductCard';
import AnimatedButton from '@/components/ui-custom/AnimatedButton';
import { useCart } from '@/context/CartContext';
import { products, categories } from '@/lib/data';
import { Filter, X, ChevronDown } from 'lucide-react';

const Products = () => {
  const { addItem } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Apply filters and sorting
    let result = [...products];
    
    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Price range filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }
    
    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Default sorting (newest first, featured items first)
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (a.new && !b.new) return -1;
          if (!a.new && b.new) return 1;
          return 0;
        });
    }
    
    setFilteredProducts(result);
  }, [activeCategory, priceRange, sortBy, searchQuery]);

  const handlePriceChange = (minOrMax: 'min' | 'max', value: number) => {
    if (minOrMax === 'min') {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  const resetFilters = () => {
    setActiveCategory('all');
    setPriceRange([0, 500]);
    setSortBy('default');
    setSearchQuery('');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="mt-16 flex-1">
        <div className="container-padding mx-auto py-8">
          <div className="mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
              <p className="mt-2 text-muted-foreground">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <AnimatedButton 
                variant="outline" 
                size="sm" 
                className="md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={16} className="mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </AnimatedButton>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="w-full appearance-none rounded-md border border-input bg-background px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="default">Sort by: Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                  <option value="rating">Rating</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Filters - Desktop */}
            <div className="hidden md:block">
              <div className="sticky top-24 rounded-lg border border-border bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <button
                    onClick={resetFilters}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Reset All
                  </button>
                </div>
                
                {/* Search */}
                <div className="mb-6">
                  <h3 className="mb-3 text-sm font-medium">Search</h3>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="mb-3 text-sm font-medium">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                          activeCategory === category.id
                            ? 'bg-brand-red/10 text-brand-red'
                            : 'hover:bg-accent'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <h3 className="mb-3 text-sm font-medium">Price Range</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <input
                        type="number"
                        min="0"
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={e => handlePriceChange('min', Number(e.target.value))}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                      <span>to</span>
                      <input
                        type="number"
                        min={priceRange[0]}
                        max="1000"
                        value={priceRange[1]}
                        onChange={e => handlePriceChange('max', Number(e.target.value))}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">${priceRange[0]}</span>
                      <span className="text-sm text-muted-foreground">${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Filters - Mobile */}
            {showFilters && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:hidden">
                <div className="max-h-[80vh] w-full max-w-md overflow-auto rounded-lg bg-white p-6 shadow-lg">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-medium">Filters</h2>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="rounded-full p-1 hover:bg-accent"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  {/* Search */}
                  <div className="mb-6">
                    <h3 className="mb-3 text-sm font-medium">Search</h3>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  
                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="mb-3 text-sm font-medium">Categories</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                            activeCategory === category.id
                              ? 'bg-brand-red/10 text-brand-red'
                              : 'hover:bg-accent'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="mb-3 text-sm font-medium">Price Range</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <input
                          type="number"
                          min="0"
                          max={priceRange[1]}
                          value={priceRange[0]}
                          onChange={e => handlePriceChange('min', Number(e.target.value))}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                        <span>to</span>
                        <input
                          type="number"
                          min={priceRange[0]}
                          max="1000"
                          value={priceRange[1]}
                          onChange={e => handlePriceChange('max', Number(e.target.value))}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">${priceRange[0]}</span>
                        <span className="text-sm text-muted-foreground">${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <AnimatedButton variant="outline" onClick={resetFilters} className="flex-1">
                      Reset All
                    </AnimatedButton>
                    <AnimatedButton 
                      variant="primary" 
                      onClick={() => setShowFilters(false)} 
                      className="flex-1"
                    >
                      Apply Filters
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            )}
            
            {/* Products Grid */}
            <div className="col-span-1 md:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="fade-in-section animate-fade-in">
                      <ProductCard 
                        product={product}
                        onAddToCart={(product) => addItem(product)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-white p-12 text-center">
                  <h3 className="mb-2 text-lg font-medium">No products found</h3>
                  <p className="mb-6 text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                  <AnimatedButton variant="outline" onClick={resetFilters}>
                    Reset Filters
                  </AnimatedButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
