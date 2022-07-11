import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, usePath} from "raviger";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => (
  <Navbar bg="light" expand="lg" className="mb-2">
    <Container>
      <Navbar.Brand as={Link} href="/">Fantasy Triumph Army Builder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" activeKey={usePath() ?? ''}>
          <Nav.Link as={Link} href="/">Army Template</Nav.Link>
          <Nav.Link as={Link} href="/list">Army List</Nav.Link>
          <Nav.Link as={Link} href="/game">Game Mode</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;