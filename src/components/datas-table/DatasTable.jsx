import "./datas-table.css";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export default function DatasTables() {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 50, 100];

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
      field: "startDate",
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
      field: "birthDate",
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
      field: "state",
      headerName: "State",
      resizable: false,
      headerClass: "column-header",
      cellClass: "cell-style",
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      resizable: false,
      headerClass: "column-header",
      cellClass: "cell-style",
    },
  ];

  const allData = [
    {
      firstname: "Tony",
      lastname: "Stark",
      startDate: "03/01/2024",
      department: "Engineering",
      birthDate: "07/04/1970",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Steve",
      lastname: "Rogers",
      startDate: "03/01/2024",
      department: "Marketing",
      birthDate: "07/04/1920",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Jeremy",
      lastname: "Twardowski",
      startDate: "20/08/2022",
      department: "Development",
      birthDate: "23/07/1991",
      street: "70 rue Jean Mermoz",
      city: "Saint Saulve",
      state: "AL",
      zipCode: "59880",
    },
    {
      firstname: "Tony",
      lastname: "Stark",
      startDate: "03/01/2024",
      department: "Engineering",
      birthDate: "07/04/1970",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Steve",
      lastname: "Rogers",
      startDate: "03/01/2024",
      department: "Marketing",
      birthDate: "07/04/1920",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Jeremy",
      lastname: "Twardowski",
      startDate: "20/08/2022",
      department: "Development",
      birthDate: "23/07/1991",
      street: "70 rue Jean Mermoz",
      city: "Saint Saulve",
      state: "AL",
      zipCode: "59880",
    },
    {
      firstname: "Tony",
      lastname: "Stark",
      startDate: "03/01/2024",
      department: "Engineering",
      birthDate: "07/04/1970",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Steve",
      lastname: "Rogers",
      startDate: "03/01/2024",
      department: "Marketing",
      birthDate: "07/04/1920",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Jeremy",
      lastname: "Twardowski",
      startDate: "20/08/2022",
      department: "Development",
      birthDate: "23/07/1991",
      street: "70 rue Jean Mermoz",
      city: "Saint Saulve",
      state: "AL",
      zipCode: "59880",
    },
    {
      firstname: "Tony",
      lastname: "Stark",
      startDate: "03/01/2024",
      department: "Engineering",
      birthDate: "07/04/1970",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Steve",
      lastname: "Rogers",
      startDate: "03/01/2024",
      department: "Marketing",
      birthDate: "07/04/1920",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Jeremy",
      lastname: "Twardowski",
      startDate: "20/08/2022",
      department: "Development",
      birthDate: "23/07/1991",
      street: "70 rue Jean Mermoz",
      city: "Saint Saulve",
      state: "AL",
      zipCode: "59880",
    },
    {
      firstname: "Tony",
      lastname: "Stark",
      startDate: "03/01/2024",
      department: "Engineering",
      birthDate: "07/04/1970",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Steve",
      lastname: "Rogers",
      startDate: "03/01/2024",
      department: "Marketing",
      birthDate: "07/04/1920",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Jeremy",
      lastname: "Twardowski",
      startDate: "20/08/2022",
      department: "Development",
      birthDate: "23/07/1991",
      street: "70 rue Jean Mermoz",
      city: "Saint Saulve",
      state: "AL",
      zipCode: "59880",
    },
    {
      firstname: "Tony",
      lastname: "Stark",
      startDate: "03/01/2024",
      department: "Engineering",
      birthDate: "07/04/1970",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Steve",
      lastname: "Rogers",
      startDate: "03/01/2024",
      department: "Marketing",
      birthDate: "07/04/1920",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Jeremy",
      lastname: "Twardowski",
      startDate: "20/08/2022",
      department: "Development",
      birthDate: "23/07/1991",
      street: "70 rue Jean Mermoz",
      city: "Saint Saulve",
      state: "AL",
      zipCode: "59880",
    },
    {
      firstname: "Tony",
      lastname: "Stark",
      startDate: "03/01/2024",
      department: "Engineering",
      birthDate: "07/04/1970",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Steve",
      lastname: "Rogers",
      startDate: "03/01/2024",
      department: "Marketing",
      birthDate: "07/04/1920",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Jeremy",
      lastname: "Twardowski",
      startDate: "20/08/2022",
      department: "Development",
      birthDate: "23/07/1991",
      street: "70 rue Jean Mermoz",
      city: "Saint Saulve",
      state: "AL",
      zipCode: "59880",
    },
    {
      firstname: "Tony",
      lastname: "Stark",
      startDate: "03/01/2024",
      department: "Engineering",
      birthDate: "07/04/1970",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Steve",
      lastname: "Rogers",
      startDate: "03/01/2024",
      department: "Marketing",
      birthDate: "07/04/1920",
      street: "Avengers' Tower",
      city: "New York",
      state: "NY",
      zipCode: "1000",
    },
    {
      firstname: "Jeremy",
      lastname: "Twardowski",
      startDate: "20/08/2022",
      department: "Development",
      birthDate: "23/07/1991",
      street: "70 rue Jean Mermoz",
      city: "Saint Saulve",
      state: "AL",
      zipCode: "59880",
    },
  ];

  const [rowData, setRowData] = useState(allData);

  const filterData = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredData = allData.filter((row) => {
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
