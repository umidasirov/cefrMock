import React from 'react'

const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
