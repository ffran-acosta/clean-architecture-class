
import { AppStore } from "@/redux/store";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const FavoriteTable = () => {
    //FOR CHECKBOX, Trabaja sonre el moedelo de <Person>

    const favoritePeople = useSelector((store: AppStore) => store.favorites);

    // COLUMNS CONFIGURATION
    const colums = [
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

    // PAGE GRID CONFIG (5 PEOPLE)
    const pageSize = 5;

    return (
        <DataGrid
            rows={favoritePeople}
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
export default FavoriteTable