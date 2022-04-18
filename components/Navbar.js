import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <Nav fill variant="pills">
      <Nav.Item>
        <Nav.Link eventKey={1} href="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={2} title="Item" href="/about">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={3} title="Item" href="/profile">
          Profile
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={4} title="Item" href="/messages">
          Messages
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey={5.1}>Login</NavDropdown.Item>
        <NavDropdown.Item eventKey={5.2}>Register</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default Navbar;
