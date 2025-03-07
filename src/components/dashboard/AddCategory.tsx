import axios from "axios";
import {useForm} from "react-hook-form";
import {CategoryType} from "../../types/CategoryType";

export default function AddCategory() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<CategoryType>({mode: "onBlur"});

    const onSubmit = async (data: CategoryType) => {
        try {
            const res = await axios.post(import.meta.env.VITE_APP_API_URL + "/ProductCategories", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.data.ok) {
                console.log("Category added successfully");
            }
        } catch (error) {
            console.log("Error adding category:", error);
        }
    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
            <form className="flex flex-col items-center gap-4" noValidate onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="ID" {...register("id", {required: "ID is required"})} />
                {errors.id && <p className="text-red-500 text-sm">{errors.id.message}</p>}

                <input type="text" placeholder="Name" {...register("name", {required: "Name is required"})} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                <input type="text" placeholder="Path" {...register("path")} />

                <button type="submit" disabled={isSubmitting} className="bg-emerald-300">
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

