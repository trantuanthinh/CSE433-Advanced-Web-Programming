import {IoIosSettings, IoMdAdd} from "react-icons/io";
import {IoAppsSharp, IoMenu, IoTimerOutline} from "react-icons/io5";
import {MdKeyboardArrowDown} from "react-icons/md";
import {Outlet} from "react-router-dom";
import AddCategory from "./AddCategory";
import AddProduct from "./AddProduct";
import CategoryList from "./CategoryList";
import TodoList from "./TodoList";

export default function Dashboard() {
    const toggleDropdown = (id: string) => {
        const dropdown = document.getElementById(id);
        dropdown?.classList.toggle("hidden");
    };

    return (
        <>
            <main className="grid grid-cols-10">
                {/* Sidebar */}
                <section className="col-span-2 bg-[#03a0e7] text-white px-4 py-4">
                    <div className="text-xl font-bold">
                        <span className="text-blue-500">elite</span>
                        <span className="text-gray-100">admin</span>
                    </div>
                </section>

                {/* Header */}
                <section className="col-span-8 col-start-3 bg-[#03a9f3] px-4 py-3 flex justify-between items-center">
                    <button>
                        <IoMenu className="text-white text-xl" />
                    </button>
                    <div className="flex items-center gap-3">
                        <img src="" alt="avatar" className="w-8 h-8 rounded-full bg-gray-300" />
                        <p className="text-white text-sm font-medium">Mark</p>
                        <button>
                            <IoIosSettings className="text-white text-xl" />
                        </button>
                    </div>
                </section>

                {/* Sidebar Menu */}
                <section className="col-span-2 bg-white shadow-md p-4">
                    {/* Dashboard Section */}
                    <div
                        className="flex items-center justify-between cursor-pointer py-2"
                        onClick={() => toggleDropdown("dashboardDropdown")}>
                        <div className="flex items-center gap-2">
                            <IoTimerOutline className="text-xl text-gray-600" />
                            <span className="font-medium">Dashboard</span>
                        </div>
                        <MdKeyboardArrowDown className="text-gray-600" />
                    </div>
                    <div id="dashboardDropdown" className="hidden pl-6 mt-2 space-y-2">
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Minimal</div>
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Analytical</div>
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Demographical</div>
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Modern</div>
                    </div>

                    {/* Apps Section */}
                    <div
                        className="flex items-center justify-between cursor-pointer py-2 mt-4"
                        onClick={() => toggleDropdown("appsDropdown")}>
                        <div className="flex items-center gap-2">
                            <IoAppsSharp className="text-xl text-gray-600" />
                            <span className="font-medium">Apps</span>
                        </div>
                        <MdKeyboardArrowDown className="text-gray-600" />
                    </div>
                    <div id="appsDropdown" className="hidden pl-6 mt-2 space-y-2">
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Calendar</div>
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Mail</div>
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Chat</div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="col-span-8 col-start-3 bg-[#edf1f5] min-h-screen">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center bg-white p-4 rounded shadow-sm mb-4">
                        <h2 className="text-gray-800 text-lg font-semibold">Dashboard</h2>
                        <div className="flex items-center gap-3">
                            <p className="text-sm text-gray-500">Home &gt; Dashboard 1</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
                                <IoMdAdd className="text-lg" /> Create New
                            </button>
                        </div>
                    </div>
                    <section className="col-span-8 col-start-3 bg-[#edf1f5] min-h-screen p-4">
                        <AddCategory />
                        <CategoryList />
                    </section>
                    <section className="col-span-8 col-start-3 bg-[#edf1f5] min-h-screen p-4">
                        <AddProduct />
                    </section>
                </section>
            </main>
            <section className="w-full">
                <TodoList />
            </section>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
}
