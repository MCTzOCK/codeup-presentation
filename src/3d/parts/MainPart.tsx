/**
 * src/3d/parts/MainPart.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import { Text } from "@react-three/drei";

export default function MainPart() {
  return (
    <group position={[0, 0, 0]}>
      <Text
        position={[0, 1, 0]}
        fontSize={1}
        color="#F7DE1F"
        anchorX="center"
        anchorY="middle"
        font={"/fonts/Inter-Bold.ttf"}
      >
        CodeUp
      </Text>
      <Text
        position={[0, -0.25, 0]}
        fontSize={0.6}
        color="#FAFAFA"
        anchorX="center"
        anchorY="middle"
        font={"/fonts/Inter-Bold.ttf"}
      >
        Ein Projekt von Ben Siebert
      </Text>
    </group>
  );
}
