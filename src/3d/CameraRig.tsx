/**
 * src/3d/CameraRig.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { cameraPositions } from "./cameraPositions.ts";

export default function CameraRig({ slideIndex }: { slideIndex: number }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3());
  const lookAt = useRef(new THREE.Vector3());

  useFrame(() => {
    const { position, lookAt: lookAtPos } = cameraPositions[slideIndex];

    target.current.lerp(new THREE.Vector3(...position), 0.05);
    lookAt.current.lerp(new THREE.Vector3(...lookAtPos), 0.05);

    camera.position.copy(target.current);
    camera.lookAt(lookAt.current);
  });

  return null;
}
