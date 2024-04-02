import "./datas-table.css";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useSelector } from "react-redux";
// Ligne de donnees Mock pour soutenance
// import { allData } from "../../app/datasMock";

export default function DatasTables() {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 50, 100];
  const employees = useSelector((state) => state.employee.employees);

  const colDefs = [
    {
      field: "firstname",
      headerName: "First Name",
      resizable: false,
      headerClass: "column-header",
      cellClass: "cell-style",
    },
    {
      field: "lastname",
      headerName: "Last Name",
      resizable: false,
      headerClass: "column-header",
      cellClass: "cell-style",
    },
    {
      field: "startdate",
      headerName: "Start Date",
      resizable: false,
      headerClass: "column-header",
      cellClass: "cell-style",
    },
    {
      field: "department",
      headerName: "Department",
      resizable: false,
      headerClass: "column-header",
      cellClass: "cell-style",
    },
    {
      field: "birthdate",
      headerName: "Date of Birth",
      resizable: false,
      headerClass: "column-header",
      cellClass: "cell-style",
    },
    {
      field: "street",
      headerName: "Street",
      resizable: false,
      headerClass: "column-header",
      cellClass: "cell-style",
    },
    {
      field: "city",
      headerName: "City",
      resizable: false,
      headerClass: "column-header",
      cellClass: "cell-style",
    },
    {
      field: "countryState",
      headerName: "State",
      resizable: false,
      headerClass: "column-header",
      cellClass: "cell-style",
    },
    {
      field: "zipcode",
      headerName: "Zip Code",
      resizable: false,
      headerClass: "column-header",
      cellClass: "cell-style",
    },
  ];

  // Ligne de donnees Mock pour soutenance
  // const [rowData, setRowData] = useState(allData);
  const [rowData, setRowData] = useState(employees);

  const filterData = (event) => {
    const searchText = event.target.value.toLowerCase();
    // !!! Changer allData par employees selon le besoin pour la soutenance !!!
    const filteredData = employees.filter((row) => {
      return Object.values(row).some(
        (value) => value.toString().toLowerCase().indexOf(searchText) > -1
      );
    });
    setRowData(filteredData);
  };

  return (
    <main className="main">
      <div className="datas-filter-container">
        <input
          type="text"
          placeholder="Search..."
          onInput={filterData}
          className="search-input"
        />
      </div>

      <div className="ag-theme-quartz">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          domLayout="autoHeight"
          suppressHorizontalScroll="true"
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </main>
  );
}
