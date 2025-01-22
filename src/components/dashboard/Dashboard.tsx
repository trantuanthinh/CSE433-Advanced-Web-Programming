export default function Dashboard({children}: {children: React.ReactNode;}) {
    const toggleDropdown = (id: string) => {
        const dropdown = document.getElementById(id);
        if (dropdown?.classList.contains('hidden')) {
            dropdown.classList.remove('hidden');
        } else {
            dropdown?.classList.add('hidden');
        }
    };

    return (
        <div>
            <main className="grid grid-cols-10">
                {/* Sidebar */}
                <section className="col-span-2 row-span-1 bg-[#03a0e7] text-white px-3 py-3">
                    <div className="text-xl font-semibold">
                        <span className="text-blue-500">elite</span>
                        <span className="text-gray-100">admin</span>
                    </div>
                </section>
                {/* Header */}
                <section className="flex justify-between col-span-8 col-start-3 bg-[#03a9f3] px-3 py-2 items-center">
                    <div>
                        <button>Menu Icon</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="" alt="avatar" className="w-6 h-6 rounded-full bg-gray-300" />
                        <p className="text-white text-sm">Mark</p>
                        <button>Settings Icon</button>
                    </div>
                </section>
                {/* Sidebar Menu */}
                <section className="col-span-2 row-start-2 bg-white shadow-md p-3">
                    {/* Dashboard Section */}
                    <div
                        className="grid grid-cols-6 items-center gap-2 cursor-pointer"
                        onClick={() => toggleDropdown('dashboardDropdown')}
                    >
                        <div>
                            <button>icon</button>
                        </div>
                        <div className="col-span-4 font-medium">Dashboard</div>
                        <div className="col-start-6">
                            <button>arrow</button>
                        </div>
                    </div>
                    <div id="dashboardDropdown" className="hidden pl-8 mt-2 space-y-1">
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Minimal</div>
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Analytical</div>
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Demographical</div>
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Modern</div>
                    </div>
                    {/* Apps Section */}
                    <div
                        className="grid grid-cols-6 items-center gap-2 cursor-pointer mt-4"
                        onClick={() => toggleDropdown('appsDropdown')}
                    >
                        <div>
                            <i>icon</i>
                        </div>
                        <div className="col-span-4 font-medium">Apps</div>
                        <div className="col-start-6">
                            <button>arrow</button>
                        </div>
                    </div>
                    <div id="appsDropdown" className="hidden pl-8 mt-2 space-y-1">
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Calendar</div>
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Mail</div>
                        <div className="py-1 hover:bg-gray-100 cursor-pointer">Chat</div>
                    </div>
                </section>
                {/* Main Content */}
                <section className="col-span-8 col-start-3 row-start-2 min-h-screen bg-[#edf1f5]">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm mb-4">
                        <div className="text-black text-sm font-medium">Dashboard</div>
                        <div className="flex items-center gap-3">
                            <p className="text-xs text-gray-500">Home &gt; Dashboard 1</p>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                                <i>Add Icon</i> Create New
                            </button>
                        </div>
                    </div>
                    {/* Content Area */}
                    <div className="bg-white">{children}</div>
                </section>
            </main>
        </div>
    );
}
