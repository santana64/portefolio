import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useEffect, Suspense } from 'react';
import * as THREE from 'three';

const REDUCED = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Procedural thermal environment: carbon → forge gradient, reflected by the metal. */
function ThermalEnv() {
  const { gl, scene } = useThree();
  useEffect(() => {
    let env: THREE.Texture | null = null;
    try {
      const c = document.createElement('canvas');
      c.width = 32; c.height = 256;
      const ctx = c.getContext('2d');
      if (!ctx) return;
      const g = ctx.createLinearGradient(0, 0, 0, 256);
      g.addColorStop(0.0, '#0B0D12');
      g.addColorStop(0.45, '#222a35');
      g.addColorStop(0.72, '#3a4656');
      g.addColorStop(0.9, '#5a2f17');
      g.addColorStop(1.0, '#FF6B2C');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 32, 256);
      const tex = new THREE.CanvasTexture(c);
      tex.mapping = THREE.EquirectangularReflectionMapping;
      const pmrem = new THREE.PMREMGenerator(gl);
      env = pmrem.fromEquirectangular(tex).texture;
      scene.environment = env;
      tex.dispose();
      pmrem.dispose();
    } catch {
      /* lights-only fallback */
    }
    return () => { if (env) env.dispose(); };
  }, [gl, scene]);
  return null;
}

function ForgeObject() {
  const ref = useRef<THREE.Mesh>(null);
  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.3, 0), []);
  useFrame((_, dt) => {
    if (ref.current && !REDUCED) {
      ref.current.rotation.y += dt * 0.18;
      ref.current.rotation.x += dt * 0.045;
    }
  });
  useEffect(() => () => geo.dispose(), [geo]);
  return (
    <mesh ref={ref} geometry={geo} rotation={[0.4, 0.6, 0]}>
      <meshStandardMaterial
        color="#46515f"
        metalness={0.85}
        roughness={0.34}
        flatShading
        emissive="#FF6B2C"
        emissiveIntensity={0.07}
        envMapIntensity={1.8}
      />
    </mesh>
  );
}

export default function Hero3D() {
  // Loaded via client:only="react" — never SSR'd, so WebGL only runs on the client.
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 4.4], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
      frameloop={REDUCED ? 'demand' : 'always'}
    >
      <Suspense fallback={null}>
        <ThermalEnv />
        <ambientLight intensity={1.1} color="#aebfd6" />
        <directionalLight position={[3, 4, 2]} intensity={4.6} color="#e2edff" />
        <pointLight position={[-2.6, -2.4, 1.8]} intensity={9} distance={16} decay={1.5} color="#FF6B2C" />
        <ForgeObject />
      </Suspense>
    </Canvas>
  );
}
