import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Input from '@/components/ui/Input.jsx'

describe('Input', () => {
  it('renders the input with the correct placeholder', () => {
    render(<Input placeholder="Enter text" />)
    const inputElement = screen.getByPlaceholderText(/Enter text/i)
    expect(inputElement).toBeInTheDocument()
  })

  it('calls the onChange handler when the value changes', () => {
    const handleChange = vi.fn()
    render(<Input onChange={handleChange} />)
    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'new value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('updates the value when changed', () => {
    render(<Input />)
    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'new value' } })
    expect(inputElement.value).toBe('new value')
  })
})
