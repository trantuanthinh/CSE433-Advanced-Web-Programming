import {ProductType} from "../../../types/ProductType";
import ProductSideBlock from "../../products/ProductSideBlock";

export default function SideBar() {
    const products: ProductType[] = [
        {
            id: 1,
            name: "Khai trương hồng phát 1",
            price: 890000,
            discount: 0.5,
            image: "/flower.jpg",
            code: "VS034",
        },
        {
            id: 2,
            name: "Khai trương hồng phát 2",
            price: 890000,
            discount: 0.6,
            image: "/flower.jpg",
            code: "VS035",
        },
        {
            id: 3,
            name: "Khai trương hồng phát 3",
            price: 890000,
            image: "/flower.jpg",
            code: "VS036",
        },
    ];
    return (
        <div>
            <section>
                <ProductSideBlock title="Sản phẩm khuyến mãi" products={products} />
            </section>
            <section></section>
            <section>
                <ProductSideBlock title="Sản phẩm vừa xem" products={products} />
            </section>
        </div>
    );
}