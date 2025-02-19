import {ColDef} from "ag-grid-community";
import {AgGridReact} from "ag-grid-react";
import {useEffect, useState} from "react";
import {fetchGridProductList} from "../stimulate-api/stimulate-api";
import {ProductGridType} from "../types/ProductType";

export default function AGGrid() {
    const [products, setProducts] = useState<ProductGridType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // ✅ Column Definitions
    const colDefs: ColDef<ProductGridType>[] = [
        {field: "id", headerName: "ID", sortable: true, filter: true, width: 90},
        {field: "title", headerName: "Title", sortable: true, filter: true, width: 150},
        {
            field: "image",
            headerName: "Image",
            width: 120,
            cellRenderer: (params: any) => (
                <img
                    src={params.value}
                    alt="Product"
                    style={{width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px"}}
                />
            ),
        },
        {field: "price", headerName: "Price", sortable: true, filter: true, width: 110},
        {field: "quantity", headerName: "Quantity", sortable: true, filter: true, width: 120},
        {field: "category", headerName: "Category", sortable: true, filter: true, width: 150},
    ];

    const defaultColDef: ColDef = {
        resizable: true,
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchGridProductList();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="h-[500px]">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <AgGridReact
                    rowData={products}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={10}
                    rowSelection="multiple"
                />
            )}
        </div>
    );
}
