import axios from "axios";
import { useState } from "react";
import { Table, Form } from "react-bootstrap";
import { toast } from "react-toastify";

function ClaimTable({ claims, claimStatus, userId }) {
  const [statusId, setStatusId] = useState("0");

  const processClaimHandler = (e) => {
    e.preventDefault();
    if (statusId === "0") {
      toast.warn("Status can not be None");
    } else {
      axios
        .post(`/api/claim/process`, { userId, statusId })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => toast.error(err.response.data));
    }
  };
  return (
    <Table className="m-auto">
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Claim For</th>
          <th>Bill Date</th>
          <th>Amount</th>
          <th>Claimer</th>
          <th>Status</th>
          <th>Comment</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {claims.length > 0 &&
          claims.map((claim, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{claim.claimFor}</td>
              <td>{claim.billDate}</td>
              <td>{claim.amt}</td>
              <td>{claim.claimer}</td>
              <td>{claim.claimStatus}</td>
              <td>{claim.comment}</td>
              <td>
                <Form className="d-flex" onSubmit={processClaimHandler}>
                  <Form.Group className="m-2">
                    <Form.Select
                      name="status"
                      onChange={(e) => setStatusId(e.target.value)}
                      value={statusId}
                    >
                      <option value="0">None</option>
                      {claimStatus.map((status) => (
                        <option value={status.id} key={status.value}>
                          {status.value}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="my-2">
                    <Form.Control
                      className="btn btn-warning"
                      type="submit"
                      value="Update"
                    />
                  </Form.Group>
                </Form>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
export default ClaimTable;
