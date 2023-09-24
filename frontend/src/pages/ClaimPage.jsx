import { useState } from "react";
import { Card, Container } from "react-bootstrap";

function ClaimPage() {
  const [claim, setClaim] = useState({});
  return (
    <Container className="my-5">
      <Card>
        <Card.Header>Claim Name</Card.Header>
        <Card.Body></Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <span>Amount</span>
          <span>Status</span>
        </Card.Footer>
      </Card>
    </Container>
  );
}
export default ClaimPage;
