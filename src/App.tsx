import * as React from "react";
import Root from "./components/Root.tsx";
import { SlideEffect } from "./components/SlideEffects.tsx";
import MainSlide from "./slides/MainSlide.tsx";
import ComponentSlide from "./slides/ComponentSlide.tsx";
import ThreeDMain from "./3d/ThreeDMain.tsx";

export default function App() {
  /*return (
    <Root
      slides={[
        {
          view: <MainSlide />,
          effect: SlideEffect.ZOOM,
        },
        {
          view: <ComponentSlide />,
          effect: SlideEffect.ZOOM,
        },
      ]}
    ></Root>
  );*/
  return <ThreeDMain />;
}
