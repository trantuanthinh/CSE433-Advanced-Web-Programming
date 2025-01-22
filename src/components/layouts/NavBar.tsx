import {useEffect, useState} from "react";
import {fetchCategoryList} from "../../stimulate-api/stimulate-api";
import {CategoryType} from "../../types/CategoryType";

export default function NavBar() {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCategoryList();
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <nav className="flex flex-row bg-[#662d91] items-center justify-center gap-5 font-bold text-white uppercase">
                    {categories.map((category) => (
                        <a href={category.path} className="hover:bg-[#793aa9] p-2.5 cursor-pointer">
                            {category.name}
                        </a>
                    ))}
                </nav>
            )}
        </>
    );
}
