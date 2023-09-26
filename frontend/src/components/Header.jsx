import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  FaBell,
  FaSignInAlt,
  FaSignOutAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <div className="mb-3">
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container className="w-100 d-flex justify-content-between">
          <Navbar.Brand>
            <LinkContainer to="/">
              <Nav.Link>
                <img src="./images/DAS_Logo.png" alt="React Image" />
              </Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="d-flex gap-3 mx-4"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title={<FaBell />} id="navbarScrollingDropdown">
                  <LinkContainer to="/notification-1">
                    <NavDropdown.Item>Notification 1</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/notification-2">
                    <NavDropdown.Item>Notification 2</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/notification-3">
                    <NavDropdown.Item>Notification 3</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Clear</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <span>
                      <FaUser /> Username
                    </span>
                  }
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#dashboard">
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <LinkContainer to="/login">
                    <NavDropdown.Item>Login</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <Navbar bg="primary" variant="dark" expand="sm" collapseOnSelect>
        <Container>
          <Nav fill variant="underline" defaultActiveKey="/">
            <Nav.Item>
              <LinkContainer to="/">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/claim/create">
                <Nav.Link eventKey="fc">File Claim</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/claim/process">
                <Nav.Link eventKey="pc">Process Claim</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/report">
                <Nav.Link eventKey="r">Reports</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
