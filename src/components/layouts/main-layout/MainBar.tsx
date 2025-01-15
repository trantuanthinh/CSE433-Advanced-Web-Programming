import {ProductType} from "../../../types/ProductType";
import ProductBlock from "../../products/ProductBlock";

export default function MainBar() {
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
            discount: 0.5,
            image: "/flower.jpg",
            code: "VS035",
        },
        {
            id: 3,
            name: "Khai trương hồng phát 3",
            price: 890000,
            discount: 0.5,
            image: "/flower.jpg",
            code: "VS036",
        },
        {
            id: 4,
            name: "Khai trương hồng phát 4",
            price: 890000,
            discount: 0.5,
            image: "/flower.jpg",
            code: "VS037",
        },
        {
            id: 5,
            name: "Khai trương hồng phát 5",
            price: 890000,
            discount: 0.5,
            image: "/flower.jpg",
            code: "VS038",
        },
        {
            id: 6,
            name: "Khai trương hồng phát 6",
            price: 890000,
            discount: 0.5,
            image: "/flower.jpg",
            code: "VS039",
        },
        {
            id: 7,
            name: "Khai trương hồng phát 7",
            price: 890000,
            discount: 0.5,
            image: "/flower.jpg",
            code: "VS040",
        },
        {
            id: 8,
            name: "Khai trương hồng phát 8",
            price: 880000,
            discount: 0.5,
            image: "/flower.jpg",
            code: "VS041",
        },
    ];

    return (
        <div>
            <section>
                <ProductBlock title="Khai trương hồng phát" products={products} />
            </section>
            <section></section>
            <section>
                <ProductBlock title="Sản phẩm khuyến mãi" products={products} />
            </section>
        </div>
    );
}