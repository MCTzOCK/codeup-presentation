import * as React from "react";
import Root from "./components/Root.tsx";
import { SlideEffect } from "./components/SlideEffects.tsx";
import MainSlide from "./slides/MainSlide.tsx";
import ComponentSlide from "./slides/ComponentSlide.tsx";
import ThreeDMain from "./3d/ThreeDMain.tsx";
import IFrameSlide from "./components/IFrameSlide.tsx";

export default function App() {
  return (
    <Root
      slides={[
        {
          view: <MainSlide />,
          effect: SlideEffect.ZOOM,
        },
        ...[
          "//codeup.space",
          "//codeup.space/course",
          "//codeup.space/course/html",
          "//codeup.space/course/html/642ee2fa61eb46c08414f446",
          "//codeup.space/course/js-interactive",
          "//codeup.space/course/js-interactive/66d2f70c5065d2b361b17cef",
          "//codeup.space/certificates",
          "//codeup.space/certificates/642edf2161eb46c08414ee3f",
          "//codeup.space/user-cert/64689718ef03a75f4f904a36",
          "//codeup.space/creator/studio",
          "//codeup.space/creator/studio/642edf2161eb46c08414ee3f",
          "//codeup.space/challenges",
          "//codeup.space/orgs",
          "//codeup.space/orgs/Test/dashboard",
          "//codeup.space/orgs/Test/manage",
          "//codeup.space/ideas",
          "//codeup.space/kids",
          "//incode.ben-siebert.com",
          "//codeup.space/editor",
          "//codeup.space/editor/63d63e96c7ecbd1c5d744bc9",
          "//codeup.space/snippets/my",
          "//codeup.space/projects",
          "//codeup.space/projects/672df4ecaff19c393f90e864",
          "//codeup.space/u/ben.sbrt",
          "//codeup.space/u/ben.sbrt/Beispiel-App",
          "//codeup.space/u/ben.sbrt",
          "//codeup.space/forum/post/669a0a5c4f2421b0344e302c",
          "//codeup.space/u/ben.test",
          "//codeup.space/forum/messages/682fa01c49ba63eae7fd763c?noLayout=true",
          "//codeup.space/tasks",
          "//codeup.space/planning/65b0304e91d7c5dd845d39ef",
          "//codeup.space/ai",
          "//codeup.space/search",
          "//codeup.space/dashboard/v2",
          "//codeup.space/admin",
        ].map((u) => IFrameSlide.getSlide(u)),
      ]}
    ></Root>
  );
  //return <ThreeDMain />;
}
