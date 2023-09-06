import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Verified from '../assets/images/svg/Verified.svg'
import Check from '../assets/images/svg/Check.svg'
import VipeGirlImg from '../assets/images/png/VipeGirlImg.png'
const VipeStudio = () => {
    return (
        <>
            <section className='nav-bg position-relative overflow-hidden'>
                <div className='blurGradient gradientVipe1'></div>
                <div className='blurGradient2 gradientVipe2'></div>
                <Container className='pt-3 pb-5 position-relative z-3'>
                    <div className='d-flex flex-wrap justify-content-between pt-5'>
                        <div data-aos="zoom-in">
                            <h2 className='fs-40 ff-Konexy fw-400 fc-white max-533'>All Vipe Studio WordPress services	include:</h2>
                        </div>
                        <div className='pt-4 pt-xl-0' data-aos="zoom-in">
                            <h3 className='fs-24 ff-Gilroy fw-600 fc-white'>By Industry</h3>
                            <div className='d-flex align-items-center gap-2'>
                                <img src={Verified} alt="Verified Icon" />
                                <p className='mb-0 fs-16 ff-Gilroy fc-white opacity-75 fw-400'>Lorem in elementum pellentesque</p>
                            </div>

                            <div className='d-flex align-items-center gap-2 mt-2'>
                                <img src={Verified} alt="Verified Icon" />
                                <p className='mb-0 fs-16 ff-Gilroy fc-white opacity-75 fw-400'>Molestie cursus praesent mi</p>
                            </div>

                            <div className='d-flex align-items-center gap-2 mt-2'>
                                <img src={Verified} alt="Verified Icon" />
                                <p className='mb-0 fs-16 ff-Gilroy fc-white opacity-75 fw-400'>Leo sed viverra cras</p>
                            </div>

                            <div className='d-flex align-items-center gap-2 mt-2'>
                                <img src={Verified} alt="Verified Icon" />
                                <p className='mb-0 fs-16 ff-Gilroy fc-white opacity-75 fw-400'>Laoreet feugiat ut at</p>
                            </div>

                            <div className='d-flex align-items-center gap-2 mt-2'>
                                <img src={Verified} alt="Verified Icon" />
                                <p className='mb-0 fs-16 ff-Gilroy fc-white opacity-75 fw-400'>Risus aliquam molestie viverra</p>
                            </div>

                            <div className='d-flex align-items-center gap-2 mt-2'>
                                <img src={Verified} alt="Verified Icon" />
                                <p className='mb-0 fs-16 ff-Gilroy fc-white opacity-75 fw-400'>Diam enim pulvinar velit</p>
                            </div>

                        </div>

                        <div className='pt-4 pt-xl-0' data-aos="zoom-in">
                            <h3 className='fs-24 ff-Gilroy fw-600 fc-white'>By Services</h3>
                            <div className='d-flex align-items-center gap-2'>
                                <img src={Verified} alt="Verified Icon" />
                                <p className='mb-0 fs-16 ff-Gilroy fc-white opacity-75 fw-400'>Accumsan, dui a semper</p>
                            </div>

                            <div className='d-flex align-items-center gap-2 mt-2'>
                                <img src={Verified} alt="Verified Icon" />
                                <p className='mb-0 fs-16 ff-Gilroy fc-white opacity-75 fw-400'>Interdum malesuada vulputate neque</p>
                            </div>

                            <div className='d-flex align-items-center gap-2 mt-2'>
                                <img src={Verified} alt="Verified Icon" />
                                <p className='mb-0 fs-16 ff-Gilroy fc-white opacity-75 fw-400'>Nullam non a, morbi</p>
                            </div>

                            <div className='d-flex align-items-center gap-2 mt-2'>
                                <img src={Verified} alt="Verified Icon" />
                                <p className='mb-0 fs-16 ff-Gilroy fc-white opacity-75 fw-400'>Arcu morbi leo eu</p>
                            </div>

                            <div className='d-flex align-items-center gap-2 mt-2'>
                                <img src={Verified} alt="Verified Icon" />
                                <p className='mb-0 fs-16 ff-Gilroy fc-white opacity-75 fw-400'>Viverra venenatis, in ornare</p>
                            </div>

                            <div className='d-flex align-items-center gap-2 mt-2'>
                                <img src={Verified} alt="Verified Icon" />
                                <p className='mb-0 fs-16 ff-Gilroy fc-white opacity-75 fw-400'>Erat id aliquam habitant</p>
                            </div>

                        </div>
                    </div>


                    <div className='pb-3'>
                        <div className=' mt-170'>
                            <Row className='justify-content-center align-items-center vipeCard'>
                                <Col lg={4} data-aos="zoom-in">
                                    <div>
                                        <h2 className='max-324 ff-Konexy fs-35 fw-400 fc-white'>Not Sure which service you need yet?</h2>
                                        <p className='ff-Gilroy fs-16 fw-600 fc-white navBtn mt-4 whiteSpace'>Schedule An Appointment</p>
                                    </div>
                                </Col>

                                <Col lg={4} md={6} className='mt-lg-0 mt-4' data-aos="zoom-in">
                                    <div>
                                        <h3 className='max-386 fs-24 ff-Gilroy fc-white fw-700'>20-m free consultation that will help us identifyif  you need		</h3>
                                        <div>
                                            <div className='gap-2 d-flex align-items-center mt-4'>
                                                <img src={Check} alt="Check Icon" />
                                                <p className='mb-0 fs-16 ff-Gilroy fw-400 fc-white opacity-75'>Technical Description & Discovery</p>
                                            </div>
                                            <div className='gap-2 d-flex align-items-center mt-15'>
                                                <img src={Check} alt="Check Icon" />
                                                <p className='mb-0 fs-16 ff-Gilroy fw-400 fc-white opacity-75'>Custom WordPress Development</p>
                                            </div>
                                            <div className='gap-2 d-flex align-items-center mt-15'>
                                                <img src={Check} alt="Check Icon" />
                                                <p className='mb-0 fs-16 ff-Gilroy fw-400 fc-white opacity-75'>Support & Maintenance</p>
                                            </div>
                                            <div className='gap-2 d-flex align-items-center mt-15'>
                                                <img src={Check} alt="Check Icon" />
                                                <p className='mb-0 fs-16 ff-Gilroy fw-400 fc-white opacity-75'>Other WordPress Service	</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4} md={6} className='mt-lg-0 mt-5' data-aos="fade-right">
                                    <div>
                                        <img className='w-100' src={VipeGirlImg} alt="Girl Image" />
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default VipeStudio
