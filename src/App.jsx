import { RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import router from "./routes/Router";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className=" bg-gradient-to-b from-orange-500 w-full min-h-screen flex flex-col justify-between">
            {/* **********************************************************************************
             *
             *
             *     NAVBAR AND PROVIDER
             *
             *
             **************************************************************************************/}

            <div className="space-y-6">
                <Navbar />
                <RouterProvider router={router} />
            </div>

            {/* **********************************************************************************
             *
             *
             *   FOOTER
             *
             *
             **************************************************************************************/}
            <Footer />
        </div>
    );
}

export default App;
