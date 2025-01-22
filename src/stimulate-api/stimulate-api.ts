import {CategoryType} from "../types/CategoryType";
import {ProductType} from "../types/ProductType";

export const fetchProductList = async (): Promise<ProductType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: "Khai trương hồng phát 1",
                    price: 890000,
                    discount: 0.5,
                    image: "/flower.jpg",
                    code: "VS034",
                },
                {
                    id: 2,
                    name: "Khai trương hồng phát 2",
                    price: 890000,
                    discount: 0.5,
                    image: "/flower.jpg",
                    code: "VS035",
                },
                {
                    id: 3,
                    name: "Khai trương hồng phát 3",
                    price: 890000,
                    discount: 0.5,
                    image: "/flower.jpg",
                    code: "VS036",
                },
                {
                    id: 4,
                    name: "Khai trương hồng phát 4",
                    price: 890000,
                    discount: 0.5,
                    image: "/flower.jpg",
                    code: "VS037",
                },
                {
                    id: 5,
                    name: "Khai trương hồng phát 5",
                    price: 890000,
                    discount: 0.5,
                    image: "/flower.jpg",
                    code: "VS038",
                },
                {
                    id: 6,
                    name: "Khai trương hồng phát 6",
                    price: 890000,
                    discount: 0.5,
                    image: "/flower.jpg",
                    code: "VS039",
                },
                {
                    id: 7,
                    name: "Khai trương hồng phát 7",
                    price: 890000,
                    discount: 0.5,
                    image: "/flower.jpg",
                    code: "VS040",
                },
                {
                    id: 8,
                    name: "Khai trương hồng phát 8",
                    price: 880000,
                    discount: 0.5,
                    image: "/flower.jpg",
                    code: "VS041",
                },
            ]);
        }, 2000); // Simulate network latency
    });
};


export const fetchCategoryList = async (): Promise<CategoryType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: 1, path: "home", name: "trang chủ"},
                {id: 2, path: "birthday-flowers", name: "hoa sinh nhật"},
                {id: 3, path: "love-flowers", name: "hoa tình yêu"},
                {id: 4, path: "congrats-flowers", name: "hoa chúc mừng"},
                {id: 5, path: "office-flowers", name: "hoa văn phòng"},
                {id: 6, path: "themes", name: "chủ đề"},
                {id: 7, path: "designs", name: "thiết kế"},
                {id: 8, path: "categories", name: "thể loại"},
                {id: 9, path: "gifts", name: "quà tặng"},
            ]);
        }, 2000); // Simulate network latency
    });
};