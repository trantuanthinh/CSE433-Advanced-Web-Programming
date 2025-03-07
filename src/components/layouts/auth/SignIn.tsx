import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {useMyContext} from "../../../Context";
import CategoryTitle from "../../shared/CategoryTitle";

type SignInFormInputs = {
    email: string;
    password: string;
};

export default function SignIn() {
    const {state: {user}, dispatch} = useMyContext();

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<SignInFormInputs>({mode: "onBlur"});

    const onSubmit = async (data: SignInFormInputs) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/Users?email=${data.email}&password=${data.password}`);
            const userData = await res.json();
            if (userData.length) {
                dispatch({type: "SIGN-IN", payload: userData[0]});
            } else {
                console.log("User doesn't exist");
            }
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    };

    return (
        <div className="p-14 bg-white rounded-lg">
            <CategoryTitle title="Đăng Nhập" />

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-500">
                        Nếu bạn đã có Tài khoản, hãy Đăng Nhập để sử dụng dịch vụ của chúng tôi một cách tốt nhất
                    </p>
                </div>

                <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                    <div className="mb-4">
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded mt-1"
                            {...register("email", {
                                required: "Email là bắt buộc",
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded mt-1"
                            {...register("password", {
                                required: "Mật khẩu là bắt buộc",
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <Link to="/forgot-password" className="text-[#662d91] hover:underline">
                            Quên mật khẩu?
                        </Link>
                        <button
                            type="submit"
                            className="w-sm bg-[#662d91] text-white p-2 rounded disabled:opacity-50"
                            disabled={isSubmitting}>
                            {isSubmitting ? "Signing In..." : "Sign In"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

