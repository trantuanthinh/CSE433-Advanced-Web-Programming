export default function NavBar() {
    return (
        <>
            <nav className="flex flex-row bg-[#662d91] items-center justify-center gap-5 font-bold text-white uppercase">
                <a href="#" className="hover:bg-[#793aa9] p-2.5 cursor-pointer">trang chủ</a>
                <a href="#" className="hover:bg-[#793aa9] p-2.5 cursor-pointer">hoa sinh nhật</a>
                <a href="#" className="hover:bg-[#793aa9] p-2.5 cursor-pointer">hoa tình yêu</a>
                <a href="#" className="hover:bg-[#793aa9] p-2.5 cursor-pointer">hoa chúc mừng</a>
                <a href="#" className="hover:bg-[#793aa9] p-2.5 cursor-pointer">hoa văn phòng</a>
                <a href="#" className="hover:bg-[#793aa9] p-2.5 cursor-pointer">chủ đề</a>
                <a href="#" className="hover:bg-[#793aa9] p-2.5 cursor-pointer">thiết kế</a>
                <a href="#" className="hover:bg-[#793aa9] p-2.5 cursor-pointer">thể loại</a>
                <a href="#" className="hover:bg-[#793aa9] p-2.5 cursor-pointer">quà tặng</a>
            </nav>
        </>
    );
}