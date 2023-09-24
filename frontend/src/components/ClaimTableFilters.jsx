import axios from "axios";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";

function ClaimTableFilters({ claimStatus, filterHandler }) {
  return (
    <Form className="">
      <Form.Group
        className="my-2 d-flex justify-content-end"
        controlId="filter"
      >
        <Form.Select className="w-25" name="filter" onChange={filterHandler}>
          <option value={0}>All</option>
          {claimStatus.map((status) => (
            <option value={status.id} key={status.value}>
              {status.value}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
}
export default ClaimTableFilters;
