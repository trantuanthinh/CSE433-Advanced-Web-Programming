import {toast} from "react-toastify";
import {useMyContext} from "../../Context";
import {ProductType} from "../../types/ProductType";

export default function AddToCart(product: ProductType) {
    const {dispatch} = useMyContext();

    const handleClick = () => {
        dispatch({type: "ADD_TO_CART", product: product});
        toast.success(`${product.name} added to cart.`);
    };

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded"
            onClick={handleClick}
        >
            Add to Cart
        </button>
    );
}
