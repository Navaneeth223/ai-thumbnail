import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import gsap from "gsap";

export default function FloatingCard({ image }) {
  const cardRef = useRef();
  const texture = useTexture(image);
  const { mouse } = useThree();
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    gsap.to(cardRef.current.rotation, {
      y: Math.PI * 2,
      duration: 40,
      repeat: -1,
      ease: "none"
    });
  }, []);

  useFrame(() => {
    if (!cardRef.current || isMobile) return;

    cardRef.current.rotation.x += mouse.y * 0.01;
    cardRef.current.rotation.y += mouse.x * 0.01;
  });

  return (
    <mesh ref={cardRef} position={[0, 0, 0]}>
      <planeGeometry args={[3, 1.7]} />

      <meshPhysicalMaterial
        map={texture}
        roughness={0.1}
        metalness={0.3}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}
