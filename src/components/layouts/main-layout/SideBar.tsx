import {useEffect, useState} from "react";
import {fetchProductList} from "../../../stimulate-api/stimulate-api";
import {ProductType} from "../../../types/ProductType";
import ProductSideBlock from "../../products/ProductSideBlock";

export default function SideBar() {
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
                        <ProductSideBlock title="Sản phẩm khuyến mãi" products={products} />
                    </section>
                    <section></section>
                    <section>
                        <ProductSideBlock title="Sản phẩm vừa xem" products={products} />
                    </section>
                </>
            )}
        </>
    );
}
