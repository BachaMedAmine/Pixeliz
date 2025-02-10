import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const JoinUsAvatar = () => {
  const { scene } = useGLTF("/models/VivaAvatarVR.glb"); // Ensure path is correct
  const ref = useRef();

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[3, 3, 3]} // Adjust scale
      position={[0, -1, 0]} // Center it properly
      rotation={[0, Math.PI / 6, 0]} // Slight angle rotation
    />
  );
};

export default function JoinUsBackground() {
  return (
    <Canvas camera={{ position: [5, 3, 8], fov: 35 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <JoinUsAvatar />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}