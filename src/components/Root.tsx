/**
 * src/components/Root.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import { SlideView } from "./types/SlideView.ts";
import { Box, HStack, IconButton } from "@chakra-ui/react";
import Slide from "./Slide.tsx";
import type { ReactElement } from "react";
import {
  FaCaretLeft,
  FaCaretRight,
  FaMaximize,
  FaMinimize,
} from "react-icons/fa6";
import * as Effects from "./SlideEffects.tsx";
import * as BG from "./AnimatedBackground.tsx";

export default function Root(props: {
  slides: { view: ReactElement; effect: Effects.SlideEffect }[];
}) {
  const [slide, setSlide] = React.useState(0);
  const [view, setView] = React.useState<SlideView>(SlideView.SLIDE);
  const [fullscreen, setFullscreen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        if (slide > 0) {
          setSlide(slide - 1);
        }
      } else if (event.key === "ArrowRight" || event.key === " ") {
        if (slide < props.slides.length - 1) {
          setSlide(slide + 1);
        }
      } else if (event.key === "Escape") {
        if (fullscreen) {
          document.exitFullscreen();
          setFullscreen(false);
        }
      } else if (event.key === "f") {
        if (fullscreen) {
          document.exitFullscreen();
          setFullscreen(false);
        } else {
          document.documentElement.requestFullscreen();
          setFullscreen(true);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slide, fullscreen, props.slides.length]);

  return (
    <>
      <Box
        w={"100%"}
        h={"100vh"}
        overflow={"hidden"}
        position={"relative"}
        p={2}
      >
        {view === SlideView.OVERVIEW && <></>}
        {view === SlideView.SLIDE && (
          <>
            <BG.AnimatedBackground1 />
            {props.slides.map((sl, index) => (
              <>
                {sl.effect === Effects.SlideEffect.FLIP ? (
                  <Effects.Effect3DFlip index={index} slide={slide}>
                    {sl.view}
                  </Effects.Effect3DFlip>
                ) : sl.effect === Effects.SlideEffect.CURTAIN_REVEAL ? (
                  <Effects.EffectCurtainReveal index={index} slide={slide}>
                    {sl.view}
                  </Effects.EffectCurtainReveal>
                ) : sl.effect === Effects.SlideEffect.ZOOM ? (
                  <Effects.EffectZoom index={index} slide={slide}>
                    {sl.view}
                  </Effects.EffectZoom>
                ) : (
                  sl.view
                )}
              </>
            ))}
            <HStack
              id={"controls"}
              pos={"fixed"}
              bottom={4}
              right={6}
              gap={4}
              w={"fit-content"}
              bg={"transparent"}
              zIndex={100}
            >
              <IconButton
                aria-label={"Previous"}
                icon={<FaCaretLeft />}
                variant={"outline"}
                rounded={"full"}
                onClick={() => {
                  if (slide > 0) {
                    setSlide(slide - 1);
                  }
                }}
                isDisabled={slide === 0}
              />
              <IconButton
                aria-label={"Next"}
                icon={<FaCaretRight />}
                variant={"outline"}
                rounded={"full"}
                onClick={() => {
                  if (slide < props.slides.length - 1) {
                    setSlide(slide + 1);
                  }
                }}
                isDisabled={slide === props.slides.length - 1}
              />
              <IconButton
                aria-label={"Fullscreen"}
                icon={fullscreen ? <FaMinimize /> : <FaMaximize />}
                variant={"outline"}
                rounded={"full"}
                onClick={() => {
                  if (fullscreen) {
                    document.exitFullscreen();
                  } else {
                    document.documentElement.requestFullscreen();
                  }
                  setFullscreen(!fullscreen);
                }}
              />
            </HStack>
          </>
        )}
      </Box>
    </>
  );
}
