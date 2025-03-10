
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const AnimatedButton = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  fullWidth = false,
  ...props
}: AnimatedButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-brand-red text-white hover:bg-brand-red/90 focus-visible:ring-brand-red';
      case 'secondary':
        return 'bg-brand-green text-white hover:bg-brand-green/90 focus-visible:ring-brand-green';
      case 'outline':
        return 'border border-input bg-background hover:bg-accent hover:text-accent-foreground';
      default:
        return 'bg-brand-red text-white hover:bg-brand-red/90 focus-visible:ring-brand-red';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-xs';
      case 'md':
        return 'px-6 py-3 text-sm';
      case 'lg':
        return 'px-8 py-4 text-base';
      default:
        return 'px-6 py-3 text-sm';
    }
  };

  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        getVariantClasses(),
        getSizeClasses(),
        fullWidth && 'w-full',
        isHovering && 'shadow-md',
        isPressed && 'scale-[0.98] shadow-inner',
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={cn(
          'absolute inset-0 transform-gpu rounded-md opacity-0 transition-opacity',
          isHovering && 'opacity-100'
        )}
        style={{
          background: isHovering
            ? variant === 'primary'
              ? 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)'
              : variant === 'secondary'
              ? 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)'
              : 'radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 70%)'
            : 'none'
        }}
      />
    </button>
  );
};

export default AnimatedButton;
