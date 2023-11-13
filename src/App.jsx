import { RouterProvider } from "react-router-dom";

import router from "./routes/Router";
function App() {
    return (
        <div className="bg-red-100">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
