import {useState} from "react";
import {CategoryType} from "../../types/CategoryType";

export default function EditCategory({id, name}: CategoryType) {
    const [categoryName, setCategoryName] = useState(name);

    const handleUpdate = () => {
        if (!categoryName.trim()) {
            alert("Category name is required.");
            return;
        }
        alert(`Category ID: ${id} updated to "${categoryName}"!`);
    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Edit Category</h2>
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                <button
                    onClick={handleUpdate}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Update
                </button>
            </div>
        </div>
    );
};
