import {createContext, ReactNode, useContext, useReducer} from "react";
import {CartType} from "./types/CartType";
import {ProductType} from "./types/ProductType";
import {UserType} from "./types/UserType";

interface State {
    user: UserType | null;
    cart: CartType[];
}

type Action =
    | {type: "SIGN-IN"; payload: UserType;}
    | {type: "LOGOUT";}
    | {type: "ADD_TO_CART"; product: ProductType;}
    | {type: "REMOVE_FROM_CART"; id: number;}
    | {type: "INCREMENT_QUANTITY"; id: number;}
    | {type: "DECREMENT_QUANTITY"; id: number;}
    | {type: "CLEAR_CART";};

interface AppContextType {
    state: State;
    dispatch: React.Dispatch<Action>;
}

// ✅ Load cả user & cart từ localStorage để không bị mất khi reload
const loadInitialState = (): State => {
    const savedUser = localStorage.getItem("user");
    const savedCart = localStorage.getItem("cart");

    return {
        user: savedUser ? JSON.parse(savedUser) : null,
        cart: savedCart ? JSON.parse(savedCart) : [],
    };
};

const AppContext = createContext<AppContextType | null>(null);

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SIGN-IN":
            localStorage.setItem("user", JSON.stringify(action.payload));
            return {...state, user: action.payload};

        case "LOGOUT":
            localStorage.removeItem("user");
            return {...state, user: null};

        case "ADD_TO_CART": {
            const existingItem = state.cart.find((item) => item.id === action.product.id);
            const updatedCart = existingItem
                ? state.cart.map((item) => (item.id === action.product.id ? {...item, quantity: item.quantity + 1} : item))
                : [...state.cart, {...action.product, quantity: 1}];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return {...state, cart: updatedCart};
        }

        case "REMOVE_FROM_CART": {
            const updatedCart = state.cart.filter((item) => item.id !== action.id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return {...state, cart: updatedCart};
        }

        case "INCREMENT_QUANTITY": {
            const updatedCart = state.cart.map((item) =>
                item.id === action.id ? {...item, quantity: item.quantity + 1} : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return {...state, cart: updatedCart};
        }

        case "DECREMENT_QUANTITY": {
            const updatedCart = state.cart
                .map((item) => (item.id === action.id ? {...item, quantity: item.quantity - 1} : item))
                .filter((item) => item.quantity > 0);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return {...state, cart: updatedCart};
        }

        case "CLEAR_CART":
            localStorage.removeItem("cart");
            return {...state, cart: []};

        default:
            return state;
    }
};

export const ContextProvider = ({children}: {children: ReactNode;}) => {
    const [state, dispatch] = useReducer(reducer, loadInitialState());

    return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>;
};

export const useMyContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useMyContext must be used within a ContextProvider");
    }
    return context;
};
