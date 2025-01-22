import React, {useEffect, useState} from "react";
import {IoMdCreate, IoMdTrash} from "react-icons/io";
import {fetchCategoryList} from "../../stimulate-api/stimulate-api";
import {CategoryType} from "../../types/CategoryType";

const CategoryList: React.FC = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        fetchCategoryList().then((data) => setCategories(data));
    }, []);

    const handleDelete = (id: number) => {
        const filteredCategories = categories.filter((category) => category.id !== id);
        setCategories(filteredCategories);
        alert(`Category with ID ${id} deleted.`);
    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <table className="table-auto w-full text-left border-collapse">
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
                                    onClick={() => alert(`Edit Category ID: ${category.id}`)}
                                >
                                    <IoMdCreate />
                                </button>
                                <button
                                    className="text-red-500 hover:underline"
                                    onClick={() => handleDelete(category.id)}
                                >
                                    <IoMdTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryList;
