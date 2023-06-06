import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import check from "./images/check.svg"
import Logo from "./images/Logo.svg"
import unishadow from "./images/unishadow.svg"
import uniline from "./images/uniline.svg"
import Vector from "./images/Vector.svg"
import CreateAcountBtn from './CreateAcountBtn';
import XCircle from "./images/XCircle.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Uni_left = [
    {
        name: "No hidden fees. No surprises",
    },
    {
        name: "Manage uni-life, with no stress",
    },
    {
        name: "Supports most popular classes",
    },
    {
        name: "Provides 24/7 email support",
    },
    {
        name: "Integrates seamlessly with Stripe",
    },
    {
        name: "Works with real local data",
    },
]
const Uni_right = [
    {
        name: "Complicated fee structure",
    },
    {
        name: "Need a lot of manual data adjustments",
    },
    {
        name: "Consistently wrong answers to questions",
    },
    {
        name: "Have poor support and wait times",
    },
    {
        name: "Have spotty integrations",
    },
    {
        name: "Use unfair & unethical techniques",
    },
]
const Unisocial = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section className='unisocial'>
                <div className='uni-headings text-center'>
                    <h2 data-aos="fade-up">Why UniSocial?</h2>
                    <p data-aos="fade-up">Most “education” platforms work against you, than for you.<br /> Shift to the software that’s made by students for students.</p>
                </div>
                <Container className='uni-container'>
                    <div className='uni-image'><img src={unishadow} alt="" className="img-fluid"></img></div>
                    <Row>
                        <Col md={6}>
                            <div className='left-lines'><img src={uniline} alt="" className="img-fluid"></img></div>
                            <div className='uni-firstbox'>
                                <a href=''><img src={Logo} className="img-fluid" data-aos="fade-up"></img></a>
                                <div className='bottom-box'>
                                    <h4>Makes “uni-life” easy</h4>
                                    {Uni_left.map((item) => {
                                        return <div key={item.name}>
                                            <div className='d-flex'>
                                                <img src={check} alt=''></img>
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className='vector-img'>
                                <img src={Vector} alt="" className="img-fluid"></img>
                            </div>
                            <div className='circle'>
                                <div>VS</div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='uni-secondbox'>
                                <h3 className='text-center mb-0' data-aos="fade-up">Other Websites</h3>
                                <div className='bottom-box' style={{ marginTop: '43px' }}>
                                    <h4>confusing with payments</h4>
                                    {Uni_right.map((item) => {
                                        return <div key={item.name}>
                                            <div className='d-flex'>
                                                <a href=''><img src={XCircle} className="img-fluid"></img></a>
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='bottom-btn'>
                <Container>
                    <div className='my-btn d-flex justify-content-center'>
                        <CreateAcountBtn />
                    </div>
                    <p className='mt-2'>Doesn’t hurt to try....</p>
                </Container>
            </section>
        </>
    )
}

export default Unisocial
