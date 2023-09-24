import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaSignInAlt, FaSignOutAlt, FaSearch, FaUser } from "react-icons/fa";

function NavScrollExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Brand>
          <LinkContainer to="/">
            <Nav.Link>
              <img src="./images/DAS_Logo.png" alt="React Image" />
            </Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/claim/create">
              <Nav.Link>File Claim</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/claim/process">
              <Nav.Link>Process Claim</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/report">
              <Nav.Link>Reports</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ms-auto d-flex gap-3">
            <LinkContainer to="/">
              <Nav.Link>
                <FaSearch /> Search
              </Nav.Link>
            </LinkContainer>

            <NavDropdown title={<FaUser />} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
