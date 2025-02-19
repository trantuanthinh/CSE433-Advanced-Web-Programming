import {Box} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import {fetchGridProductList} from "../stimulate-api/stimulate-api";
import {ProductGridType} from "../types/ProductType";

export default function MUIDataGrid() {
    const [products, setProducts] = useState<ProductGridType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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

    const columns: GridColDef<ProductGridType>[] = [
        {field: "id", headerName: "ID", width: 90},
        {
            field: "title",
            headerName: "Title",
            width: 150,
            editable: true,
        },
        {
            field: "image",
            headerName: "Image",
            width: 150,
            sortable: false,
            renderCell: (params) => (
                <img
                    src={params.value}
                    alt="Product"
                    style={{width: 100, height: 100, objectFit: "cover", borderRadius: 10}}
                />
            ),
        },
        {
            field: "price",
            headerName: "Price",
            type: "number",
            width: 110,
            editable: true,
        },
        {
            field: "quantity",
            headerName: "Quantity",
            sortable: false,
            width: 160,
        },
        {
            field: "category",
            headerName: "Category",
            sortable: false,
            width: 160,
        },
    ];

    return (
        <Box sx={{height: "100%", width: "100%"}}>
            {loading ? (
                <p> Loading... </p>
            ) : (
                <DataGrid
                    rows={products}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            )}
        </Box>
    );
}
