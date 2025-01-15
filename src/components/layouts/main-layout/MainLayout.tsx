import MainBar from "./MainBar";
import SideBar from "./SideBar";

export default function MainLayout() {
    return (
        <div className="grid grid-cols-6 grid-rows-5 gap-4">
            <div className="col-span-4">
                <MainBar />
            </div>
            <div className="col-span-2 col-start-5">
                <SideBar />
            </div>
        </div>
    );
}