import { lazy } from "react";
const CurryQuestionLazy = lazy(() =>
    import("../../pages/curry-question-3/CurryQuestion")
);
const ToggleQuestion1Lazy = lazy(() =>
    import("../../pages/toggle-question-1/ToggleQuestion")
);
const SamplerQuestion2Lazy = lazy(() =>
    import("../../pages/sampler-question-2/SamplerQuestion")
);
const StartAndStopQuestion1Lazy = lazy(() =>
    import("../../pages/start-and-stop-timer/StartAndStopMethord1")
);
const CurryQuestion4 = lazy(() =>
    import("../../pages/curry-question-4/CurryQuestion4")
);
const CurryQuestion5 = lazy(() =>
    import("../../pages/curry-question-5/CurryQuestion5")
);

export {
    CurryQuestionLazy,
    ToggleQuestion1Lazy,
    SamplerQuestion2Lazy,
    StartAndStopQuestion1Lazy,
    CurryQuestion4,
    CurryQuestion5,
};
