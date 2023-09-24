import axios from "axios";
import { useState } from "react";
import { Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { toast } from "react-toastify";

function ClaimTable({ claims, claimStatus, userId }) {
  const [statusId, setStatusId] = useState();

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
    <Table className="m-auto" striped hover>
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Claim For</th>
          <th>Bill Date</th>
          <th>Amount</th>
          <th>Claimer</th>
          <th>Comment</th>
          <th>Current Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {claims.length > 0 &&
          claims.map((claim, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <LinkContainer to={`/claim/${claim.claimId}`} style={{cursor:'pointer'}}>
                <td>{claim.claimFor}</td>
              </LinkContainer>
              <td>{claim.billDate}</td>
              <td>{claim.amt}</td>
              <td>{claim.claimer}</td>
              <td>{claim.comment}</td>
              <td colSpan={2}>
                <Form
                  className="d-flex justify-content-around"
                  onSubmit={processClaimHandler}
                >
                  <Form.Group>
                    <Form.Control
                      name="claimId"
                      value={claim.claimId}
                      hidden
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group className="m-2">
                    <Form.Select
                      name="status"
                      onChange={(e) => setStatusId(e.target.value)}
                      value={statusId ?? claim.claimStatusId}
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
                      className="btn btn-success"
                      type="submit"
                      value="Done"
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
