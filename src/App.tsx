import React, {lazy, Suspense} from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {ContextProvider, useMyContext} from "./Context";

const MUIDataGrid = lazy(() => import("./components/MUIDataGrid"));
const CategoryManagement = lazy(() => import("./components/admin/CategoryManagement"));
const ProductManagement = lazy(() => import("./components/admin/ProductManagement"));
const Cart = lazy(() => import("./components/cart/Cart"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Layout = lazy(() => import("./components/layouts/Layout"));
const SignIn = lazy(() => import("./components/layouts/auth/SignIn"));
const SignUp = lazy(() => import("./components/layouts/auth/SignUp"));
const MainLayout = lazy(() => import("./components/layouts/main-layout/MainLayout"));
const Search = lazy(() => import("./components/search/Search"));
const Shipping = lazy(() => import("./components/shipping/Shipping"));

const AdminRoute = ({element}: {element: JSX.Element;}) => {
    const {
        state: {user},
    } = useMyContext();

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
            {path: "", element: <MainLayout />},
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
            {path: "categories", element: <CategoryManagement />},
            {path: "products", element: <ProductManagement />},
            {path: "shipping", element: <Shipping />},
        ],
    },
]);

function App() {
    return (
        <React.StrictMode>
            <ContextProvider>
                <Suspense fallback={<div className="text-center p-5">Loading Page...</div>}>
                    <RouterProvider router={router} />
                </Suspense>
            </ContextProvider>
        </React.StrictMode>
    );
}

export default App;
