import React from 'react';
import { cn } from '../../utils/cn';

const Button = React.forwardRef(({
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}, ref) => {
  const isDisabled = disabled || loading;

  const baseClasses = 'nova-button-base nova-focus-visible';
  
  const variants = {
    primary: 'nova-button-primary',
    secondary: 'nova-button-secondary',
    ghost: 'nova-button-ghost',
    danger: 'nova-button-danger',
    success: 'nova-button-success',
    outline: 'nova-button-secondary border border-border-medium',
    link: 'nova-button-ghost underline-offset-4 hover:underline text-electric-blue-600 p-0 h-auto',
  };

  const sizes = {
    xs: 'nova-button-xs',
    sm: 'nova-button-sm', 
    md: 'nova-button-md',
    lg: 'nova-button-lg',
    xl: 'nova-button-xl',
    icon: 'nova-button-icon',
    'icon-sm': 'nova-button-icon-sm',
    'icon-lg': 'nova-button-icon-lg',
  };
  
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-4 w-4" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        {
          'opacity-50 cursor-not-allowed': isDisabled,
          'animate-pulse': loading,
        },
        className
      )}
      ref={ref}
      disabled={isDisabled}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      
      <span className={cn(
        'transition-all duration-200',
        { 'opacity-0': loading, 'opacity-100': !loading }
      )}>
        {children}
      </span>
      
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

// Specialized button components
const IconButton = React.forwardRef(({
  className,
  size = 'icon',
  children,
  'aria-label': ariaLabel,
  ...props
}, ref) => {
  return (
    <Button
      ref={ref}
      size={size}
      className={cn('flex items-center justify-center', className)}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Button>
  );
});

IconButton.displayName = 'IconButton';

const ButtonGroup = ({ className, children, ...props }) => {
  return (
    <div 
      className={cn(
        'inline-flex rounded-lg shadow-nova-xs',
        'divide-x divide-border-medium',
        '[&>button]:rounded-none',
        '[&>button:first-child]:rounded-l-lg',
        '[&>button:last-child]:rounded-r-lg',
        '[&>button:only-child]:rounded-lg',
        className
      )}
      role="group"
      {...props}
    >
      {children}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

export { Button, IconButton, ButtonGroup };
export default Button;
