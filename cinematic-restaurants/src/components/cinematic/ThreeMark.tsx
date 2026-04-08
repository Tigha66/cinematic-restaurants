"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Knot({ accent = "#ffffff" }: { accent?: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  const mat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(accent),
        metalness: 0.85,
        roughness: 0.25,
      }),
    [accent]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!mesh.current) return;
    mesh.current.rotation.x = t * 0.25;
    mesh.current.rotation.y = t * 0.4;
  });

  return (
    <mesh ref={mesh} material={mat}>
      <torusKnotGeometry args={[1.05, 0.36, 220, 18]} />
    </mesh>
  );
}

export function ThreeMark({ accent }: { accent: string }) {
  return (
    <div className="relative h-[260px] w-[260px] sm:h-[340px] sm:w-[340px]">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Knot accent={accent} />
        <Environment preset="city" />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_55%)]" />
    </div>
  );
}
