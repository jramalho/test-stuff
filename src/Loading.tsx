import React from 'react'

export default function Loading(): JSX.Element {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flexDirection: 'column',
      gap: '1rem',
      color: '#e6eef8'
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        border: '4px solid rgba(124, 58, 237, 0.2)',
        borderTop: '4px solid #7c3aed',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <p style={{ opacity: 0.7 }}>Loading 3D scene...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
