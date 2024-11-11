import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import { CreateRoom } from "../pages/CreateRoom";
import { EnterRoom } from "../pages/EnterRoom";
import { WaitingRoom } from "../pages/WaitingRoom";
import { CreateForm } from "../pages/CreateForm";

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
    },
    {
        path: "/create-room",
        element: (
            <CreateRoom/>
        )
    },
    {
        path: "/enter-room",
        element: (
            <EnterRoom/>
        )
    },
    {
        path: "/waiting-room/:id",
        element: (
            <WaitingRoom/>
        )
    },
    {
        path: "/create-form",
        element: (
            <CreateForm/>
        )
    },
]);

export default mainRouter;