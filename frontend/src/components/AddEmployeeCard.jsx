import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AddEmployeeCard() {
  return (
    <Card className="bg-dark text-white">
      <Card.Body className="mx-auto">
        <Card.Title>Add Employee</Card.Title>
        <Card.Text>Create a new employee</Card.Text>
      </Card.Body>
      <Card.Footer>
        <LinkContainer to="/">
          <Button className="btn btn-primary w-100">Add</Button>
        </LinkContainer>
      </Card.Footer>
    </Card>
  );
}
export default AddEmployeeCard;
