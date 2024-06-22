import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">St.Bhatevara</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#studentlogin">Student</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                NGO
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Volunteer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Founder</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
