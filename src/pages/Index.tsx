
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui-custom/ProductCard';
import AnimatedButton from '@/components/ui-custom/AnimatedButton';
import { useCart } from '@/context/CartContext';
import { products } from '@/lib/data';
import { ArrowRight, TrendingUp, Award, Truck } from 'lucide-react';

const Index = () => {
  const { addItem } = useCart();
  const featuredRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuredProducts = products.filter(product => product.featured);
  const newProducts = products.filter(product => product.new);

  // Improved Intersection Observer for animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class only when element is visible
          entry.target.classList.add('animate-fade-in');
          // Don't unobserve hero section elements to allow re-animation when returning to view
          if (!entry.target.classList.contains('hero-element')) {
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => {
      // Start with opacity 0 but no animation yet
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative mt-16 flex min-h-[90vh] flex-col justify-center overflow-hidden bg-gradient-to-br from-white to-secondary/50">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')] bg-cover bg-center bg-no-repeat"></div>
        
        <div className="container-padding relative mx-auto flex flex-col items-center justify-center text-center">
          <div className="hero-element fade-in-section inline-block rounded-full bg-brand-red/10 px-4 py-1.5 text-sm font-medium text-brand-red">
            Premium Quality
          </div>
          
          <h1 className="hero-element fade-in-section mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl" style={{ transitionDelay: '100ms' }}>
            Elevate Your Style <br /> With <span className="text-brand-red">DREAM</span>
          </h1>
          
          <p className="hero-element fade-in-section mt-6 max-w-lg text-muted-foreground md:text-lg" style={{ transitionDelay: '200ms' }}>
            Discover our premium collection of clothing designed for those who appreciate elegance and sophistication.
          </p>
          
          <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link to="/products">
              <AnimatedButton variant="primary" size="lg" className="hero-element fade-in-section" style={{ transitionDelay: '300ms' }}>
                Shop Now
                <ArrowRight size={16} className="ml-2" />
              </AnimatedButton>
            </Link>
            <Link to="/categories">
              <AnimatedButton variant="outline" size="lg" className="hero-element fade-in-section" style={{ transitionDelay: '400ms' }}>
                Explore Categories
              </AnimatedButton>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce rounded-full bg-white p-2 shadow-lg">
            <ArrowRight size={24} className="rotate-90 text-brand-red" />
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section ref={featuredRef} className="py-16 md:py-24">
        <div className="container-padding mx-auto">
          <div className="mb-12 text-center fade-in-section">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Collection</h2>
            <p className="mt-4 text-muted-foreground">Discover our most popular premium pieces</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="fade-in-section" style={{ transitionDelay: `${index * 100}ms` }}>
                <ProductCard 
                  product={product}
                  onAddToCart={(product) => addItem(product)}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center fade-in-section">
            <Link to="/products">
              <AnimatedButton variant="secondary">
                View All Products
                <ArrowRight size={16} className="ml-2" />
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Collection Banner */}
      <section className="fade-in-section bg-gradient-to-r from-brand-red/90 to-brand-red py-16 text-white md:py-24">
        <div className="container-padding mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">New Season Collection</h2>
            <p className="max-w-2xl text-white/80">
              Our latest collection features premium designs crafted from the finest materials,
              offering unparalleled comfort and style for the modern individual.
            </p>
            <Link to="/products">
              <AnimatedButton 
                variant="outline" 
                className="mt-6 border-white bg-transparent text-white hover:bg-white/10"
              >
                Explore Collection
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="fade-in-section py-16 md:py-24">
        <div className="container-padding mx-auto">
          <div className="mb-12 text-center fade-in-section">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">New Arrivals</h2>
            <p className="mt-4 text-muted-foreground">The latest additions to our premium collection</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newProducts.map((product, index) => (
              <div key={product.id} className="fade-in-section" style={{ transitionDelay: `${index * 100}ms` }}>
                <ProductCard 
                  product={product}
                  onAddToCart={(product) => addItem(product)}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center fade-in-section">
            <Link to="/products">
              <AnimatedButton variant="secondary">
                View All New Arrivals
                <ArrowRight size={16} className="ml-2" />
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="fade-in-section bg-secondary/50 py-16 md:py-24">
        <div className="container-padding mx-auto">
          <div className="mb-12 text-center fade-in-section">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose DREAM?</h2>
            <p className="mt-4 text-muted-foreground">We're committed to quality, sustainability, and exceptional service</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Award size={24} />,
                title: "Premium Quality",
                description: "We use only the finest materials sourced from sustainable suppliers to create garments that look and feel exceptional.",
                color: "bg-brand-red/10 text-brand-red"
              },
              {
                icon: <Truck size={24} />,
                title: "Fast Delivery",
                description: "Enjoy free shipping on all orders over $100, with express delivery options available for those who can't wait.",
                color: "bg-brand-green/10 text-brand-green"
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Latest Trends",
                description: "Our designers stay ahead of global fashion trends to bring you pieces that are both timeless and contemporary.",
                color: "bg-brand-red/10 text-brand-red"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="fade-in-section rounded-lg bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-medium">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Preview */}
      <section ref={aboutRef} className="fade-in-section py-16 md:py-24">
        <div className="container-padding mx-auto">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 fade-in-section">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Story</h2>
              <p className="mt-6 text-muted-foreground">
                DREAM was born from a passion for quality and design. Founded in 2020, our mission
                is to create premium clothing that combines exceptional craftsmanship with contemporary style.
              </p>
              <p className="mt-4 text-muted-foreground">
                We believe that everyone deserves to experience the confidence that comes with wearing truly
                premium clothing, which is why we're committed to making luxury accessible.
              </p>
              <Link to="/about">
                <AnimatedButton variant="outline" className="mt-8">
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </AnimatedButton>
              </Link>
            </div>
            <div className="flex-1 fade-in-section" style={{ transitionDelay: '100ms' }}>
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="About DREAM" 
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="fade-in-section bg-brand-green py-16 text-white md:py-24">
        <div className="container-padding mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join the DREAM Community</h2>
            <p className="max-w-2xl text-white/90">
              Subscribe to our newsletter to receive exclusive offers, early access to new collections,
              and style inspiration delivered straight to your inbox.
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-md border-none px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <AnimatedButton 
                variant="outline" 
                className="border-white bg-transparent text-white hover:bg-white/10"
              >
                Subscribe
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
