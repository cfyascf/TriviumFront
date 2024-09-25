import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <Login/>
        )
    },
    {
        path: "/register",
        element: (
            <Register/>
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