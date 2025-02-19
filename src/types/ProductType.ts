export type ProductType = {
    id: number;
    name: string;
    price: number;
    discount?: number;
    image: string;
    code: string;
};

export type ProductGridType = {
    id: number;
    title: string;
    image?: string;
    price: number;
    quantity: string;
    category: string;
};