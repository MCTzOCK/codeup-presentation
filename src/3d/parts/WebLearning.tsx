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
        <Text3D
          font={"/fonts/Inter-Bold.json"}
          size={1}
          position={[-8, 3.5, 0]}
          onClick={() => {
            window.open("https://codeup.space/course", "_blank");
          }}
        >
          Video-Kurse
          <meshStandardMaterial color="#F7DE1F" />
        </Text3D>

        <OrbitControls />

        {/* Book - Start */}
        <BookIcon position={[-6, 0, 0]} />

        {/* Video Lessons */}
        {[2, 0, -2].map((y, i) => (
          <>
            <VideoIcon position={[0, y, 0]} />
          </>
        ))}

        {/* Quiz Icons */}
        {[2, 0, -2].map((y, i) => (
          <>
            <QuestionIcon key={`quiz-${i}`} position={[4, y, 0]} />
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
                new THREE.Vector3(4, y, 0),
              ]}
            />
          </>
        ))}
      </group>
    </>
  );
}
