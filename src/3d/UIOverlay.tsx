/**
 * src/3d/UIOverlay.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 21.05.25
 */

import * as React from "react";
import { Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { useEffect } from "react";

export default function UIOverlay(props: {
  next: () => void;
  prev: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        props.next();
      } else if (event.key === "ArrowLeft") {
        props.prev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [props]);

  return (
    <>
      <Box position="fixed" bottom={4} right={4}>
        <HStack spacing={2}>
          <IconButton
            aria-label={"Previous"}
            icon={<FaCaretLeft />}
            variant={"outline"}
            rounded={"full"}
            onClick={props.prev}
          />
          <IconButton
            aria-label={"Next"}
            icon={<FaCaretRight />}
            variant={"outline"}
            rounded={"full"}
            onClick={props.next}
          />
        </HStack>
      </Box>
    </>
  );
}
