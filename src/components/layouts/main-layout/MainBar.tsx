import {useEffect, useState} from "react";
import {fetchProductList} from "../../../stimulate-api/stimulate-api";
import {ProductType} from "../../../types/ProductType";
import ProductBlock from "../../products/ProductBlock";

export default function MainBar() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductList();
                setProducts(data);
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
                <>
                    <section>
                        <ProductBlock title="Khai trương hồng phát" products={products} />
                    </section>
                    <section>
                        <ProductBlock title="Sản phẩm khuyến mãi" products={products} />
                    </section>
                    <section className="flex justify-center items-center gap-4 py-4">
                        <img src="https://placehold.co/400x200" alt="" />
                        <img src="https://placehold.co/400x200" alt="" />
                    </section>
                    <section>
                        <ProductBlock title="Hoa bó" products={products} />
                    </section>
                </>
            )}
        </>
    );
}
