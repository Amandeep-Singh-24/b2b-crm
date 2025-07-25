import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md',
    children, 
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center font-medium rounded-full'
    
    const variants = {
      default: 'bg-accent text-secondary-text',
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      danger: 'bg-red-200 text-red-900',
      info: 'bg-blue-100 text-blue-800'
    }
    
    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-0.5 text-sm',
      lg: 'px-3 py-1 text-sm'
    }

    return (
      <span
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge } 