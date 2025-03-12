import {IoIosSettings} from "react-icons/io";
import {IoMenu, IoTimerOutline} from "react-icons/io5";
import {MdKeyboardArrowDown} from "react-icons/md";
import {Link, Outlet} from "react-router-dom";

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
                    <div id="dashboardDropdown" className="flex flex-col pl-6 mt-2 space-y-2">
                        <Link to="/admin/categories" className="py-1 hover:bg-gray-100 cursor-pointer">
                            Categories
                        </Link>
                        <Link to="/admin/products" className="py-1 hover:bg-gray-100 cursor-pointer">
                            Products
                        </Link>
                    </div>
                </section>

                {/* Main Content */}
                <section className="col-span-8 col-start-3 bg-[#edf1f5] min-h-screen">
                    <Outlet />
                </section>
            </main>
            {/* <section className="w-full">
                <TodoList />
            </section> */}
        </>
    );
}
