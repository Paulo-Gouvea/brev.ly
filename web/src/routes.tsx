import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { Redirect } from "./pages/redirect"
import { NotFound } from "./pages/not-found"

export const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/:tipo', element: <Redirect /> },
    { path: '*', element: <NotFound /> },
])