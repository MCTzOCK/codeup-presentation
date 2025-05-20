/**
 * src/slides/AMainSlide.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import { SlideEffect } from "../components/SlideEffects.tsx";
import Slide from "../components/Slide.tsx";
import { Center, Flex, Heading, Stack } from "@chakra-ui/react";

export default function AMainSlide() {
  return (
    <>
      <Slide>
        <Flex
          w={"100%"}
          h={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack gap={6}>
            <Heading
              color={"brand.500"}
              fontSize={"8xl"}
              fontWeight={900}
              w={"100%"}
              textAlign={"center"}
            >
              CodeUp
            </Heading>
            <Heading w={"100%"} textAlign={"center"}>
              Ein Projekt von Ben Siebert
            </Heading>
          </Stack>
        </Flex>
      </Slide>
    </>
  );
}
