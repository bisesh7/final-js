// Navbar.js
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const isAuthenticated = false; // Replace with your authentication state logic

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Book Market
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/discover">
              Discover
            </Nav.Link>
            <Nav.Link as={Link} to="/bookmark">
              Bookmark
            </Nav.Link>
            <Nav.Link as={Link} to="/connect">
              Connect
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {isAuthenticated ? (
              <Button variant="outline-light">Logout</Button>
            ) : (
              <Button variant="outline-light" as={Link} to="/login">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
