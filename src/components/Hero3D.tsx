import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useEffect, useState, Suspense } from 'react';
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
      g.addColorStop(0.55, '#161b22');
      g.addColorStop(0.82, '#5a2f17');
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
        color="#222a33"
        metalness={0.92}
        roughness={0.26}
        flatShading
        emissive="#FF6B2C"
        emissiveIntensity={0.1}
        envMapIntensity={1.1}
      />
    </mesh>
  );
}

export default function Hero3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // SSR-safe: WebGL only mounts on the client
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
        <ambientLight intensity={0.45} color="#9fb3d0" />
        <directionalLight position={[3, 4, 2]} intensity={2.2} color="#cfe0ff" />
        <pointLight position={[-2.6, -2.2, 1.6]} intensity={7} distance={14} decay={1.6} color="#FF6B2C" />
        <ForgeObject />
      </Suspense>
    </Canvas>
  );
}
