/**
 * src/3d/Icons.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const fontBold = "/fonts/Inter-Bold.ttf";

export function VideoIcon(props: { position: [number, number, number] }) {
  return (
    <group position={props.position}>
      <mesh>
        <boxGeometry args={[2.5, 1.5, 0.2]} />
        <meshStandardMaterial color="#e63946" />
      </mesh>
      <mesh position={[1.3, 0, 0.15]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.3, 0.6, 4]} />
        <meshStandardMaterial color="#f1faee" />
      </mesh>
    </group>
  );
}

export function BookIcon(props: { position: [number, number, number] }) {
  return (
    <group position={props.position}>
      <mesh>
        <boxGeometry args={[2, 2.5, 0.5]} />
        <meshStandardMaterial color="#457b9d" />
      </mesh>
      <mesh position={[-0.9, 0, 0.26]}>
        <boxGeometry args={[0.2, 2.5, 0.01]} />
        <meshStandardMaterial color="#1d3557" />
      </mesh>
    </group>
  );
}

export function QuestionIcon(props: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={ref} position={props.position}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#a8dadc" />
      </mesh>
      <Text
        position={[0, 0, 0.9]}
        fontSize={0.6}
        color="#1d3557"
        anchorX="center"
        anchorY="middle"
        font={fontBold}
      >
        ?
      </Text>
    </group>
  );
}
