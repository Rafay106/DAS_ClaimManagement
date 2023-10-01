import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const List = () => {
  const rows = [
    {
      id: 1,
      Name: "Lokesh Singh",
      Claim_For: "Travel",
      Location: "Jaipur",
      Claim_Amount: 1200,
      Claim_Status: "Approved",
    },

    {
      id: 2,
      Name: "Rajswee Surana",
      Claim_For: "Booking",
      Location: "Ajmer",
      Claim_Amount: 1500,
      Claim_Status: "Pending",
    },

    {
      id: 3,
      Name: "Mohd. Rafay",
      Claim_For: "Demo",
      Location: "Kota",
      Claim_Amount: 1500,
      Claim_Status: "Denied",
    },

    {
      id: 4,
      Name: "Ajau Gaur",
      Claim_For: "Tour",
      Location: "Mumbai",
      Claim_Amount: 1200,
      Claim_Status: "Clarification_Required",
    },

    {
      id: 5,
      Name: "Vanshita Agarwal",
      Claim_For: "Anything",
      Location: "BIkaner",
      Claim_Amount: 1200,
      Claim_Status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Claim ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Claim_For</TableCell>
            <TableCell className="tableCell">Location</TableCell>
            <TableCell className="tableCell">Claim_Amount</TableCell>
            <TableCell className="tableCell">Claim_Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">{row.Name}</TableCell>
              <TableCell className="tableCell">{row.Claim_For}</TableCell>
              <TableCell className="tableCell">{row.Location}</TableCell>
              <TableCell className="tableCell">{row.Claim_Amount}</TableCell>
              <TableCell className="tableCell">
                <span className={`Claim_Status ${row.Claim_Status}`}>
                  {row.Claim_Status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default List;
