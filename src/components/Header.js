import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./images/Logo.svg"

const Header = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="lg" className='p-3'>
                    <Container>
                        <Navbar.Brand href="#home"><img src={Logo} alt="" className="img-fluid"></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="" className='nav-text'>About</Nav.Link>
                                <Nav.Link href="" className='nav-text'>Feature</Nav.Link>
                                <Nav.Link href="" className='nav-text'>Contact</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="" className='login'>Log In</Nav.Link>
                                <Nav.Link href="" className='sign-btn'><span>Sign Up</span></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header
