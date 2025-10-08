import React, { useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial, OrbitControls, Environment, PerformanceMonitor } from '@react-three/drei'
import * as THREE from 'three'
import Loading from './Loading'
import { analytics } from './analytics'

// Track performance for analytics
let performanceData = {
  fps: 60,
  quality: 'high' as 'low' | 'medium' | 'high'
}

function AnimatedTorus() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.35
      ref.current.rotation.y = clock.getElapsedTime() * 0.2
    }
  })
  
  // Track rotation interaction
  useEffect(() => {
    analytics.trackInteraction('rotate')
  }, [])
  
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <torusGeometry args={[1.2, 0.45, 64, 128]} />
      <MeshWobbleMaterial color="#ff6b6b" factor={0.6} speed={2} envMapIntensity={1.2} metalness={0.8} roughness={0.12} />
    </mesh>
  )
}

export default function HelloScene(): JSX.Element {
  const [dpr, setDpr] = React.useState(1.5)
  
  return (
    <div className="canvas-wrap">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={dpr}
      >
        <Suspense fallback={null}>
          {/* Performance monitoring - automatically adjusts quality */}
          <PerformanceMonitor
            onIncline={() => {
              setDpr(2)
              performanceData.quality = 'high'
              analytics.trackPerformance(60, 'high')
            }}
            onDecline={() => {
              setDpr(1)
              performanceData.quality = 'low'
              analytics.trackPerformance(30, 'low')
            }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <spotLight position={[-5, 5, 5]} angle={0.3} intensity={0.7} />
            <AnimatedTorus />
            <OrbitControls 
              enableZoom={true} 
              enablePan={false}
              onStart={() => analytics.trackInteraction('rotate')}
            />
            <Environment preset="city" />
          </PerformanceMonitor>
        </Suspense>
      </Canvas>
    </div>
  )
}

// Export performance data for analytics
export { performanceData }
