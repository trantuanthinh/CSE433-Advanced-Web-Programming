import {ProductType} from "../../types/ProductType";
import Product from "./Product";

const products: ProductType[] = [
    {
        id: 1,
        name: "Khai trương hồng phát 1",
        price: 890000,
        priceDiscount: 807500,
        image: "/demoImage.jpg",
        code: "VS034",
    },
    {
        id: 2,
        name: "Khai trương hồng phát 2",
        price: 890000,
        priceDiscount: 807500,
        image: "/demoImage.jpg",
        code: "VS035",
    },
    {
        id: 3,
        name: "Khai trương hồng phát 3",
        price: 890000,
        priceDiscount: 807500,
        image: "/demoImage.jpg",
        code: "VS036",
    },
    {
        id: 4,
        name: "Khai trương hồng phát 4",
        price: 890000,
        priceDiscount: 807500,
        image: "/demoImage.jpg",
        code: "VS037",
    },
    {
        id: 5,
        name: "Khai trương hồng phát 5",
        price: 890000,
        priceDiscount: 807500,
        image: "/demoImage.jpg",
        code: "VS038",
    },
];

export default function ProductSection() {
    return (
        <div className="grid grid-cols-4 grid-rows-1 gap-4">
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
}
