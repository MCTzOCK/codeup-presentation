/**
 * src/ThreeDMain.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import UIOverlay from "./UIOverlay.tsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import CameraRig from "./CameraRig.tsx";
import { cameraPositions } from "./cameraPositions.ts";
import Scene from "./Scene.tsx";

export default function ThreeDMain() {
  const [slideIndex, setSlideIndex] = React.useState(0);

  const next = () =>
    setSlideIndex((i) => Math.min(i + 1, cameraPositions.length - 1));
  const prev = () => setSlideIndex((i) => Math.max(i - 1, 0));

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Stars />
        <Scene />
        <CameraRig slideIndex={slideIndex} />

        <OrbitControls />
      </Canvas>
      <UIOverlay next={next} prev={prev} />
    </>
  );
}
