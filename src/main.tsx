import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage, RegisterPage } from "./components/pages";
import { PrivateRoute } from "./components/organisms";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PrivateRoute>
                <h1>Hola</h1>
            </PrivateRoute>
        ),
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
