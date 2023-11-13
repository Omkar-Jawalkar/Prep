import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Mainpage from "../pages/mainpage/Mainpage";
import { CurryQuestionLazy } from "../components/LazyLoadComponents/LazyLoadComponents";

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
]);

export default router;
