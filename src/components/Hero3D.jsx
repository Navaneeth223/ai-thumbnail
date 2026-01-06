import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ===================== */
/* FLOATING PLANE */
/* ===================== */
function FloatingPlane() {
  const meshRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = mouse.y * 0.6;
    meshRef.current.rotation.y = mouse.x * 0.8;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef}>
        <planeGeometry args={[4, 2.2]} />
        <meshStandardMaterial
          color="#7c7cff"
          metalness={0.4}
          roughness={0.15}
        />
      </mesh>
    </Float>
  );
}

/* ===================== */
/* GLOW PARTICLES */
/* ===================== */
function GlowParticles() {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.05}
        color="#2efcff"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ===================== */
/* HERO 3D SCENE */
/* ===================== */
export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      {/* Neon lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 4]} intensity={1.5} color="#7c7cff" />
      <pointLight position={[-3, -2, 3]} intensity={2} color="#2efcff" />

      <GlowParticles />
      <FloatingPlane />
    </Canvas>
  );
}
