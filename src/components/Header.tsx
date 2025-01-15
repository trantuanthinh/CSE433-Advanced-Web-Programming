import Banner from "./Banner";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <>
            <div className="p-4 grid grid-cols-3 grid-rows-1 bg-[#2c3e50] text-white gap-4">
                <div>
                    <p>Hotline: <span className="font-bold">0968 159 239 - 08.38 409 098</span></p>
                </div>
                <div>
                    <p>Địa chỉ: <span className="font-bold">01 Nguyễn Cửu Vân, Bình Thạnh, TP.HCM </span></p>
                </div>
                <div>
                    <p><span className="font-bold">Đăng nhập</span> hoặc <span className="font-bold">Tạo tài khoản mới</span></p>
                </div>
            </div>
            <Banner />
            <NavBar />
        </>
    );
}
