import axios from "axios";
import { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import qs from "qs";
import { useNavigate } from "react-router-dom";

function FileClaimCard() {
  const navigate = useNavigate();
  const [userID, setUserID] = useState("");
  const userIDHandler = (e) => {
    setUserID(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { user_id: userID };

    axios
      .post("/api/user", data)
      .then((res) => {
        console.log(res.data);
        navigate("/claim/create");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card>
      <Card.Body className="mx-auto">
        <Card.Title>File Claim</Card.Title>
        <Card.Text>Create a new claim</Card.Text>
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2">
            <Form.Control
              type="text"
              name="user_id"
              placeholder="Enter your user ID"
              onChange={userIDHandler}
            />
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Control
              className="btn btn-danger"
              type="submit"
              value="Claim"
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default FileClaimCard;
