import {ProductType} from "../../types/ProductType";
import CategoryTitle from "../shared/CategoryTitle";
import Product from "./Product";

export default function ProductBlock({title, products}: {title: string; products: ProductType[];}) {
    return (
        <div>
            <CategoryTitle title={title} />
            <div className="grid grid-cols-4 grid-rows-1 gap-4">
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}