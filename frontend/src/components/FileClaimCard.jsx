import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function FileClaimCard() {
  return (
    <Card className="bg-success text-white"> 
      <Card.Body className="mx-auto">
        <Card.Title>File Claim</Card.Title>
        <Card.Text>Create a new claim</Card.Text>
      </Card.Body>
      <Card.Footer>
        <LinkContainer to="/claim/create">
          <Button className="btn btn-danger w-100">Add</Button>
        </LinkContainer>
      </Card.Footer>
    </Card>
  );
}

export default FileClaimCard;
