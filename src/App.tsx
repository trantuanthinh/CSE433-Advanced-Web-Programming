import React from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {ContextProvider, useMyContext} from "./Context";
import AGGrid from "./components/AGGrid";
import MUIDataGrid from "./components/MUIDataGrid";
import Cart from "./components/cart/Cart";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/layouts/Layout";
import SignIn from "./components/layouts/auth/SignIn";
import SignUp from "./components/layouts/auth/SignUp";
import MainLayout from "./components/layouts/main-layout/MainLayout";
import Search from "./components/search/Search";

const AdminRoute = ({element}: {element: JSX.Element;}) => {
    const {state: {user}} = useMyContext();

    if (!user) {
        console.warn("User is not logged in. Redirecting to sign-in.");
        return <Navigate to="/sign-in" replace />;
    }

    if (user.role !== "admin") {
        console.warn("User does not have admin privileges. Redirecting to home.");
        return <Navigate to="/" replace />;
    }

    return element;
};


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "home", element: <MainLayout />},
            {path: "sign-in", element: <SignIn />},
            {path: "sign-up", element: <SignUp />},
            {path: "cart", element: <Cart />},
            {path: "search/:query", element: <Search />},
            {path: "products", element: <MainLayout />},
            {path: "news", element: <MUIDataGrid />},
        ],
    },
    {
        path: "admin",
        element: <AdminRoute element={<Dashboard />} />,
        children: [
            {path: "categories", element: <MUIDataGrid />},
            {path: "products", element: <AGGrid />},
        ],
    },
]);

function App() {
    return (
        <React.StrictMode>
            <ContextProvider>
                <RouterProvider router={router} />;
            </ContextProvider>
        </React.StrictMode>
    );
}

export default App;
