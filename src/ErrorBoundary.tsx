import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('3D Scene Error:', error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '2rem',
          textAlign: 'center',
          color: '#e6eef8',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <h2>⚠️ Unable to load 3D scene</h2>
          <p style={{ opacity: 0.7 }}>
            Your browser may not support WebGL or the scene encountered an error.
          </p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
