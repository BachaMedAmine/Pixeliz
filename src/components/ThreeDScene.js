import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const CyberpunkSign = () => {
  const { scene } = useGLTF("/models/CyberpunkAnimatedJapNeonSign.glb"); // Ensure path is correct
  const ref = useRef();

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[0.3, 0.3, 0.3]} // Adjust scale to make it smaller
      position={[1.5, -0.5, 0]} // Move it slightly to the right
      rotation={[0, Math.PI / 6, 0]} // Slight rotation for better viewing angle
    />
  );
};

export default function ThreeDScene() {
  return (
    <Canvas camera={{ position: [3, 3, 5], fov: 40 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <CyberpunkSign />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}