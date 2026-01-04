import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function FloatingPlane() {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
      <mesh rotation={[0, 0.3, 0]}>
        <planeGeometry args={[4, 2.2]} />
        <meshStandardMaterial
          color="#6c63ff"
          metalness={0.3}
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
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
