import React, { useState, forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Input = forwardRef(({
  className,
  type = 'text',
  variant = 'default',
  size = 'default',
  state = 'default',
  label,
  helperText,
  errorMessage,
  leftIcon,
  rightIcon,
  leftAdornment,
  rightAdornment,
  disabled = false,
  required = false,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const baseClasses = 'nova-input-base';
  
  const variants = {
    default: 'nova-input',
    filled: 'nova-input bg-background-tertiary border-transparent focus:bg-background-primary focus:border-border-medium',
    outlined: 'nova-input border-2',
    underlined: 'nova-input border-0 border-b-2 border-border rounded-none bg-transparent px-0 focus:border-electric-blue-500',
  };
  
  const sizes = {
    sm: 'nova-input-sm',
    default: 'nova-input',
    lg: 'nova-input-lg',
  };

  const states = {
    default: '',
    success: 'nova-input-success',
    error: 'nova-input-error',
  };
  
  const inputClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    states[state],
    {
      'pl-10': leftIcon || leftAdornment,
      'pr-10': rightIcon || rightAdornment,
      'opacity-60 cursor-not-allowed': disabled,
      'ring-2 ring-electric-blue-200': isFocused,
    },
    className
  );
  
  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };
  
  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };
  
  const inputId = props.id || `input-${Math.random().toString(36).slice(2, 11)}`;

  return (
    <div className="w-full space-y-1">
      {label && (
        <label 
          htmlFor={inputId}
          className="nova-caption block text-text-primary font-medium"
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {(leftIcon || leftAdornment) && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {leftAdornment ? (
              <span className="text-text-tertiary nova-body-sm">
                {leftAdornment}
              </span>
            ) : (
              <span className="text-text-tertiary w-4 h-4">
                {leftIcon}
              </span>
            )}
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={inputClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          aria-invalid={state === 'error'}
          aria-describedby={
            errorMessage ? `${inputId}-error` : 
            helperText ? `${inputId}-help` : undefined
          }
          {...props}
        />
        
        {(rightIcon || rightAdornment) && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {rightAdornment ? (
              <span className="text-text-tertiary nova-body-sm">
                {rightAdornment}
              </span>
            ) : (
              <span className="text-text-tertiary w-4 h-4">
                {rightIcon}
              </span>
            )}
          </div>
        )}
      </div>
      
      {state === 'error' && errorMessage && (
        <p id={`${inputId}-error`} className="nova-body-sm text-error-600 flex items-center gap-1">
          <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {errorMessage}
        </p>
      )}
      
      {state !== 'error' && helperText && (
        <p id={`${inputId}-help`} className="nova-body-sm text-text-secondary">
          {helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

// Specialized Input Components
const SearchInput = forwardRef(({
  className,
  placeholder = "Search...",
  onSearch,
  ...props
}, ref) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(searchValue);
  };

  const handleClear = () => {
    setSearchValue('');
    onSearch?.('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Input
        ref={ref}
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        leftIcon={
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
        rightIcon={searchValue ? (
          <button
            type="button"
            onClick={handleClear}
            className="hover:text-text-primary transition-colors"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ) : null}
        className={className}
        {...props}
      />
    </form>
  );
});

SearchInput.displayName = 'SearchInput';

const PasswordInput = forwardRef(({
  className,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      ref={ref}
      type={showPassword ? 'text' : 'password'}
      rightIcon={
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="hover:text-text-primary transition-colors focus:outline-none"
        >
          {showPassword ? (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.758 6.758M9.878 9.878a3 3 0 00-.007 4.243m4.242-4.242L15.121 9.879m0 0l3.138-3.138m-3.138 3.138a3 3 0 00-4.243.007m6.06 6.06l.04-.04M15.12 9.88l-.04.04" />
            </svg>
          ) : (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      }
      className={className}
      {...props}
    />
  );
});

PasswordInput.displayName = 'PasswordInput';

const TextArea = forwardRef(({
  className,
  rows = 4,
  resize = 'vertical',
  ...props
}, ref) => {
  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  };

  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        'nova-textarea',
        resizeClasses[resize],
        className
      )}
      {...props}
    />
  );
});

TextArea.displayName = 'TextArea';

export { Input, SearchInput, PasswordInput, TextArea };
export default Input;
