import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import people from "./images/people.png"
import image1 from "./images/image1.png"
import image2 from "./images/image2.svg"
import image3 from "./images/image3.png"
import ArrowUpRight from "./images/ArrowUpRight.svg"
import backshadow from "./images/backshadow.png"
import highlighttop from "./images/highlighttop.svg"

const SocialPalteform = () => {
    return (
        <>
            <section className='social-plateform' data-aos="fade-up">
                <div className='back-shadow'><img src={backshadow} alt=""></img></div>
                <Container>
                    <Row className='first-row'>
                        <Col md={8}>
                            <div className='student-social similar-people'>
                                <div className='high-topline'><img src={highlighttop}></img></div>
                                <h4>Student social platform that handles it all with Ali priyanka ki wajah se.</h4>
                                <div className='button-wrapper'>
                                    <a href='' className='create'><span>See all Features</span>
                                        <img src={ArrowUpRight} className="img-fluid hover-up" alt=""></img>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='similar-people p-img'>
                                <img src={people} alt=""></img>
                                <h3>Meet Similar People</h3>
                                <p>Discover like-minded students and expand your university network within your interests</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className='similar-people p-img'>
                                <img src={image3} alt=""></img>
                                <h3>Manage Events</h3>
                                <p>Easily find, plan, and organize events with other students.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='similar-people p-img'>
                                <img src={image1} alt=""></img>
                                <h3>Local Opportunities </h3>
                                <p>Access local jobs, deals, and products tailored to the interests you choose.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='similar-people p-img'>
                                <img src={image2} alt=""></img>
                                <h3>AI Personal Tutor</h3>
                                <p>Get personalized academic support for the most popular classes from AI virtual tutors.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SocialPalteform
