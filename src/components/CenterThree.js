import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shadowback from "./images/shadowback.svg"
import centerImg from "./images/centerImg.svg"
import CheckCircle from "./images/CheckCircle.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const CenterThree = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section className='center-one'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='center-img'>
                                <div className='shadow-backimg'><img src={shadowback} className="img-fluid" alt=""></img></div>
                                <div className='shadowback-img'>
                                    <img src={centerImg} className="img-fluid" alt="" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                    </img></div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='right-card-wrapper'>
                                <div className='right-card'>
                                    <h2>Ace your classes with our AI Tutor</h2>
                                    <p>Our AI Tutor uses cutting-edge technology to help you excel in your classes.
                                        Get personalized support and practice with challenging concepts to boost your grades and achieve academic success. </p>
                                </div>
                                <div className='card-wrapper' data-aos="fade-up">
                                    <div className='pricing-plane'>
                                        <img src={CheckCircle} className="img-fluid" alt=""></img>
                                        <p>Trained on high-quality class data </p>
                                    </div>
                                    <div className='pricing-plane'>
                                        <img src={CheckCircle} className="img-fluid" alt=""></img>
                                        <p>Say hello to a smarter way of learning.</p>
                                    </div>
                                    <div className='pricing-plane'>
                                        <img src={CheckCircle} className="img-fluid" alt=""></img>
                                        <p>No training or maintenance needed.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CenterThree
