import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <Login/>
        )
    }
]);

export default mainRouter;