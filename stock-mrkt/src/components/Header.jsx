import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import D2 from '../img/D2.png'
import './Header.css'
import { Navbar, Container, Nav } from 'react-bootstrap'; 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className='navBarHeader'>
      <Container>
        <Navbar.Brand className='navBarLogo' href="#home">
        <img
          src={D2}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <p className='colorWhite'> Deepak</p>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
          <Nav.Link className='colorWhite' href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link className='colorWhite' href="#about"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link className='colorWhite' href="#contact"><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link className='colorWhite' href="#contact"><Link to="/signup">Sign Up</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
