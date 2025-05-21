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
import { RoundedBox, Text, Text3D } from "@react-three/drei";

const fontBold = "/fonts/Inter-Bold.ttf";

// youtube logo (rounded red rectanble with triangular play button in the middle)
export function VideoIcon(props: { position: [number, number, number] }) {
  return (
    <group position={props.position}>
      <RoundedBox args={[2, 1, 0.5]} radius={0.1}>
        <meshStandardMaterial color="#FF0000" />
      </RoundedBox>
      <Text
        font={"/fonts/Inter-Bold.ttf"}
        position={[0, 0, 0.5]}
        fontSize={0.2}
      >
        Lektion
      </Text>
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
      <Text
        font={"/fonts/Inter-Bold.ttf"}
        position={[0, 0, 0.5]}
        fontSize={0.4}
      >
        Kurs
      </Text>
    </group>
  );
}

export function QuestionIcon(props: { position: [number, number, number] }) {
  return (
    <group position={props.position}>
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <sphereGeometry args={[0.75, 16, 16]} />
        <meshStandardMaterial color="#a8dadc" />
      </mesh>
      <Text
        font={"/fonts/Inter-Bold.ttf"}
        position={[-0.5, 0, 1]}
        fontSize={0.2}
        color="#fafafa"
        anchorX="center"
        anchorY="middle"
      >
        Quiz
      </Text>
    </group>
  );
}
