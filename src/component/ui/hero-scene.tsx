"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Points as ThreePoints } from "three";
import type * as THREE from "three";

function ParticleField({ count, color }: { count: number; color: string }) {
  const pointsRef = useRef<ThreePoints>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.03;
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    pointsRef.current.rotation.y += state.pointer.x * 0.05;
    pointsRef.current.rotation.x += state.pointer.y * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.035} sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

function WireframeShape({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1]}>
      <icosahedronGeometry args={[2.1, 1]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
    </mesh>
  );
}

export function Scene({
  particleCount,
  accentColor,
}: {
  particleCount: number;
  accentColor: string;
}) {
  return (
    <>
      <WireframeShape color={accentColor} />
      <ParticleField count={particleCount} color={accentColor} />
    </>
  );
}