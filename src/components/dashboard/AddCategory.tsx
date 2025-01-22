import {useState} from "react";

export default function AddCategory() {
    const [name, setName] = useState("");

    const handleAddCategory = () => {
        if (!name.trim()) {
            alert("Category name is required.");
            return;
        }
        alert(`Category "${name}" added!`);
        setName("");
    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter category name"
                    className="border p-2 rounded w-full"
                />
                <button onClick={handleAddCategory} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add
                </button>
            </div>
        </div>
    );
}
