import React, { Suspense } from 'react'
import HelloScene from './HelloScene'
import ErrorBoundary from './ErrorBoundary'
import Loading from './Loading'

export default function App(): JSX.Element {
  return (
    <div className="app">
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <HelloScene />
        </Suspense>
      </ErrorBoundary>
      <div className="overlay">Olá, mundo!</div>
    </div>
  )
}
