import React from 'react';
import { cn } from '../../utils/cn';

const Card = React.forwardRef(({
  children,
  className,
  variant = 'default',
  hoverable = false,
  padding = 'default',
  interactive = false,
  glass = false,
  ...props
}, ref) => {
  const baseClasses = 'nova-card';
  
  const variants = {
    default: 'bg-background-elevated border-nova-gray-800',
    elevated: 'nova-card-elevated',
    outlined: 'bg-transparent border-nova-gray-700 shadow-none',
    filled: 'bg-background-secondary border-nova-gray-800',
    gradient: 'bg-gradient-nova border-border-strong text-white',
    glass: 'nova-card-glass',
    success: 'bg-success-900/20 border-success-500/30',
    warning: 'bg-warning-900/20 border-warning-500/30',
    error: 'bg-error-900/20 border-error-500/30',
    info: 'bg-info-900/20 border-info-500/30',
  };
  
  const paddingSizes = {
    none: 'p-0',
    xs: 'p-2',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };
  
  const classes = cn(
    baseClasses,
    variants[glass ? 'glass' : variant],
    paddingSizes[padding],
    {
      'nova-card-hover': hoverable,
      'nova-card-interactive': interactive,
      'cursor-pointer': interactive,
    },
    className
  );
  
  return (
    <div
      ref={ref}
      className={classes}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

const CardHeader = React.forwardRef(({
  children,
  className,
  divided = false,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col space-y-1.5 pb-4',
      divided && 'border-b border-border-light pb-6 mb-6',
      className
    )}
    {...props}
  >
    {children}
  </div>
));

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({
  children,
  className,
  as: Component = 'h3',
  size = 'default',
  ...props
}, ref) => {
  const sizes = {
    sm: 'nova-heading-4',
    default: 'nova-heading-3',
    lg: 'nova-heading-2',
    xl: 'nova-heading-1',
  };

  return (
    <Component
      ref={ref}
      className={cn(sizes[size], 'leading-none tracking-tight', className)}
      {...props}
    >
      {children}
    </Component>
  );
});

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef(({
  children,
  className,
  muted = true,
  ...props
}, ref) => (
  <p
    ref={ref}
    className={cn(
      'nova-body', 
      muted ? 'text-text-secondary' : 'text-text-primary',
      className
    )}
    {...props}
  >
    {children}
  </p>
));

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef(({
  children,
  className,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={cn('flex-1', className)}
    {...props}
  >
    {children}
  </div>
));

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef(({
  children,
  className,
  divided = false,
  justify = 'start',
  ...props
}, ref) => {
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center pt-4',
        divided && 'border-t border-border-light pt-6 mt-6',
        justifyClasses[justify],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

CardFooter.displayName = 'CardFooter';

// Specialized Card Components
const StatCard = React.forwardRef(({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  className,
  ...props
}, ref) => (
  <Card ref={ref} className={cn('nova-card-hover', className)} hoverable {...props}>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="nova-caption mb-2">{title}</p>
          <p className="nova-number-xl font-bold text-text-primary mb-1">{value}</p>
          {subtitle && (
            <p className="nova-body-sm text-text-secondary">{subtitle}</p>
          )}
          {trend && trendValue && (
            <div className="flex items-center mt-3 gap-1">
              <span className={cn(
                'nova-mono text-xs font-medium',
                trend === 'up' ? 'text-success-600' : 
                trend === 'down' ? 'text-error-600' : 'text-text-tertiary'
              )}>
                {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'} {trendValue}
              </span>
              <span className="nova-caption">vs last period</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="w-12 h-12 bg-gradient-nova rounded-lg flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        )}
      </div>
    </CardContent>
  </Card>
));

StatCard.displayName = 'StatCard';

const MetricCard = React.forwardRef(({
  label,
  value,
  change,
  changeType = 'neutral',
  icon,
  className,
  ...props
}, ref) => (
  <Card ref={ref} className={cn('text-center', className)} {...props}>
    <CardContent className="p-4">
      {icon && (
        <div className="w-8 h-8 mx-auto mb-2 text-electric-blue-500">
          {icon}
        </div>
      )}
      <p className="nova-mono-lg font-bold text-text-primary">{value}</p>
      <p className="nova-caption mt-1">{label}</p>
      {change && (
        <div className={cn(
          'flex items-center justify-center gap-1 mt-2',
          changeType === 'positive' ? 'text-success-600' :
          changeType === 'negative' ? 'text-error-600' : 'text-text-tertiary'
        )}>
          <span className="nova-mono text-xs">{change}</span>
        </div>
      )}
    </CardContent>
  </Card>
));

MetricCard.displayName = 'MetricCard';

export { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  StatCard,
  MetricCard
};
