import AddProduct from "../dashboard/AddProduct";
import ProductList from "../dashboard/ProductList";

export default function ProductManagement() {
    return (
        <>
            <section className="col-span-8 col-start-3 bg-[#edf1f5] min-h-screen p-4">
                <AddProduct />
                <ProductList />
            </section>
        </>
    );
}