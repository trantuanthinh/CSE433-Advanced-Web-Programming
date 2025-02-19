import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MUIDataGrid from "./components/MUIDataGrid";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/layouts/Layout";
import MainLayout from "./components/layouts/main-layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "products", element: <MainLayout />},
            {path: "news", element: <MUIDataGrid />},
            {
                path: "admin",
                element: <Dashboard />,
                children: [
                    {path: "categories", element: <MUIDataGrid />},
                    {path: "products", element: <MUIDataGrid />},
                ],
            },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
