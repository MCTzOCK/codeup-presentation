import * as React from "react";
import Root from "./components/Root.tsx";
import { SlideEffect } from "./components/SlideEffects.tsx";
import AMainSlide from "./slides/AMainSlide.tsx";

export default function App() {
  return (
    <Root
      slides={[
        {
          view: <AMainSlide />,
          effect: SlideEffect.ZOOM,
        },
      ]}
    ></Root>
  );
}
