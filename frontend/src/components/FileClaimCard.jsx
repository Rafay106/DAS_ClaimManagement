import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function FileClaimCard() {
  return (
    <Card>
      <Card.Body className="mx-auto">
        <Card.Title>File Claim</Card.Title>
        <Card.Text>Create a new claim</Card.Text>
        <LinkContainer to="/claim/create">
          <Button className="btn btn-danger w-100">Add</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}
export default FileClaimCard;
