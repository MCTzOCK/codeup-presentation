/**
 * src/3d/SceneItem.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
// components/SceneItem.tsx
import { Text3D, Center, Float } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { RoundedBox } from "@react-three/drei";

export function SceneItem({
  position,
  label,
  description,
  type,
  color,
}: {
  position: [number, number, number];
  label: string;
  description: string;
  type: "globe" | "smartphone" | "server";
  color: string;
}) {
  return (
    <Float position={position} floatIntensity={1.5} rotationIntensity={0.5}>
      <group>
        {type === "globe" && <Globe color={color} />}
        {type === "smartphone" && <Smartphone color={color} />}
        {type === "server" && <ServerRack color={color} />}
        <Label label={label} description={description} />
      </group>
    </Float>
  );
}

function Globe({ color }: { color: string }) {
  return (
    <mesh>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
}

function Smartphone({ color }: { color: string }) {
  return (
    <group>
      <RoundedBox args={[1.2, 2.2, 0.15]} radius={0.2}>
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
      </RoundedBox>
      <mesh position={[0, 0, 0.081]}>
        <boxGeometry args={[0.9, 1.7, 0.01]} />
        <meshStandardMaterial color={"#111"} metalness={0.4} roughness={0.1} />
      </mesh>
      {/* little notch */}
      <mesh position={[0, 0.75, 0.082]}>
        <boxGeometry args={[0.3, 0.1, 0.01]} />
        <meshStandardMaterial
          color={"#fafafa"}
          metalness={0.4}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

function ServerRack({ color }: { color: string }) {
  return (
    <group>
      {[...Array(3)].map((_, i) => (
        <RoundedBox
          key={i}
          args={[2, 0.5, 1]}
          position={[0, i * 0.6, 0]}
          radius={0.1}
        >
          <meshStandardMaterial color={color} metalness={0.4} roughness={0.3} />
        </RoundedBox>
      ))}
    </group>
  );
}

function Label({ label, description }: { label: string; description: string }) {
  return (
    <group position={[0, -2.5, 0]}>
      <Center>
        <Text3D font="/fonts/Inter-Bold.json" size={0.3} height={0.05}>
          {label}
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </Center>
      <Center position={[0, -0.4, 0]}>
        <Text3D font="/fonts/Inter-Regular.json" size={0.2} height={0.03}>
          {description}
          <meshStandardMaterial color="#aaaaaa" />
        </Text3D>
      </Center>
    </group>
  );
}
