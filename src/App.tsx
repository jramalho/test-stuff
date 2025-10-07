import React from 'react'
import HelloScene from './HelloScene'

export default function App(): JSX.Element {
  return (
    <div className="app">
      <HelloScene />
      <div className="overlay">Olá, mundo!</div>
    </div>
  )
}
