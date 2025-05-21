/**
 * src/3d/parts/ComponentPart.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import { Suspense } from "react";
import { Center } from "@chakra-ui/react";
import {
  Float,
  MeshDistortMaterial,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import { SceneItem } from "../SceneItem.tsx";

export default function ComponentPart() {
  return (
    <>
      <group position={[100, 0, 0]}>
        <directionalLight
          position={[0, 0, 10]}
          intensity={1}
          color="#ffffff"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={500}
        />
        <SceneItem
          position={[-6, 0, 0]}
          label="Mobile-App"
          description="Bessere UX auf dem Smartphone"
          type="smartphone"
          color="#66D36E"
        />
        <SceneItem
          position={[0, 0, 0]}
          label="Webseite"
          description="Herzstück von CodeUp"
          type="globe"
          color="#4DA1FF"
        />
        <SceneItem
          position={[6, 0, 0]}
          label="Infrastruktur"
          description="Backend & Hosting"
          type="server"
          color="#FF6B81"
        />
      </group>
    </>
  );
}
