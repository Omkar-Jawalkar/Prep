import { lazy } from "react";
const CurryQuestionLazy = lazy(() =>
    import("../../pages/curry-question-3/CurryQuestion")
);

export { CurryQuestionLazy };
