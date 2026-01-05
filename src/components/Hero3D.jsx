import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function FloatingPlane() {
  const meshRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (!meshRef.current) return;

    // Smooth mouse-based rotation
    meshRef.current.rotation.x = mouse.y * 0.6;
    meshRef.current.rotation.y = mouse.x * 0.8;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef}>
        <planeGeometry args={[4, 2.2]} />
        <meshStandardMaterial
          color="#6c63ff"
          metalness={0.35}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 3, 3]} />
      <FloatingPlane />
    </Canvas>
  );
}
