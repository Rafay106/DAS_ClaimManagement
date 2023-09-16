import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AddUserCard() {
  return (
    <Card>
      <Card.Body className="mx-auto">
        <Card.Title>Add User</Card.Title>
        <Card.Text>Create a new user</Card.Text>
        <LinkContainer to="/">
          <Button className="btn btn-primary w-100">Add</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}
export default AddUserCard;
