import {FaShoppingCart} from "react-icons/fa";
import SearchBox from "../shared/SearchBox";

export default function Banner() {
    return (
        <>
            <div className="flex flex-row px-40 justify-between items-center">
                <img src="/logos/logo.png" alt="Logo" />
                <SearchBox />
                <div className="grid grid-cols-2 grid-rows-2">
                    <div className="row-span-2 flex justify-center items-center">
                        <button className="bg-red-500 rounded-full h-10 w-10 flex justify-center items-center">
                            <FaShoppingCart color="white" />
                        </button>
                    </div>
                    <div>3 sản phẩm</div>
                    <div className="col-start-2 row-start-2 font-bold text-xl text-red-600">1,289,000đ</div>
                </div>
            </div>
        </>
    );
}