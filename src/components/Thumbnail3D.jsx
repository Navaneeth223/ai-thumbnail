import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, useTexture } from "@react-three/drei";

function Card({ image }) {
  const texture = useTexture(image);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh>
        <planeGeometry args={[3, 1.7]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </Float>
  );
}

export default function Thumbnail3D({ image }) {
  return (
    <Canvas style={{ height: "300px" }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <Card image={image} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
