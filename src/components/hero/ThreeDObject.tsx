
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CyberSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1.5, 64, 64]} ref={meshRef}>
        <MeshDistortMaterial
          color="#00f3ff"
          attach="material"
          distort={0.4} // Strength of distortion
          speed={2} // Speed of distortion
          roughness={0}
          metalness={1}
          wireframe={true} // Cyberpunk feel
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {/* Inner Core */}
      <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial 
            color="#bd00ff"
            emissive="#bd00ff"
            emissiveIntensity={2}
            roughness={0}
            metalness={0.5}
          />
      </Sphere>
    </Float>
  );
}

export function ThreeDObject() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#bd00ff" />
        
        <CyberSphere />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
