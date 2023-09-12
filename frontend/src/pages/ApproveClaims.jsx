import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";

const ApproveClaims = () => {
  const [claims, setClaims] = useState([]);
  const [userID, setUserID] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios.get(`/api/claim/${userID}`).then((res) => {
      setClaims(res.data);
      console.log(claims);
    });
  };

  //   useEffect(() => {
  //     axios.get("/api/claim/:userID");
  //   }, []);
  return (
    <>
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
          <Card>
            <Card.Body>
              <Card.Title>{claim.claim_for}</Card.Title>
              <Card.Title>{claim.bill_date}</Card.Title>
              <Card.Title>{claim.amount}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};
export default ApproveClaims;
