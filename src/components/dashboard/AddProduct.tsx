import {useForm} from "react-hook-form";
import {ProductType} from "../../types/ProductType";

export default function AddProduct() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<ProductType>({mode: "onBlur"});

    const onSubmit = async (data: ProductType) => {
        console.log("Form Data:", data);
    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
            <form className="flex flex-col items-center gap-4" noValidate onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="ID" {...register("id", {required: "ID is required"})} />
                {errors.id && <p className="text-red-500 text-sm">{errors.id.message}</p>}

                <input type="text" placeholder="Name" {...register("name", {required: "Name is required"})} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}


                <input type="number" placeholder="Price" {...register("price", {required: "Price is required"})} />
                {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

                <input type="number" placeholder="Discount" {...register("discount")} />

                <input type="url" placeholder="Image" {...register("image", {required: "Image is required"})} />
                {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}

                <input type="text" placeholder="Code" {...register("code", {required: "Code is required"})} />
                {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}

                <button type="submit" disabled={isSubmitting} className="bg-emerald-300">
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
