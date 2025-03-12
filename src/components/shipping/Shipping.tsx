import axios from "axios";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

type OrderType = {
    id: number; // Ensure id is included
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

    const [orders, setOrders] = useState<OrderType[]>([]);

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/Shipping`);
            setOrders(response.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    const onSubmit = async (data: Omit<OrderType, "id">) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/Shipping`, data);
            if (res.status === 201) {
                toast.success("Shipping placed successfully!");
                await getOrders();
                reset();
            }
        } catch (error) {
            console.error("Error submitting order:", error);
            toast.error("Failed to place order. Please try again.");
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
                        {...register("phoneNumber", {required: "Phone Number is required"})}
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

            {/* Display order details */}
            {orders.length > 0 && (
                <div className="mt-6 p-4 bg-gray-100 rounded">
                    <h2 className="text-lg font-semibold">Order Summary</h2>
                    {orders.map((order) => (
                        <div key={order.id} className="border-b last:border-0 pb-2 mb-2">
                            <p>Name: {order.recipientName}</p>
                            <p>Phone: {order.phoneNumber}</p>
                            <p>Address: {order.address}</p>
                            <p>Note: {order.note || "N/A"}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
