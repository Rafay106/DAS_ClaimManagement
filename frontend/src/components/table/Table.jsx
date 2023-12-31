import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const List = ({ claims }) => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Claim ID</TableCell>
            <TableCell className="tableCell">Reason</TableCell>
            <TableCell className="tableCell">Bill Date</TableCell>
            <TableCell className="tableCell">Submit Date</TableCell>
            <TableCell className="tableCell">Manager</TableCell>
            <TableCell className="tableCell">Last Action Date</TableCell>
            <TableCell className="tableCell">Place</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {claims.length > 0 ? (
            claims.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="tableCell">{row.claimFor}</TableCell>
                <TableCell className="tableCell">{row.billDate}</TableCell>
                <TableCell className="tableCell">{row.submitDate}</TableCell>
                <TableCell className="tableCell">{row.manager}</TableCell>
                <TableCell className="tableCell">
                  {row.lastActionDate}
                </TableCell>
                <TableCell className="tableCell">{row.city}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">
                  <span className={`Claim_Status ${row.status}`}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={"9"} align="center">
                No claims
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default List;
