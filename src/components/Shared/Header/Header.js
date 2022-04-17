import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import title from '../../../images/title.png'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <>
            <Navbar className='navbar-container sticky-top' collapseOnSelect expand="lg" variant='dark'>
                <Container>
                    <Link to='/' className='me-3'>
                        <img height="50px" src={title} alt="" />
                    </Link>
                    <Navbar.Toggle style={{ color: "white" }} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <CustomLink to='/'>Home</CustomLink>
                            <CustomLink to='/blog'>Blog</CustomLink>
                            <CustomLink to='/about'>About</CustomLink>
                        </Nav>
                        <Nav>
                            <CustomLink to='/login'>Login</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;