import React from 'react';

import {
  Navbar,
  NavDropdown,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Logo from '../logo.svg';
import CiilLogo from '../ciil_logo.png';
import GoiLogo from '../goi_logo.svg';

export default function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src={GoiLogo} alt="BashaMandakini logo" height="50px" className="mx-1 mx-md-3" />
          <img src={CiilLogo} alt="BashaMandakini logo" height="50px" className="mx-1 mx-md-3" />
          <span className="mx-1 text-primary-blue" style={{ fontWeight: '500' }}>
            BashaMandakini
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Browse" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Videos</NavDropdown.Item>
              <NavDropdown.Item href="#">Audios</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">Team</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown.Divider />
            <Dropdown className="mx-2">
              <Dropdown.Toggle variant="primary" id="dropdown-basic" className="bg-primary-blue">
                Language: English
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Hindi</Dropdown.Item>
                <Dropdown.Item href="#">Kannada</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          {/* <Nav.Link href="http://localhost:1337/admin/auth/login">Login</Nav.Link>
          <Nav.Link href="http://localhost:1337/admin/auth/login">Sign Up</Nav.Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
