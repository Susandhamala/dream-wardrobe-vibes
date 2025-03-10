
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/lib/data';
import { ShoppingBag, Heart } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  className?: string;
}

const ProductCard = ({ product, onAddToCart, className }: ProductCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg bg-white transition-all duration-300',
        'hover:shadow-lg',
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        <img
          src={product.image}
          alt={product.name}
          className={cn(
            'h-full w-full object-cover transition-transform duration-700 ease-in-out',
            isHovering && 'scale-105'
          )}
        />
        <div className={cn(
          'absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300',
          isHovering && 'opacity-100'
        )}>
          <span className="text-white">View Details</span>
        </div>
        
        {product.new && (
          <div className="absolute left-4 top-4 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white">
            New
          </div>
        )}
        
        {product.featured && !product.new && (
          <div className="absolute left-4 top-4 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white">
            Featured
          </div>
        )}
        
        <button
          onClick={handleLike}
          className={cn(
            'absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-all duration-300',
            isLiked ? 'text-brand-red' : 'text-gray-400',
            'hover:text-brand-red'
          )}
        >
          <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
      </Link>
      
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
          <span className="font-medium text-brand-red">${product.price.toFixed(2)}</span>
        </div>
        <p className="mb-4 line-clamp-2 text-xs text-gray-500">{product.description}</p>
        
        <div className="mt-auto flex items-center justify-between">
          {product.rating && (
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating || 0)
                        ? 'text-yellow-400'
                        : i < product.rating
                        ? 'text-yellow-400/50'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1 text-xs text-gray-500">{product.rating}</span>
            </div>
          )}
          
          <AnimatedButton
            variant="primary"
            size="sm"
            onClick={handleAddToCart}
            className="ml-auto"
          >
            <ShoppingBag size={16} className="mr-2" />
            Add
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
