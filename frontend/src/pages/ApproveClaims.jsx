import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const ApproveClaims = () => {
  const [claims, setClaims] = useState([]);
  const [claimStatus, setclaimStatus] = useState([]);
  const [userID, setUserID] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios.get(`/api/claim/${userID}`).then((res) => {
      setClaims(res.data);
      axios.get("/api/claim-status").then((res) => {
        console.log(res.data);
        setclaimStatus(res.data);
      });
    });
  };

  return (
    <FormContainer>
      <h1>Process Claims</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="user-id">
          <Form.Control
            type="text"
            name="userID"
            placeholder="Enter your user id"
            onChange={(e) => {
              setUserID(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="my-2" controlId="emp-name">
          <Form.Control type="submit" />
        </Form.Group>
      </Form>
      <div>
        {claims.map((claim) => (
          <Card key={claim.claimId} className="my-4">
            <Card.Header className="w-100 d-flex justify-content-between">
              <Card.Title>{claim.ename}</Card.Title>
              <Card.Title>{claim.amt}</Card.Title>
            </Card.Header>
            <Card.Body className="mx-auto">
              <Card.Title>Claim For: {claim.claimFor}</Card.Title>
              <Card.Title>Bill Date: {claim.billDate}</Card.Title>
              <Card.Title>Claim Amount: {claim.amt}</Card.Title>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
              <Card.Title>Current: {claim.claimStatus}</Card.Title>
              <Card.Title className="d-flex align-items-center">
                <Form className="d-flex">
                  <Form.Group className="m-2">
                    <Form.Select name="place">
                      {claimStatus.map((status) => (
                        <option value={status.value} key={status.value}>
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
              </Card.Title>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </FormContainer>
  );
};
export default ApproveClaims;
