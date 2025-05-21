/**
 * src/components/OrbitingObject.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

export default function OrbitingObject({
  radius,
  speed,
  phase = 0,
  label,
  color,
  children,
}: {
  radius: number;
  speed: number;
  phase?: number;
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phase;
    const x = radius * Math.cos(t);
    const z = radius * Math.sin(t);
    ref.current.position.set(x, 0, z);
    ref.current.rotation.y = t;
  });

  return (
    <group ref={ref}>
      {children}
      <Text
        position={[0, 1, 0]}
        fontSize={0.35}
        font="/fonts/Inter_28pt-Bold.ttf" // You can change this to any font you want
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}
