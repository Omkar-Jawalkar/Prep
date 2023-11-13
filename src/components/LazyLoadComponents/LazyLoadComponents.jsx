import { lazy } from "react";
const CurryQuestionLazy = lazy(() =>
    import("../../pages/curry-question-3/CurryQuestion")
);

// TODO : ADD COMPONENTS WITH LAZY LOADING HERE

export { CurryQuestionLazy };
