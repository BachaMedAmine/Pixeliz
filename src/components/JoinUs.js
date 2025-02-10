import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const JoinUsModel = () => {
  const { scene } = useGLTF("/models/VivaAvatarVR.glb");
  return <primitive object={scene} scale={2} />;
};

export default function JoinUs() {
  return (
    <div className="join-us-container">
      <Canvas>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        <JoinUsModel />
      </Canvas>
    </div>
  );
}