import axios from "axios";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

type OrderType = {
    recipientName: string;
    phoneNumber: string;
    address: string;
    note?: string;
};

export default function Shipping() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
    } = useForm<OrderType>({mode: "onBlur"});
    const [orders, setOrders] = useState<OrderType | null>(null);

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/Orders`);
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = async (data: OrderType) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/Orders`, data);
            if (res.status == 201) {
                toast.success("Done");
            }
            await getOrders();
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">Shipping</h1>
            <form className="flex flex-col gap-4" noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        placeholder="Recipient Name"
                        className="w-full p-2 border rounded"
                        {...register("recipientName", {required: "Recipient Name is required"})}
                    />
                    {errors.recipientName && <p className="text-red-500 text-sm">{errors.recipientName.message}</p>}
                </div>

                <div>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full p-2 border rounded"
                        {...register("phoneNumber", {
                            required: "Phone Number is required",
                        })}
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Address"
                        className="w-full p-2 border rounded"
                        {...register("address", {required: "Address is required"})}
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                </div>

                <div>
                    <textarea placeholder="Note (Optional)" className="w-full p-2 border rounded" {...register("note")} />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-emerald-500 text-white p-2 rounded hover:bg-emerald-600 transition">
                    {isSubmitting ? "Ordering..." : "Order"}
                </button>
            </form>

            {/* Display order details (optional) */}
            {orders && (
                <div className="mt-6 p-4 bg-gray-100 rounded">
                    <h2 className="text-lg font-semibold">Order Summary</h2>
                    <p>
                        <strong>Name:</strong> {orders.recipientName}
                    </p>
                    <p>
                        <strong>Phone:</strong> {orders.phoneNumber}
                    </p>
                    <p>
                        <strong>Address:</strong> {orders.address}
                    </p>
                    <p>
                        <strong>Note:</strong> {orders.note || "N/A"}
                    </p>
                </div>
            )}
        </div>
    );
}
