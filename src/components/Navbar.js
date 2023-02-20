// import { Outlet, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Math magicians</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Calculator">Calculator</Nav.Link>
            <Nav.Link href="/Quote">Quote</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
  </>
 
);

export default Navbars;
