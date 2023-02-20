import { People } from "@/data";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid"



// columns configuration
const colums = [
    {
        field: 'actions',
        type: 'actions',
        sortable: false,
        headerName: '',
        width: 50,
        renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        minWidth: 150,
    },
    {
        field: 'category',
        headerName: 'Categories',
        flex: 1,
    },
    {
        field: 'company',
        headerName: 'Company',
        flex: 1,
    },
    {
        field: 'levelOfHappiness',
        headerName: 'Level of happiness',
        flex: 1,       
    }
];

// page grid configuration
const pageSize = 5;

const Home = () => {
    return (
        <DataGrid
            rows={People}
            columns={colums}
            disableColumnSelector
            disableSelectionOnClick
            autoHeight
            pageSize={pageSize}
            rowsPerPageOptions={[pageSize]}
            getRowId={(row: any) => row.id}
        />
    )
}
export default Home