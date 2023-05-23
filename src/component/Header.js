import React from 'react';
import {Navbar, Container , Nav} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import logo from '../component/aa.svg'
const Header = () => {
  return <>
    <Navbar bg="dark" variant="dark" expand='lg'>
        <Container>
        <Navbar.Brand as={Link} to="/">
        <img src={logo} width="50" hight="50" className="App-logo" alt="logo" />{' '}
            M.Elsawy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto" navbarScroll>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/resume">resume</Nav.Link>
                <Nav.Link as={Link} to="/contact">contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
</>;
};

export default Header;
