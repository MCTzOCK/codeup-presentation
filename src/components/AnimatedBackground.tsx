/**
 * src/components/AnimatedBackground.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

export function AnimatedBackground0() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 10], fov: 45 }}
    >
      {/* Dark space background */}
      <color attach="background" args={["#0a001a"]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
      <pointLight position={[-10, -10, -5]} intensity={1.5} color="#ff3ec8" />

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.2}>
        <mesh>
          <torusKnotGeometry args={[2, 0.4, 120, 16]} />
          <meshBasicMaterial
            color="#00f0ff"
            wireframe
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={1.2} floatIntensity={2}>
        <mesh position={[2, 2, -3]}>
          <dodecahedronGeometry args={[1.5, 0]} />
          <meshBasicMaterial
            color="#ff3ec8"
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>
      </Float>
    </Canvas>
  );
}

export function AnimatedBackground1() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 6, 8], fov: 60 }}
    >
      <color attach="background" args={["#0a001a"]} />
      <ambientLight intensity={0.4} />
      <WavyGrid />
    </Canvas>
  );
}

export function AnimatedBackground2() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <color attach="background" args={["#050011"]} />
      <ambientLight intensity={0.6} />
      <WarpTunnel />
    </Canvas>
  );
}

export function AnimatedBackground3() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <color attach="background" args={["#090014"]} />
      <ambientLight intensity={0.4} />
      <MorphingBlob />
    </Canvas>
  );
}

export function AnimatedBackground4() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 8], fov: 70 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <color attach="background" args={["#070018"]} />
      <ambientLight intensity={0.4} />
      <NeonGrid />
      <WarpRings />
      <MorphingBlob />
    </Canvas>
  );
}

/** UTILS **/

function WavyGrid() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const mesh = meshRef.current;
    const position = mesh.geometry.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const wave = Math.sin(x * 2 + t * 2) * Math.cos(y * 2 + t) * 0.2;
      position.setZ(i, wave);
    }

    position.needsUpdate = true;
    mesh.rotation.z += 0.001;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[30, 30, 60, 60]} />
      <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function WarpTunnel() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.rotation.z = t * 0.25;
    groupRef.current.children.forEach((mesh, i) => {
      mesh.position.z = -((i * 2 + t * 10) % 80);
    });
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 40 }).map((_, i) => (
        <mesh key={i}>
          <torusGeometry args={[2, 0.08, 16, 100]} />
          <meshBasicMaterial
            wireframe
            color={i % 2 === 0 ? "#00f0ff" : "#ff3ec8"}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function MorphingBlob() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta;
    const mesh = meshRef.current;
    const pos = mesh.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const d = Math.sin(time.current + x * 5 + y * 5 + z * 5) * 0.05;
      pos.setXYZ(i, x + d * x, y + d * y, z + d * z);
    }
    pos.needsUpdate = true;
    mesh.rotation.y += delta * 0.2;
    mesh.rotation.x = Math.sin(time.current * 0.4) * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 6]} />
      <meshBasicMaterial wireframe color="#ff00cc" transparent opacity={0.5} />
    </mesh>
  );
}

function NeonGrid() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    meshRef.current.rotation.x = -Math.PI / 2;
    // @ts-ignore
    meshRef.current.material.opacity = 0.4 + Math.sin(clock.elapsedTime) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[0, -2, 0]}>
      <planeGeometry args={[200, 200, 100, 100]} />
      <meshBasicMaterial wireframe color="#00f0ff" transparent opacity={0.4} />
    </mesh>
  );
}

function WarpRings() {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.rotation.z = t * 0.15;
    groupRef.current.children.forEach((ring, i) => {
      ring.position.z = -((i * 2 + t * 8) % 80);
    });
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh key={i}>
          <torusGeometry args={[2.2, 0.06, 16, 100]} />
          <meshBasicMaterial
            wireframe
            color={i % 2 === 0 ? "#ff3ec8" : "#00f0ff"}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}
