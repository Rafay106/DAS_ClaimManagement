import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <LinkContainer to="/">
          <img src="./images/DAS_Logo.png" alt="React Image" />
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/claim/create">
              <Nav.Link>File Claim</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/claim/process">
              <Nav.Link>Process Claim</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Add User </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Add Employee</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/report">
              <Nav.Link>Reports</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
