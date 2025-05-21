/**
 * src/slides/ComponentSlide.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import Slide from "../components/Slide.tsx";
import { Flex, Heading, HStack } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import OrbitingObject from "../components/OrbitingObject.tsx";
import { OrbitControls, Text } from "@react-three/drei";

export default function ComponentSlide() {
  return (
    <Slide>
      <Flex
        w={"100%"}
        h={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
      >
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#a855f7" />

          {/* Infrastruktur Core */}
          <group>
            <mesh>
              <sphereGeometry args={[1, 64, 64]} />
              <meshStandardMaterial
                color="#a855f7"
                metalness={0.3}
                roughness={0.2}
                emissive="#a855f7"
                emissiveIntensity={1.2}
                transparent
                opacity={0.8}
              />
            </mesh>
            <Text
              position={[0, 1.5, 0]}
              fontSize={0.4}
              font="/fonts/Inter_28pt-Bold.ttf"
              color="#a855f7"
              anchorX="center"
              anchorY="middle"
            >
              Infrastruktur
            </Text>
          </group>

          {/* Website Cube (but stylized) */}
          <OrbitingObject
            radius={3}
            speed={0.5}
            label="Webseite"
            color="#3b82f6"
          >
            <mesh>
              <boxGeometry args={[1, 0.6, 0.6]} />
              <meshStandardMaterial
                color="#3b82f6"
                metalness={0.6}
                roughness={0.1}
                emissive="#60a5fa"
                emissiveIntensity={0.5}
              />
            </mesh>
          </OrbitingObject>

          {/* Mobile App Capsule */}
          <OrbitingObject
            radius={5}
            speed={0.8}
            phase={Math.PI}
            label="Mobile-App"
            color="#10b981"
          >
            <mesh>
              <capsuleGeometry args={[0.35, 1.2, 6, 12]} />
              <meshStandardMaterial
                color="#10b981"
                metalness={0.6}
                roughness={0.1}
                emissive="#34d399"
                emissiveIntensity={0.5}
              />
            </mesh>
          </OrbitingObject>

          <OrbitControls enablePan={false} />
        </Canvas>
      </Flex>
    </Slide>
  );
}
