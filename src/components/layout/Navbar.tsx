
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedButton from '../ui-custom/AnimatedButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if the current route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        'fixed left-0 top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="container-padding mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-brand-red">DR</span>
            <span className="text-brand-green">EAM</span>
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden items-center space-x-8 md:flex">
          <Link 
            to="/" 
            className={cn(
              "nav-link", 
              isActive('/') && "after:scale-x-100"
            )}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={cn(
              "nav-link", 
              isActive('/products') && "after:scale-x-100"
            )}
          >
            Products
          </Link>
          <Link 
            to="/categories" 
            className={cn(
              "nav-link", 
              isActive('/categories') && "after:scale-x-100"
            )}
          >
            Categories
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "nav-link", 
              isActive('/about') && "after:scale-x-100"
            )}
          >
            About
          </Link>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden items-center space-x-4 md:flex">
          <button className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent">
            <Search size={20} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent">
            <Heart size={20} />
          </button>
          <Link to="/cart" className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent">
            <ShoppingBag size={20} />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-xs font-medium text-white">
              0
            </span>
          </Link>
          <Link to="/login">
            <AnimatedButton variant="outline" size="sm">
              <User size={16} className="mr-2" />
              Login
            </AnimatedButton>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Link to="/cart" className="relative mr-2 flex h-10 w-10 items-center justify-center">
            <ShoppingBag size={20} />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-xs font-medium text-white">
              0
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 transform bg-white pt-16 transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container-padding flex h-full flex-col">
          <nav className="flex flex-col space-y-6 py-8">
            <Link to="/" className="text-lg font-medium">
              Home
            </Link>
            <Link to="/products" className="text-lg font-medium">
              Products
            </Link>
            <Link to="/categories" className="text-lg font-medium">
              Categories
            </Link>
            <Link to="/about" className="text-lg font-medium">
              About
            </Link>
          </nav>
          
          <div className="mt-auto space-y-4 py-8">
            <Link to="/login" className="block">
              <AnimatedButton variant="primary" fullWidth>
                <User size={18} className="mr-2" />
                Login
              </AnimatedButton>
            </Link>
            <Link to="/register" className="block">
              <AnimatedButton variant="outline" fullWidth>
                Register
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
