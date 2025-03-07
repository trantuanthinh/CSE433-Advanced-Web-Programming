import axios from "axios";
import {useEffect, useState} from "react";
import {IoMdCreate, IoMdTrash} from "react-icons/io";
import {toast, ToastContainer} from "react-toastify";
import {CategoryType} from "../../types/CategoryType";
import EditCategory from "./EditCategory";

export default function CategoryList() {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/ProductCategories`);
            setCategories(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = (id: number) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete category with ID ${id}?`);
        if (confirmDelete) {
            axios
                .delete(`${import.meta.env.VITE_APP_API_URL}/ProductCategories/${id}`)
                .catch((error) => console.error(error));
            getCategories();
            toast.success(`Category with ID ${id} deleted.`);
        }
    };

    const handleEdit = (id: number) => {
        setEditingCategoryId(id);
    };

    const handleCloseEdit = () => {
        setEditingCategoryId(null);
    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <table className="table-auto w-full text-left">
                <thead>
                    <tr className="border-b">
                        <th className="p-2">#</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id} className="hover:bg-gray-50">
                            <td className="p-2">{category.id}</td>
                            <td className="p-2">{category.name}</td>
                            <td className="p-2">
                                <button
                                    className="text-blue-500 hover:underline mr-2"
                                    onClick={() => handleEdit(category.id)}>
                                    <IoMdCreate />
                                </button>
                                <button className="text-red-500 hover:underline" onClick={() => handleDelete(category.id)}>
                                    <IoMdTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editingCategoryId !== null && (
                <EditCategory
                    id={editingCategoryId}
                    name={categories.find((cat) => cat.id === editingCategoryId)?.name || ""}
                    onClose={handleCloseEdit}
                    categories={categories}
                    setCategories={setCategories}
                />
            )}
            <ToastContainer />
        </div>
    );
}
