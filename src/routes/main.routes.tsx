import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <Login/>
        )
    },
    {
        path: "/home",
        element: (
            <Home/>
        )
    }
]);

export default mainRouter;