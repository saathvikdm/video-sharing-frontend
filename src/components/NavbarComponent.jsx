import React from 'react';
import { Navbar, NavDropdown, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
      <Container className="py-2">
        <Navbar.Brand href="/">Language Documentaries</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <Nav.Link href="/#featured">Featured</Nav.Link>
            <Nav.Link href="http://localhost:1337/admin/auth/login">Login</Nav.Link>
          </Nav>
          <NavDropdown.Divider />
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="ms-3 me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
