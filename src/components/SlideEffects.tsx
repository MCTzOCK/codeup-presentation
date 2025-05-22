/**
 * src/components/SlideEffects.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import { motion } from "framer-motion";

export function Effect3DFlip(props: {
  children: React.ReactNode;
  index: number;
  slide: number;
}) {
  return (
    <motion.div
      key={props.index}
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        padding: "var(--chakra-space-4)",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        zIndex: 10,
        visibility: props.index === props.slide ? "visible" : "hidden",
      }}
      initial={{
        opacity: 0,
        rotateY: -90,
        scale: 0.95,
      }}
      animate={{
        opacity: props.index === props.slide ? 1 : 0,
        rotateY: props.index === props.slide ? 0 : 90,
        scale: props.index === props.slide ? 1 : 0.95,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {props.children}
    </motion.div>
  );
}

export function EffectCurtainReveal(props: {
  children: React.ReactNode;
  index: number;
  slide: number;
}) {
  return (
    <motion.div
      key={props.index}
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        padding: "var(--chakra-space-4)",
        overflow: "hidden",
        zIndex: 10,
        visibility: props.index === props.slide ? "visible" : "hidden",
      }}
      initial={{
        clipPath: "inset(50% 0% 50% 0%)",
        opacity: 0.2,
        scale: 1.05,
      }}
      animate={{
        clipPath:
          props.index === props.slide
            ? "inset(0% 0% 0% 0%)"
            : "inset(50% 0% 50% 0%)",
        opacity: props.index === props.slide ? 1 : 0.2,
        scale: props.index === props.slide ? 1 : 1.05,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      {props.children}
    </motion.div>
  );
}

export function EffectZoom(props: {
  children: React.ReactNode;
  index: number;
  slide: number;
}) {
  return (
    <motion.div
      key={props.index}
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        padding: "var(--chakra-space-4)",
        zIndex: 10,
        visibility: props.index === props.slide ? "visible" : "hidden",
      }}
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.95,
        rotateX: 10,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: props.index === props.slide ? 1 : 0,
        y: props.index === props.slide ? 0 : -100,
        scale: props.index === props.slide ? 1 : 1.05,
        rotateX: props.index === props.slide ? 0 : -10,
        filter: props.index === props.slide ? "blur(0px)" : "blur(10px)",
      }}
      transition={{
        duration: 0.75,
        ease: [0.25, 0.8, 0.25, 1],
      }}
    >
      {props.children}
    </motion.div>
  );
}

export enum SlideEffect {
  CURTAIN_REVEAL,
  FLIP,
  ZOOM,
}
