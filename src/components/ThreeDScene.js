import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


const LEDScreen = () => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01; // Rotate continuously
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[2, 1, 0.1]} />
      <meshStandardMaterial color="black" metalness={0.9} roughness={0.3} />
    </mesh>
  );
};

export default function ThreeDScene() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} />
      <LEDScreen />
    </Canvas>
  );
}