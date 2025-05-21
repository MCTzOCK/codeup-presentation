/**
 * src/3d/parts/WebsitePartLearning.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import {
  Environment,
  Float,
  OrbitControls,
  Stars,
  Text3D,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const fontBold = "/fonts/Inter-Bold.json";
const fontRegular = "/fonts/Inter-Regular.json";

export default function WebsitePartLearning() {
  return (
    <>
      <group position={[150, 0, 0]}>
        <OrbitControls autoRotate autoRotateSpeed={0.5} />

        <CoreSphere />
        <Label text="CodeUp" position={[-1.5, 2, 0]} size={0.6} />

        {[...Array(6)].map((_, i) => (
          <VideoModule key={i} radius={3.5} angle={i} />
        ))}

        {/* Quiz */}
        <QuizCrystal position={[-2, -1.5, 2]} />
        <QuizCrystal position={[2, -1.5, 1]} />
        <Label text="Quiz zur Prüfung" position={[-2.5, -2.2, 2]} size={0.25} />
      </group>
    </>
  );
}

function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshPhysicalMaterial
        color="#00ffff"
        emissive="#0ff"
        clearcoat={1}
        metalness={0.7}
        roughness={0.1}
      />
    </mesh>
  );
}

function VideoModule({ radius, angle }: { radius: number; angle: number }) {
  const ref = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.2 + angle;
    const x = -Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    ref.current.position.set(x, 0.5, z);
    ref.current.lookAt(0, 0, 0);
  });

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[1.2, 0.7, 0.1]} />
        <meshStandardMaterial color="#222" emissive="#00f" />
      </mesh>
      <Text3D
        font={fontRegular}
        size={0.15}
        height={0.02}
        position={[-0.5, 0.4, 0.1]}
      >
        Video
        <meshStandardMaterial color="#fff" />
      </Text3D>
    </group>
  );
}

function QuizCrystal({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} position={position}>
      <dodecahedronGeometry args={[0.6, 0]} />
      <meshStandardMaterial color="#f0f" emissive="#f0f" />
    </mesh>
  );
}

function Label({ text, position, font = fontBold, size = 0.4 }) {
  return (
    <Text3D font={font} size={size} height={0.05} position={position}>
      {text}
      <meshStandardMaterial color="#fff" />
    </Text3D>
  );
}
