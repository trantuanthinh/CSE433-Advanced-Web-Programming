import {ProductType} from "../../types/ProductType";

export default function ProductSide({id, name, price, discount, image, code}: ProductType) {
    return (
        <div className="grid grid-cols-3 grid-rows-2 py-1 gap-x-3">
            <div className="flex items-center row-span-2">
                <img className="size-25" src={image} alt={name} />
            </div>
            <div className="flex items-center col-span-2">
                <p>{name}</p>
            </div>
            <div className="flex flex-row justify-between col-span-2 col-start-2 row-start-2">
                <div className="flex flex-col justify-end">
                    <p className="font-bold text-[#662d91]">{code}</p>
                    {discount ? (
                        <>
                            <p className="font-bold text-md text-gray-500 line-through">{price.toLocaleString()}đ</p>
                            <p className="font-bold text-xl text-[#e83b29]">{(price - price * discount).toLocaleString()}đ</p>
                        </>
                    ) : (
                        <p className="font-bold text-xl text-[#e83b29]">{price.toLocaleString()}đ</p>
                    )}
                </div>
                <div className="flex items-center">
                    {discount && (
                        <div className="font-bold text-xl bg-[#e83b29] text-white px-1">-{(discount * 100).toFixed(0)}%</div>
                    )}
                </div>
            </div>
        </div>
    );
}
