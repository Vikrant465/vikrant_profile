"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import type { Group } from "three";
import { SKILLS } from "@/data/skils";

interface SkillNode {
  name: string;
  category: string;
  color: string;
  position: [number, number, number];
}

/** Even spread of N points on a sphere, avoids clumping at the poles. */
function fibonacciSphere(count: number, radius: number): [number, number, number][] {
  const points: [number, number, number][] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    points.push([x * radius, y * radius, z * radius]);
  }
  return points;
}

function SkillLabel({ node, fallbackColor }: { node: SkillNode; fallbackColor: string }) {
  const color = node.color || fallbackColor;

  return (
    <group position={node.position}>
      <mesh>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <Html center style={{ pointerEvents: "none" }}>
        <span
          className="whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur-sm"
          style={{
            borderColor: color,
            color,
            backgroundColor: "color-mix(in srgb, var(--background) 70%, transparent)",
          }}
        >
          {node.name}
        </span>
      </Html>
    </group>
  );
}

export function SkillsScene({ accentColor }: { accentColor: string }) {
  const groupRef = useRef<Group>(null);

  const nodes = useMemo<SkillNode[]>(() => {
    const flat = SKILLS.flatMap((group) =>
      group.items.map((name) => ({ name, category: group.category, color: group.color })),
    );
    const positions = fibonacciSphere(flat.length, 2.6);
    return flat.map((item, i) => ({ ...item, position: positions[i]! }));
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x = state.pointer.y * 0.15;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node) => (
        <SkillLabel key={node.name} node={node} fallbackColor={accentColor} />
      ))}
    </group>
  );
}