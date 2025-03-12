import {IoMdAdd} from "react-icons/io";
import AddCategory from "../dashboard/AddCategory";
import CategoryList from "../dashboard/CategoryList";

export default function CategoryManagement() {
    return (
        <section className="col-span-8 col-start-3 bg-[#edf1f5] min-h-screen p-4">
            <div className="flex justify-between items-center bg-white p-4 rounded shadow-sm mb-4">
                <h2 className="text-gray-800 text-lg font-semibold">Dashboard</h2>
                <div className="flex items-center gap-3">
                    <p className="text-sm text-gray-500">Home &gt; Dashboard 1</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
                        <IoMdAdd className="text-lg" /> Create New
                    </button>
                </div>
            </div>
            <AddCategory />
            <CategoryList />
        </section>
    );
}
