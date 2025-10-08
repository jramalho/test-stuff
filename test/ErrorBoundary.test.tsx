import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ErrorBoundary from '../src/ErrorBoundary'

// Component that throws an error
const ThrowError = () => {
  throw new Error('Test error')
}

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    )
    expect(screen.getByText(/Test content/i)).toBeDefined()
  })

  it('renders error UI when child component throws', () => {
    // Suppress console.error for this test
    const originalError = console.error
    console.error = () => {}

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    )

    expect(screen.getByText(/Unable to load 3D scene/i)).toBeDefined()
    expect(screen.getByText(/Try Again/i)).toBeDefined()

    // Restore console.error
    console.error = originalError
  })

  it('renders custom fallback when provided', () => {
    // Suppress console.error for this test
    const originalError = console.error
    console.error = () => {}

    render(
      <ErrorBoundary fallback={<div>Custom error message</div>}>
        <ThrowError />
      </ErrorBoundary>
    )

    expect(screen.getByText(/Custom error message/i)).toBeDefined()

    // Restore console.error
    console.error = originalError
  })
})
