import axios from "axios";
import {useEffect, useState} from "react";
import {IoMdTrash} from "react-icons/io";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ProductType} from "../../types/ProductType";
import DataTable from "../shared/DataTable";

export default function ProductList() {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/Products`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Failed to load products.");
        }
    };

    const handleDelete = async (id: number) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete product with ID ${id}?`);
        if (!confirmDelete) return;

        try {
            await axios.delete(`${import.meta.env.VITE_APP_API_URL}/Products/${id}`);
            toast.success(`Product with ID ${id} deleted.`);
            await getProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
            toast.error("Failed to delete product.");
        }
    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <p>aaaaaaaaaaa</p>
            <DataTable columns={[
                {field: 'id', headerName: '#', width: 50},
                {field: 'name', headerName: 'Name', width: 200},
                {
                    field: 'actions',
                    headerName: 'Actions',
                    width: 100,
                    renderCell: (params) => (
                        <div className="flex items-center gap-2">
                            <button onClick={() => handleDelete(params.row.id)} className="text-red-500 hover:underline">
                                <IoMdTrash size={20} />
                            </button>
                        </div>
                    ),
                },
            ]} products={products} />
            <p>aaaaaaaaaaa</p>
            <table className="table-auto w-full text-left border-collapse">
                <thead>
                    <tr className="border-b bg-gray-100">
                        <th className="p-2">#</th>
                        <th className="p-2">Name</th>
                        <th className="p-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.id} className="border-b">
                                <td className="p-2">{product.id}</td>
                                <td className="p-2">{product.name}</td>
                                <td className="p-2 text-center">
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        <IoMdTrash />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3} className="text-center p-4 text-gray-500">
                                No products available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
