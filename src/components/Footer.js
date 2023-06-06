import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";
import { MdArrowForwardIos } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Logo from "./images/Logo.svg"
const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className='footer-logo'>
                                <a href=''><img src={Logo} className="img-fluid"></img></a>
                                <div className='footer-list'>
                                    <p>One-stop platform for university students.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Col md={6}>
                                    <div className='footer-text'>
                                        <h3>Pages</h3>
                                        <div className='footer-list'>
                                            <ul className='p-0'>
                                                <li><a href='/#'>Homepage</a></li>
                                                <li><a href='/#'>Features</a></li>
                                                <li><a href='/#'>Company</a></li>
                                            </ul></div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='footer-text'>
                                        <h3>Legal</h3>
                                        <div className='footer-list'>
                                            <ul className='p-0'>
                                                <li><a href='/#'>Terms of Service</a></li>
                                                <li><a href='/#'>Privacy Policy</a></li>
                                                <li><a href='/#'>Licenses</a></li>
                                            </ul></div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <div className='footer-text '>
                                <h3>Subscribe to our newsletter</h3>
                                <div className='footer-list'>
                                    <form>
                                        <input type='email' placeholder='Enter your e-mail'></input>
                                        <button type='submit' className='arrow-btn'><MdArrowForwardIos className='footer-icon' /></button>
                                    </form>
                                </div>
                                <div className='footer-list'>
                                    <h3>SOCIAL MEDIA</h3>
                                    <ul className='p-0 d-flex social-icon'>
                                        <li><a href='/#'><GrFacebookOption /></a></li>
                                        <li><a href='/#'><RiTwitterFill /></a></li>
                                        <li><a href='/#'><FaLinkedinIn /></a></li>
                                        <li><a href='/#'><AiFillInstagram /></a></li>
                                    </ul></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer
