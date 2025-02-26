import {useForm} from "react-hook-form";
import CategoryTitle from "../../shared/CategoryTitle";

type SignUpFormInputs = {
    name: string;
    email: string;
    reEmail: string;
    password: string;
    rePassword: string;
};

export default function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isSubmitting},
    } = useForm<SignUpFormInputs>({mode: "onBlur"});

    const onSubmit = async (data: SignUpFormInputs) => {
        console.log("Form Data:", data);
    };

    const email = watch("email");
    const password = watch("password");

    return (
        <div className="p-14 bg-white rounded-lg">
            <CategoryTitle title="Đăng Ký" />

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-500">
                        Hãy ĐĂNG KÝ thành viên để nhận được những ưu đãi và thông tin khuyến mãi từ chúng tôi
                    </p>
                </div>

                <div>
                    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                        <div className="mb-4">
                            <label className="block font-medium">Họ và Tên</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded mt-1"
                                {...register("name", {required: "Họ và Tên là bắt buộc"})}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border rounded mt-1"
                                {...register("email", {required: "Email là bắt buộc"})}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium">Xác nhận Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border rounded mt-1"
                                {...register("reEmail", {
                                    required: "Xác nhận Email là bắt buộc",
                                    validate: (value) => value === email || "Email không khớp",
                                })}
                            />
                            {errors.reEmail && <p className="text-red-500 text-sm">{errors.reEmail.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium">Mật khẩu</label>
                            <input
                                type="password"
                                className="w-full p-2 border rounded mt-1"
                                {...register("password", {
                                    required: "Mật khẩu là bắt buộc",
                                    minLength: {value: 6, message: "Mật khẩu phải có ít nhất 6 ký tự"},
                                })}
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium">Xác nhận Mật khẩu</label>
                            <input
                                type="password"
                                className="w-full p-2 border rounded mt-1"
                                {...register("rePassword", {
                                    required: "Xác nhận Mật khẩu là bắt buộc",
                                    validate: (value) => value === password || "Mật khẩu không khớp",
                                })}
                            />
                            {errors.rePassword && <p className="text-red-500 text-sm">{errors.rePassword.message}</p>}
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between items-center text-sm">
                            <button
                                type="submit"
                                className="w-sm bg-[#662d91] text-white p-2 rounded disabled:opacity-50"
                                disabled={isSubmitting}>
                                {isSubmitting ? "Đang đăng ký..." : "Đăng Ký"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
