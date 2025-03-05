import {Link} from "react-router-dom";
import {useMyContext} from "../../Context";
import Banner from "./Banner";
import NavBar from "./NavBar";

export default function Header() {
    const {state: {user}, dispatch} = useMyContext();

    return (
        <>
            <div className="p-4 grid grid-cols-3 grid-rows-1 bg-[#2c3e50] text-white gap-4">
                <p>Hotline: <span className="font-bold">0968 159 239 - 08.38 409 098</span></p>
                <p>Địa chỉ: <span className="font-bold">01 Nguyễn Cửu Vân, Bình Thạnh, TP.HCM </span></p>
                {user ? (
                    <div>
                        <span className="font-bold">Xin chào, {user.name}</span>
                        <button onClick={() => dispatch({type: "LOGOUT"})}>Logout</button>
                    </div>
                ) : (
                    <div className="flex space-x-2">
                        <Link to="/sign-in">
                            <span className="font-bold">Đăng nhập</span>
                        </Link>
                        <span>hoặc</span>
                        <Link to="/sign-up">
                            <span className="font-bold">Tạo tài khoản mới</span>
                        </Link>
                    </div>
                )}
            </div>
            <Banner />
            <NavBar />
        </>
    );
}

