import React from 'react'

const Button = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles =
    'px-4 py-2 rounded-md font-semibold transition-colors duration-300'

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-offset-2 focus:ring-primary',
    secondary:
      'bg-secondary text-white hover:bg-secondary/90 focus:ring-2 focus:ring-offset-2 focus:ring-secondary',
    outline:
      'border border-primary text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-primary',
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
