import React from "react";
import {Nav, Navbar } from "react-bootstrap";
import {Link, usePath} from "raviger";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => (
  <Navbar bg="light" expand="lg" className="mb-2">
    <Navbar.Brand as={Link} href="/">Fantasy Triumph Army Builder</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" activeKey={usePath() ?? ''}>
        <Nav.Link as={Link} href="/">Army Template</Nav.Link>
        <Nav.Link as={Link} href="/list">Armi List</Nav.Link>
        <Nav.Link as={Link} href="/game">Game Mode</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;