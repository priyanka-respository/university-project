import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import headtop from "./images/headtop.svg"
import leftshadow from "./images/leftshadow.png"
import cred from "./images/cred.svg"
import mcgill from "./images/mcgill.svg"
import queen from "./images/queen.svg"
import uottawa from "./images/uottawa.svg"
import rightshadow from "./images/rightshadow.svg"
import samsung2 from "./images/samsung2.png"
import star from "./images/star.svg"
import pcshadow from "./images/pcshadow.svg"
import curve from "./images/curve.svg"
import CreateAcountBtn from './CreateAcountBtn';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section className='plateform-heading'>
                <div className='left-image'><img src={leftshadow} alt="new image" class="img-fluid" ></img></div>
                <Container>
                    <div className='headings text-center'>
                        <div className='head-top'><img src={headtop} class="img-fluid" alt=""></img></div>
                        <h1 data-aos="fade-up" data-aos-delay="400">One-stop platform for university students</h1>
                        <div className='d-flex justify-content-center'>
                            <p className='m-0' data-aos="fade-up" data-aos-delay="400">Experience university life to the fullest and ease with our dedicated social platform</p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400">
                            <CreateAcountBtn />
                            <div className='inside-logo d-flex justify-content-center align-items-center'>
                                <div className='left-logo'>
                                    <div className='left-logo-text pe-5'>
                                        <img src={cred} className="img-fluid pe-4" alt=""></img>
                                        <img src={mcgill} class="img-fluid" alt=""></img>
                                    </div>
                                    <span className='logo-text'>Concordia & McGill</span>
                                </div>
                                <div className='right-logo'>
                                    <div>
                                        <img src={queen} className="img-fluid pe-4" alt=""></img>
                                        <img src={uottawa} class="img-fluid" alt=""></img>
                                    </div>
                                    <span className='logo-text'>Coming soon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='banner py-5'>
                <div className='right-img'><img src={rightshadow} alt="" className='img-fluid'></img></div>
                <Container>
                    <div className='row justify-content-center'>
                        <div className='col-md-2 position-relative'>
                        <div className='pc-topshadow'><img src={pcshadow} ></img></div>
                            <div className='star'><img src={star} className="img-fluid"></img></div>
                            <div className='curve-line'><img src={curve} className="img-fluid"></img></div>
                        </div>
                        <div className='col-md-10'>
                            <div className='banner_img position-relative'>
                                <img src={samsung2} data-aos="zoom-in" className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Banner
