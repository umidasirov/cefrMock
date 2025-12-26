import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('renders the button with the correct text', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByText(/Click me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    const buttonElement = screen.getByText(/Click me/i)
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies the correct styles for the primary variant', () => {
    render(<Button variant="primary">Primary</Button>)
    const buttonElement = screen.getByText(/Primary/i)
    expect(buttonElement).toHaveClass('bg-primary')
  })

  it('applies the correct styles for the secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const buttonElement = screen.getByText(/Secondary/i)
    expect(buttonElement).toHaveClass('bg-secondary')
  })

  it('applies the correct styles for the outline variant', () => {
    render(<Button variant="outline">Outline</Button>)
    const buttonElement = screen.getByText(/Outline/i)
    expect(buttonElement).toHaveClass('border-primary')
  })
})
