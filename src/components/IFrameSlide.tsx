/**
 * src/components/IFrameSlide.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 22.05.25
 */

import * as React from "react";
import { SlideEffect } from "./SlideEffects.tsx";
import { Box, Flex } from "@chakra-ui/react";

export default function IFrameSlide(props: { url: string }) {
  return (
    <Flex
      w={"100%"}
      h={"100%"}
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        rounded={"xl"}
        maxW={"1920"}
        maxHeight={"1080"}
        p={0}
        flex={1}
        w={"100%"}
        h={"100%"}
      >
        <iframe
          src={props.url}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "var(--chakra-radii-xl)",
          }}
        />
      </Box>
    </Flex>
  );
}

IFrameSlide.getSlide = (url: string) => {
  return {
    view: <IFrameSlide url={url} />,
    effect: SlideEffect.ZOOM,
  };
};
