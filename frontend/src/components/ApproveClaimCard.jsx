import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ApproveClaimCard() {
  return (
    <Card>
      <Card.Body className="mx-auto">
        <Card.Title>Approve Claim</Card.Title>
        <Card.Text>Approve a new claim</Card.Text>
        <LinkContainer to="/claim/approve">
          <Button className="btn btn-success">Approve</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}
export default ApproveClaimCard;
