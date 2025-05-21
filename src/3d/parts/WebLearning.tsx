/**
 * src/3d/parts/WebLearning.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Text3D, Tube } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";
import { VideoIcon, BookIcon, QuestionIcon } from "../Icons.tsx";

function NeonTube({ points }) {
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  return (
    <Tube args={[curve, 64, 0.05, 8, false]}>
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={1.5}
      />
    </Tube>
  );
}

export default function WebLearning() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 10, 10]} intensity={1.2} />
      <group position={[150, 0, 0]}>
        <OrbitControls />

        {/* Book - Start */}
        <BookIcon position={[-6, 0, 0]} />
        <Text
          font={"/fonts/Inter-Bold.ttf"}
          position={[-6, 2, 0]}
          fontSize={0.4}
        >
          Fokussierte Kurse
        </Text>

        {/* Video Lessons */}
        {[2, 0, -2].map((y, i) => (
          <>
            <VideoIcon position={[-4, y, 0]} />
            <Text3D
              font={"/fonts/Inter-Bold.json"}
              position={[-2, y - 0.9, 0]}
              size={0.2}
            >
              Video Lektionen (~5m)
              <meshStandardMaterial color="#FAFAFA" />
            </Text3D>
          </>
        ))}

        {/* Quiz Icons */}
        {[2, 0, -2].map((y, i) => (
          <>
            <QuestionIcon key={`quiz-${i}`} position={[4, y, 0]} />
            <Text3D
              key={`quiz-label-${i}`}
              font={"/fonts/Inter-Bold.json"}
              position={[2, y - 0.9, 0]}
              size={0.2}
            >
              Quiz
              <meshStandardMaterial color="#FAFAFA" />
            </Text3D>
          </>
        ))}

        {/* Connections */}
        {[2, 0, -2].map((y, i) => (
          <>
            <NeonTube
              key={`tube-1-${i}`}
              points={[
                new THREE.Vector3(-6, 0, 0),
                new THREE.Vector3(-4, 0, 0),
                new THREE.Vector3(-2, y, 0),
              ]}
            />
            <NeonTube
              key={`tube-2-${i}`}
              points={[
                new THREE.Vector3(-2, y, 0),
                new THREE.Vector3(0, y, 0),
                new THREE.Vector3(2, y, 0),
              ]}
            />
          </>
        ))}
      </group>
    </>
  );
}
