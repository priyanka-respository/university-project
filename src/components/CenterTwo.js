import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import backimg2 from "./images/backimg2.svg"
import centerImg from "./images/centerImg.svg"
import CheckCircle from "./images/CheckCircle.svg"
import rotatearrow from "./images/rotatearrow.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const CenterTwo = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div data-aos="fade-up">
                                <div className='right-card'>
                                    <h2>Find events, jobs, news, and more across your campus</h2>
                                    <p>Discover all the exciting opportunities available in your area,
                                        from social events and clubs to job postings and exclusive deals</p><br /><br />
                                    <p>Discover all the exciting opportunities available in your area,
                                        from social events and clubs to job postings and exclusive deals</p>
                                </div>
                                <div className='btn-card-img' data-aos="fade-up">
                                    <a href="">
                                        <img src={rotatearrow} className="img-fluid" alt="" ></img>
                                        <span>Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='center-img'>
                                <div className='shadow-two'><img src={backimg2} alt=""></img></div>
                                <div className='shadowback-img'>
                                    <img src={centerImg} className="img-fluid" alt="" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                    </img></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CenterTwo
