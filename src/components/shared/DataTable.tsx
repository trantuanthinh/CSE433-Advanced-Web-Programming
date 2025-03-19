import {Box} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

interface DataTableProps<T extends {id: string | number;}> {
    products: T[];
    columns: GridColDef<T>[];
}

export default function DataTable<T extends {id: string | number;}>({products, columns}: DataTableProps<T>) {
    return (
        <Box sx={{height: "100%", width: "100%"}}>
            <DataGrid
                rows={products}
                columns={columns}
                getRowId={(row) => row.id}
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
        </Box>
    );
}

