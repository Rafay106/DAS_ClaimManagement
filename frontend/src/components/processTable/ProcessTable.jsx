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
  { id: "index", label: "Sr No.", minWidth: 70, align: "center" },
  { id: "claimer", label: "Claimer", minWidth: 70, align: "center"  },
  { id: "manager", label: "Manager", minWidth: 70, align: "center"  },
  {
    id: "billDate",
    label: "Bill Date",
    minWidth: 80,
    align: "center",
  },
  {
    id: "submitDate",
    label: "Submit Date",
    minWidth: 80,
    align: "center",
  },
  {
    id: "lastActionDate",
    label: "Last Action Date",
    minWidth: 80,
    align: "center",
  },
  {
    id: "claimFor",
    label: "Claim For",
    minWidth: 80,
    align: "center",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "city",
    label: "Place",
    minWidth: 70,
    align: "center",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 70,
    align: "center",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 70,
    align: "center",
    format: (value) => value.toUpperCase(),
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

export default function ProcessTable({ claims }) {
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
            {claims
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      let value = row[column.id] || index + 1;
                      if (value === "null") value = "-"
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
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
