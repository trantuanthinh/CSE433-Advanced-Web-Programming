export default function Footer() {
    return (
        <>
            <div className="grid grid-cols-4 grid-rows-1 gap-4 px-12">
                <div>
                    <p className="font-bold uppercase text-xl py-3">Hệ thống</p>
                    <hr className="w-16 h-1 bg-[#662d91]" />
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:underline">Hoa sinh nhật</a>
                        <a href="#" className="hover:underline">Hoa cưới</a>
                        <a href="#" className="hover:underline">Hoa chúc mừng</a>
                        <a href="#" className="hover:underline">Chúc mừng</a>
                        <a href="#" className="hover:underline">Chủ đề</a>
                        <a href="#" className="hover:underline">Thiết kế</a>
                        <a href="#" className="hover:underline">Hoa theo thể loại</a>
                        <a href="#" className="hover:underline">Quà tặng</a>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="font-bold uppercase text-xl py-3">Công ty</p>
                        <hr className="w-16 h-1 bg-[#662d91]" />
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="hover:underline">Giới thiệu</a>
                            <a href="#" className="hover:underline">Tin tức</a>
                            <a href="#" className="hover:underline">Tuyển dụng</a>
                            <a href="#" className="hover:underline">Chính sách thành viên</a>
                            <a href="#" className="hover:underline">Chương trình khuyến mãi</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="font-bold uppercase text-xl py-3">Công ty</p>
                        <hr className="w-16 h-1 bg-[#662d91]" />
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="hover:underline">Hướng dẫn đặt hàng</a>
                            <a href="#" className="hover:underline">Phương thức thanh toán</a>
                            <a href="#" className="hover:underline">Điều khoản mua hàng</a>
                            <a href="#" className="hover:underline">Phí vận chuyển</a>
                            <a href="#" className="hover:underline">Ý nghĩa các loài hoa</a>
                            <a href="#" className="hover:underline">Chăm sóc và bảo quản hoa</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="font-bold uppercase text-xl py-3">Violet on Wednesday</p>
                        <hr className="w-16 h-1 bg-[#662d91]" />
                        <div className="flex flex-col space-y-2">
                            <p><span className="font-bold">Địa chỉ:</span> 01 Nguyễn Cửu Vân Bình Thành, TP.HCM</p>
                            <p><span className="font-bold">Điện thoại:</span> 08 38 40 90 92</p>
                            <p><span className="font-bold">Hotline:</span> 0968 159 239</p>
                            <p className="font-bold">Mọi ý kiến xin vui lòng gửi về</p>
                            <p>support@violetonwednesday.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
