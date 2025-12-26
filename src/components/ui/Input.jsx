import React from 'react'

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  id,
  ...props
}) => {
  const baseStyles =
    'w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary'

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseStyles} ${className}`}
      {...props}
    />
  )
}

export default Input
