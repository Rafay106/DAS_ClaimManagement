import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SaveIcon from "@mui/icons-material/Save";

const columns = [
  { id: "Claim_Id", label: "Claim_Id", minWidth: 70 },
  { id: "Name", label: "Name", minWidth: 70 },
  {
    id: "Claim_For",
    label: "Claim_For",
    minWidth: 80,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Location",
    label: "Location",
    minWidth: 70,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Claim_amount",
    label: "Claim_amount",
    minWidth: 70,
    align: "right",
    format: (value) => value.toFixed(2),
  },

  {
    id: "Claim_Status",
    label: "Claim_Status",
    minWidth: 70,
    align: "right",
    format: (value) => value.toFixed(2),
  },

  {
    id: "Action",
    label: "Save",
    minWidth: 70,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  Claim_Id,
  Name,
  Claim_For,
  Location,
  Claim_amount,
  Claim_Status,
  Action
) {
  return {
    Claim_Id,
    Name,
    Claim_For,
    Location,
    Claim_amount,
    Claim_Status,
    Action,
  };
}

const rows = [
  createData(
    "1",
    "Rajswee",
    "Travel",
    "Jaipur",
    10000,
    "Approved",
    <SaveIcon />
  ),
  createData("2", "Lokesh", "Tour", "Kota", 10000, "Pending", <SaveIcon />),
  createData("3", "Rafay", "Demo", "Ajmer", 10000, "Denied", <SaveIcon />),
  createData("4", "Anisha", "Visit", "Delhi", 10000, "Approved", <SaveIcon />),
  createData("5", "Sanjay", "Demo", "USA", 10000, "Denied", <SaveIcon />),
  createData("6", "Urmila", "XYZ", "UK", 10000, "Approved", <SaveIcon />),

  createData("7", "Binod", "Tour", "Jaipur", 10000, "Approved", <SaveIcon />),
  createData("8", "Raj", "Booking", "Bikaner", 10000, "Pending", <SaveIcon />),
  createData("9", "Raja", "Tour", "Jaipur", 10000, "Approved", <SaveIcon />),
  createData("10", "Ankit", "Demo", "Kota", 10000, "Approved", <SaveIcon />),
];

export default function ProcessTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className="TableRow">
              {columns.map((column) => (
                <TableCell
                  sx={{
                    fontWeight: "bold", // Make the font bold
                    backgroundColor: "rgb(73, 73, 181)",
                    color: "white", // Change the background color
                  }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.Name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 40]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
