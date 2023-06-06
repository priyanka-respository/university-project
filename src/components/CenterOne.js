import React,{useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shadowback from "./images/shadowback.svg"
import centerImg from "./images/centerImg.svg"
import CheckCircle from "./images/CheckCircle.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const CenterOne = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
  <>
  <section className='center-one' data-aos="zoom-in">
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
                <div className='right-card-wrapper' >
                <div className='right-card'>
                    <h2>Meet like-minded people in one place</h2>
                    <p>Connect with individuals sharing similar interests, all in one convenient location.</p>
                </div>
                <div className='card-wrapper' data-aos="fade-up">
                <div className='pricing-plane'>
                    <img src={CheckCircle} className="img-fluid" alt=""></img>
                    <p>No hidden fees.</p>
                </div>
                <div className='pricing-plane'>
                    <img src={CheckCircle} className="img-fluid" alt=""></img>
                    <p>100% security. Guaranteed.</p>
                </div>
                <div className='pricing-plane'>
                    <img src={CheckCircle} className="img-fluid" alt=""></img>
                    <p>No maintenance needed.</p>
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

export default CenterOne
