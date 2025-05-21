/**
 * src/3d/Scene.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import { OrbitControls, Stars, Text } from "@react-three/drei";
import * as THREE from "three";
import MainPart from "./parts/MainPart.tsx";
import ComponentPart from "./parts/ComponentPart.tsx";
import WebsitePartLearning from "./parts/WebsitePartLearning.tsx";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import WebLearning from "./parts/WebLearning.tsx";

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.8}
          luminanceSmoothing={0.9}
          intensity={1.5}
        />
      </EffectComposer>
      <MainPart />
      <ComponentPart />
      <WebLearning />
    </>
  );
}
