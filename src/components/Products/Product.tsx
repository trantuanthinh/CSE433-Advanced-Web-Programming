import {ProductType} from "../../types/ProductType";

export default function Product({id, name, price, priceDiscount, image, code}: ProductType) {
    return (
        <div className="flex flex-col">
            <img className="size-52" src={image} alt={name} />
            <p>{name}</p>
            <p className="font-bold text-[#662d91]">{code}</p>
            <p className="font-bold text-md text-gray-500 line-through">{price.toLocaleString()}đ</p>
            <p className="font-bold text-xl text-[#e83b29]">{priceDiscount.toLocaleString()}đ</p>
        </div>
    );
}
