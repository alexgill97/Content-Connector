import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../firebase/context';

import Logout from './Logout';

const Navbar = ({ user }) => {
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
      <Nav.Item>
        {user ? (
          <Nav.Item>
            <Logout />
            {user}
          </Nav.Item>
        ) : (
          <Nav.Link eventKey={5} title="Item" href="/login">
            Login
          </Nav.Link>
        )}
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey={5.1}>Login</NavDropdown.Item>
        <NavDropdown.Item eventKey={5.2}>Register</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default Navbar;
