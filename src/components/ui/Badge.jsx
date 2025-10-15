import React from 'react';
import { cn } from '../../utils/cn';

const Badge = React.forwardRef(({
  children,
  className,
  variant = 'neutral',
  size = 'default',
  dot = false,
  removable = false,
  onRemove,
  icon,
  ...props
}, ref) => {
  const baseClasses = 'nova-badge-base';
  
  const variants = {
    neutral: 'nova-badge-neutral',
    primary: 'nova-badge-primary',
    success: 'nova-badge-success',
    warning: 'nova-badge-warning',
    error: 'nova-badge-error',
    info: 'nova-badge-info',
    outline: 'bg-transparent border border-border-medium text-text-primary hover:bg-background-tertiary',
    solid: 'bg-text-primary text-background-primary',
  };
  
  const sizes = {
    sm: 'nova-badge-sm',
    default: 'nova-badge',
    lg: 'nova-badge-lg',
  };
  
  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    {
      'nova-badge-dot': dot,
    },
    className
  );

  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove?.(e);
  };
  
  return (
    <span
      ref={ref}
      className={classes}
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
      {removable && (
        <button
          onClick={handleRemove}
          className="ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors"
          aria-label="Remove badge"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
});

Badge.displayName = 'Badge';

// Specialized Badge Components
const StatusBadge = ({ status, className, ...props }) => {
  const statusConfig = {
    active: { variant: 'success', dot: true, children: 'Active' },
    inactive: { variant: 'neutral', dot: true, children: 'Inactive' },
    pending: { variant: 'warning', dot: true, children: 'Pending' },
    completed: { variant: 'success', dot: true, children: 'Completed' },
    cancelled: { variant: 'error', dot: true, children: 'Cancelled' },
    draft: { variant: 'outline', dot: true, children: 'Draft' },
    published: { variant: 'primary', dot: true, children: 'Published' },
    'in_progress': { variant: 'info', dot: true, children: 'In Progress' },
  };

  const config = statusConfig[status] || statusConfig.inactive;

  return (
    <Badge
      className={className}
      {...config}
      {...props}
    />
  );
};

const PriorityBadge = ({ priority, className, ...props }) => {
  const priorityConfig = {
    low: { variant: 'neutral', children: 'Low' },
    medium: { variant: 'warning', children: 'Medium' },
    high: { variant: 'error', children: 'High' },
    urgent: { variant: 'error', children: '🔥 Urgent' },
  };

  const config = priorityConfig[priority] || priorityConfig.medium;

  return (
    <Badge
      className={className}
      {...config}
      {...props}
    />
  );
};

const CountBadge = ({ count, max = 99, className, ...props }) => {
  const displayCount = count > max ? `${max}+` : count.toString();
  
  return (
    <Badge
      variant="error"
      size="sm"
      className={cn('min-w-5 justify-center', className)}
      {...props}
    >
      {displayCount}
    </Badge>
  );
};

export { Badge, StatusBadge, PriorityBadge, CountBadge };
export default Badge;
