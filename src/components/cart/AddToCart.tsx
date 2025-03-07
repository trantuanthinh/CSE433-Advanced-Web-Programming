import {useMyContext} from "../../Context";
import {ProductType} from "../../types/ProductType";

export default function AddToCart(product: ProductType) {
    const {dispatch} = useMyContext();

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded"
            onClick={() => dispatch({type: "ADD_TO_CART", product: product})}
        >
            Add to Cart
        </button>
    );
}
