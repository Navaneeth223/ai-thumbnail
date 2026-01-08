function GlowParticles() {
  const pointsRef = useRef();
  const { mouse } = useThree();

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

    // Smooth rotation
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;

    // Mouse influence
    pointsRef.current.rotation.x += mouse.y * 0.01;
    pointsRef.current.rotation.y += mouse.x * 0.01;
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
const isMobile = window.innerWidth < 768;

const particles = useMemo(() => {
  const count = isMobile ? 80 : 200; // 👈 BIG win
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }
  return positions;
}, []);