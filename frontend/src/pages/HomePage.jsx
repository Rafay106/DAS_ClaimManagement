import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomePage = () => {
  return (
    <>
      <Row>
        <Col className="m-2">
          <Card>
            <Card.Body className="mx-auto">
              <Card.Title>Add Employee</Card.Title>
              <Card.Text>Create a new employee</Card.Text>
              <LinkContainer to="/">
                <Button className="btn btn-primary">Add</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-2">
          <Card>
            <Card.Body className="mx-auto">
              <Card.Title>Add User</Card.Title>
              <Card.Text>Create a new user</Card.Text>
              <LinkContainer to="/">
                <Button className="btn btn-primary">Add</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="m-2">
          <Card>
            <Card.Body className="mx-auto">
              <Card.Title>File Claim</Card.Title>
              <Card.Text>Create a new claim</Card.Text>
              <LinkContainer to="/claim/create">
                <Button className="btn btn-danger">Claim</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-2">
          <Card>
            <Card.Body className="mx-auto">
              <Card.Title>Approve Claim</Card.Title>
              <Card.Text>Approve a new claim</Card.Text>
              <LinkContainer to="/claim/approve">
                <Button className="btn btn-success">Approve</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default HomePage;
