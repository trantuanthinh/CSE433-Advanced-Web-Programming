import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchProductList} from "../../stimulate-api/stimulate-api";
import {ProductType} from "../../types/ProductType";
import ProductBlock from "../products/ProductBlock";

export default function Search() {
    const {query} = useParams();

    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductList();
                const filteredProducts = data.filter((product) =>
                    product.name.toLowerCase().includes(query?.toLowerCase() || "")
                );
                setProducts(filteredProducts);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query]);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <section>
                        <ProductBlock title={`Kết quả:  ${query}`} products={products} />
                    </section>
                </>
            )}
        </>
    );
}
