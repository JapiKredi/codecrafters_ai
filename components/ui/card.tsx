import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={`p-4 bg-white shadow-md rounded-lg ${className}`}>
      {children}
    </div>
  )
}