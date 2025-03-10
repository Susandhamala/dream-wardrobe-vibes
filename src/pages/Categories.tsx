
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedButton from '@/components/ui-custom/AnimatedButton';
import { categories } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

// Mock database query function that would be replaced with actual API call
const fetchCategories = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return categories;
};

const Categories = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container-padding flex-1 mx-auto flex items-center justify-center">
          <div className="text-2xl">Loading categories...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    console.error('Error fetching categories:', error);
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container-padding flex-1 mx-auto flex items-center justify-center">
          <div className="text-xl text-destructive">
            Failed to load categories. Please try again later.
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 mt-16">
        <section className="py-16 md:py-24">
          <div className="container-padding mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Categories</h1>
              <p className="mt-4 text-muted-foreground">Browse our premium clothing by category</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data?.filter(category => category.id !== 'all').map((category) => (
                <Link 
                  key={category.id} 
                  to={`/products?category=${category.id}`}
                  className="group"
                >
                  <div className="fade-in-section overflow-hidden rounded-lg bg-secondary/80 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h2 className="mb-4 text-2xl font-semibold">{category.name}</h2>
                    <p className="mb-6 text-muted-foreground">
                      Explore our exclusive {category.name.toLowerCase()} collection
                    </p>
                    <AnimatedButton variant="primary" size="sm">
                      Browse {category.name}
                      <ArrowRight size={16} className="ml-2" />
                    </AnimatedButton>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
