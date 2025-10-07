import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial, OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedTorus() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.35
      ref.current.rotation.y = clock.getElapsedTime() * 0.2
    }
  })
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <torusGeometry args={[1.2, 0.45, 64, 128]} />
      <MeshWobbleMaterial color="#ff6b6b" factor={0.6} speed={2} envMapIntensity={1.2} metalness={0.8} roughness={0.12} />
    </mesh>
  )
}

export default function HelloScene(): JSX.Element {
  return (
    <div className="canvas-wrap">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <spotLight position={[-5, 5, 5]} angle={0.3} intensity={0.7} />
        <AnimatedTorus />
        <OrbitControls enableZoom={true} enablePan={false} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
