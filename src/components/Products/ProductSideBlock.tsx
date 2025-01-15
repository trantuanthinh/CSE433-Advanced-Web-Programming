import {ProductType} from "../../types/ProductType";
import CategoryTitle from "../shared/CategoryTitle";
import ProductSide from "./ProductSide";

export default function ProductSideBlock({title, products}: {title: string; products: ProductType[];}) {
    return (
        <div>
            <CategoryTitle title={title} />
            <div className="flex flex-col">
                {products.map((product) => (
                    <ProductSide key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}