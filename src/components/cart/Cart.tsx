import {useEffect, useReducer, useState} from "react";
import {formatUSCurrency} from "../../services/shared-service";
import {fetchProductList} from "../../stimulate-api/stimulate-api";
import {CartType} from "../../types/CartType";
import {ProductType} from "../../types/ProductType";

type CartAction =
    | {type: "ADD_TO_CART"; product: {id: number; name: string; price: number;};}
    | {type: "REMOVE_FROM_CART"; id: number;}
    | {type: "INCREMENT_QUANTITY"; id: number;}
    | {type: "DECREMENT_QUANTITY"; id: number;}
    | {type: "CLEAR_CART";};

const cartReducer = (state: CartType[], action: CartAction): CartType[] => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const existingItem = state.find((item) => item.id === action.product.id);
            if (existingItem) {
                return state.map((item) =>
                    item.id === action.product.id ? {...item, quantity: item.quantity + 1} : item
                );
            }
            return [...state, {...action.product, quantity: 1}];
        }
        case "REMOVE_FROM_CART":
            return state.filter((item) => item.id !== action.id);
        case "INCREMENT_QUANTITY":
            return state.map((item) => (item.id === action.id ? {...item, quantity: item.quantity + 1} : item));
        case "DECREMENT_QUANTITY":
            return state
                .map((item) => (item.id === action.id ? {...item, quantity: item.quantity - 1} : item))
                .filter((item) => item.quantity > 0);
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
};

export default function Cart() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [cart, dispatch] = useReducer(cartReducer, []);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductList();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-6">
            <div className="flex flex-col gap-4 mt-4">
                <div>
                    <h2 className="font-bold text-lg">Products</h2>
                    {products.map((product) => (
                        <div key={product.id} className="border p-2 flex justify-between items-center">
                            <span>
                                {product.name} - {formatUSCurrency(product.price)}
                            </span>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded"
                                onClick={() => dispatch({type: "ADD_TO_CART", product})}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

                <div>
                    <h2 className="font-bold text-lg">Shopping Cart</h2>
                    {cart.length === 0 ? (
                        <p>Cart is empty</p>
                    ) : (
                        <>
                            {cart.map((item) => (
                                <div key={item.id} className="border p-2 flex justify-between items-center">
                                    <span>
                                        {item.name} - ${formatUSCurrency(item.price)} x {item.quantity}
                                    </span>
                                    <div className="flex space-x-2">
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                                            onClick={() => dispatch({type: "REMOVE_FROM_CART", id: item.id})}>
                                            Remove
                                        </button>
                                        <button
                                            className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded"
                                            onClick={() => dispatch({type: "INCREMENT_QUANTITY", id: item.id})}>
                                            +
                                        </button>
                                        <button
                                            className="bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded"
                                            onClick={() => dispatch({type: "DECREMENT_QUANTITY", id: item.id})}>
                                            -
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <h3 className="font-bold mt-2">Total: {formatUSCurrency(total)}</h3>
                            <button
                                className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded mt-2"
                                onClick={() => dispatch({type: "CLEAR_CART"})}>
                                Clear Cart
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
