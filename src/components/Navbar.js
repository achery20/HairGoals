// Navbar.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">HairGoals</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="ml-auto">
          <Nav.Link href="#">Our Mission</Nav.Link>
          <Nav.Link href="#">Hair Products</Nav.Link>
          <Nav.Link href="#">Hairstyles</Nav.Link>
          <Nav.Link as={Link} to="/Signup" className="nav-link active">Account</Nav.Link>

          
          {/* Add more Nav.Link items as needed */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
}

export default CustomNavbar;
