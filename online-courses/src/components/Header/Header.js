import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Header = () => {
    return (
        <div className="container">
            <nav>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >
            <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className='style'>
                <Nav className="mr-auto">
                    <Nav.Link href="Home">Home</Nav.Link>
                    <Nav.Link href="Courses">Courses</Nav.Link>
                    <Nav.Link href="pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="SignIn"><Button variant="light">Sign In</Button></Nav.Link>
                    <Nav.Link href="Login"><Button variant="light">Login</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </nav>
        </div>
    );
};

export default Header;