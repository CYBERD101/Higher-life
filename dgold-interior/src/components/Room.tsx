'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, ContactShadows, Float, MeshDistortMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

export function Room() {
  const sofaRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (sofaRef.current) {
      sofaRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[6, 4, 8]} fov={40} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />

      <Environment preset="city" />

      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
      <pointLight position={[-10, 5, -10]} color="#d4af37" intensity={1} />

      {/* Room Structure - Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.8} />
      </mesh>

      {/* Luxury Sofa Representation */}
      <group ref={sofaRef} position={[0, 0, 0]}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
          {/* Main Base */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[4, 0.6, 1.5]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
          </mesh>
          {/* Backrest */}
          <mesh castShadow receiveShadow position={[0, 0.8, -0.6]}>
            <boxGeometry args={[4, 1, 0.4]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
          </mesh>
          {/* Armrests */}
          <mesh castShadow position={[-1.85, 0.6, 0]}>
            <boxGeometry args={[0.3, 0.8, 1.5]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          <mesh castShadow position={[1.85, 0.6, 0]}>
            <boxGeometry args={[0.3, 0.8, 1.5]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          {/* Gold Trim/Legs */}
          {[[-1.8, 0.7], [1.8, 0.7], [-1.8, -0.7], [1.8, -0.7]].map((pos, i) => (
            <mesh key={i} position={[pos[0], -0.6, pos[1]]}>
              <cylinderGeometry args={[0.08, 0.04, 0.8]} />
              <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
            </mesh>
          ))}
          {/* Decorative Gold Bar */}
          <mesh position={[0, -0.3, 0.75]}>
            <boxGeometry args={[3.8, 0.1, 0.1]} />
            <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
          </mesh>
        </Float>
      </group>

      {/* Abstract Floating Decor */}
      <Float speed={3} rotationIntensity={1.5}>
        <mesh position={[-3, 2, -2]}>
          <sphereGeometry args={[0.4, 64, 64]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1}>
        <mesh position={[3, 3, -1]}>
          <torusGeometry args={[0.3, 0.05, 16, 100]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
        </mesh>
      </Float>

      <ContactShadows position={[0, -1, 0]} opacity={0.6} scale={15} blur={2} far={4.5} />
    </>
  )
}
