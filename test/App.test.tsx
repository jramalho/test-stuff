import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../src/App'

describe('App', () => {
  it('renders overlay text', () => {
    render(<App />)
    expect(screen.getByText(/Olá, mundo!/i)).toBeDefined()
  })
})
