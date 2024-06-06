import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Mainpage from "../pages/mainpage/Mainpage";
import {
    CurryQuestionLazy,
    ToggleQuestion1Lazy,
    SamplerQuestion2Lazy,
    StartAndStopQuestion1Lazy,
    CurryQuestion4,
    CurryQuestion5,
    MemoizeQuestion6,
    MethodChaining8,
    AnimateProgressBar8,
    PolfillForBind,
} from "../components/LazyLoadComponents/LazyLoadComponents";

import Timetable from "../pages/timetable/Timetable";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainpage />,
    },
    {
        path: "/curry-question",
        element: (
            <Suspense fallback={<div>SPINNERRRR</div>}>
                <CurryQuestionLazy />
            </Suspense>
        ),
    },
    {
        path: "/toggle-question",
        element: (
            <Suspense fallback={<div>SPINNERRRR</div>}>
                <ToggleQuestion1Lazy />
            </Suspense>
        ),
    },
    {
        path: "/sampler-question",
        element: (
            <Suspense fallback={<div>SPINNERRRR</div>}>
                <SamplerQuestion2Lazy />
            </Suspense>
        ),
    },
    {
        path: "/start-and-stop-timer-question",
        element: (
            <Suspense fallback={<div>SPINNERRRR</div>}>
                <StartAndStopQuestion1Lazy />
            </Suspense>
        ),
    },
    {
        path: "/curry-question-4",
        element: (
            <Suspense fallback={<div>SPINNERRRR</div>}>
                <CurryQuestion4 />
            </Suspense>
        ),
    },
    {
        path: "/curry-question-5",
        element: (
            <Suspense fallback={<div>SPINNERRRR</div>}>
                <CurryQuestion5 />
            </Suspense>
        ),
    },
    {
        path: "/memoize-question-6",
        element: (
            <Suspense fallback={<div>SPINNERRRR</div>}>
                <MemoizeQuestion6 />
            </Suspense>
        ),
    },
    {
        path: "/method-chaining-8",
        element: (
            <Suspense fallback={<div>SPINNERRRR</div>}>
                <MethodChaining8 />
            </Suspense>
        ),
    },
    {
        path: "/animate-progressbar-8",
        element: (
            <Suspense fallback={<div>SPINNERRRR</div>}>
                <AnimateProgressBar8 />
            </Suspense>
        ),
    },
    {
        path: "/polyfill-for-bind",
        element: (
            <Suspense fallback={<div>SPINNERRRR</div>}>
                <PolfillForBind />
            </Suspense>
        ),
    },
    {
        path: "/timetable",
        element: (
            <Suspense fallback={<div>SPINNERRRR</div>}>
                <Timetable />
            </Suspense>
        ),
    },
]);

export default router;
