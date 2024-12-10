import React from 'react'

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ size = 'md', className, children }) => {
  const sizeClasses = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-md',
    lg: 'py-3 px-6 text-lg',
  }

  return (
    <button className={`${sizeClasses[size]} ${className}`}>
      {children}
    </button>
  )
}