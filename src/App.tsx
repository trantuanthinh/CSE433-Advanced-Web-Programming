import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AGGrid from "./components/AGGrid";
import MUIDataGrid from "./components/MUIDataGrid";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/layouts/Layout";
import SignIn from "./components/layouts/auth/SignIn";
import SignUp from "./components/layouts/auth/SignUp";
import MainLayout from "./components/layouts/main-layout/MainLayout";
import Search from "./components/search/Search";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "sign-in", element: <SignIn />},
            {path: "sign-up", element: <SignUp />},
            {path: "search/:query", element: <Search />},
            {path: "products", element: <MainLayout />},
            {path: "news", element: <MUIDataGrid />},
        ],
    },
    {
        path: "admin",
        element: <Dashboard />,
        children: [
            {path: "categories", element: <MUIDataGrid />},
            {path: "products", element: <AGGrid />},
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
