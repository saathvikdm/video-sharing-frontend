import React from 'react';
import { Navbar, NavDropdown, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Logo from '../logo.svg';

export default function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="BashaMandakini logo" height="50px" className="mt-1" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <Nav.Link href="/browse">Browse</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <NavDropdown.Divider />
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="ms-3 me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form> */}
          <Nav.Link href="http://localhost:1337/admin/auth/login">Login</Nav.Link>
          <Nav.Link href="http://localhost:1337/admin/auth/login">Sign Up</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
