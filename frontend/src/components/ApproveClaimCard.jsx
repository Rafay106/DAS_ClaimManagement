import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ApproveClaimCard() {
  return (
    <Card>
      <Card.Body className="mx-auto">
        <Card.Title>Approve Claim</Card.Title>
        <Card.Text>Approve a new claim</Card.Text>
      </Card.Body>
      <Card.Footer>
        <LinkContainer to="/claim/approve">
          <Button className="btn btn-success w-100">Approve</Button>
        </LinkContainer>
      </Card.Footer>
    </Card>
  );
}
export default ApproveClaimCard;
