import {ProductType} from "../../types/ProductType";
import AddToCart from "../cart/AddToCart";

export default function Product({id, name, price, discount, image, code}: ProductType) {
    return (
        <div className="flex flex-col">
            <div className="relative">
                <img className="size-52 w-full" src={image} alt={name} />
                {discount && (
                    <div className="absolute top-0 right-0 bg-[#e83b29] p-1">
                        <p className="font-bold text-xl text-white">-{(discount * 100).toFixed(0)}%</p>
                    </div>
                )}
            </div>
            <p>{name}</p>
            <p className="font-bold text-[#662d91]">{code}</p>
            {discount ? (
                <>
                    <p className="font-bold text-md text-gray-500 line-through">{price.toLocaleString()}đ</p>
                    <p className="font-bold text-xl text-[#e83b29]">{(price - price * discount).toLocaleString()}đ</p>
                </>
            ) : (
                <p className="font-bold text-xl text-[#e83b29]">{price.toLocaleString()}đ</p>
            )}
            <AddToCart {...{id, name, price, discount, image, code}} />
        </div>
    );
}
