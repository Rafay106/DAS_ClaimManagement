import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { toast } from "react-toastify";
import ClaimTable from "../components/ClaimTable";
import ClaimTableFilters from "../components/ClaimTableFilters";

const ApproveClaims = () => {
  const [claims, setClaims] = useState();
  const [claimStatus, setclaimStatus] = useState([]);
  const [userId, setuserId] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios.get(`/api/claim?user_id=${userId}&status_id=1`).then((res) => {
      setClaims(res.data);
      axios.get("/api/claim-status").then((res) => {
        setclaimStatus(res.data);
      });
    });
  };

  const filterHandler = (e) => {
    e.preventDefault();
    axios
      .get(`/api/claim?user_id=${userId}&status_id=${e.target.value}`)
      .then((res) => setClaims(res.data))
      .catch((err) => {
        setClaims([]);
        toast.error(err.response.data);
      });
  };

  return (
    <>
      <Container className="my-2">
        <div className="my-3">
          <h1 className="text-center">Process Claims</h1>
        </div>
        {!claims && (
          <FormContainer>
            <Form onSubmit={submitHandler}>
              <Form.Group className="my-2" controlId="user-id">
                <Form.Control
                  type="text"
                  name="userId"
                  placeholder="Enter your user id"
                  onChange={(e) => {
                    setuserId(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="my-2" controlId="emp-name">
                <Form.Control
                  type="submit"
                  className="btn btn-primary"
                  value="Find User"
                />
              </Form.Group>
            </Form>
          </FormContainer>
        )}
        <div className="text-center">
          {claims && (
            <>
              <ClaimTableFilters
                claimStatus={claimStatus}
                filterHandler={filterHandler}
              />
              <ClaimTable
                claims={claims}
                claimStatus={claimStatus}
                userId={userId}
              />
            </>
          )}
        </div>
      </Container>
    </>
  );
};
export default ApproveClaims;
