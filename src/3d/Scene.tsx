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

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <MainPart />
      <ComponentPart />
    </>
  );
}
