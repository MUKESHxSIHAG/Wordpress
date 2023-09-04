import React from 'react'
import Enterprise from '../assets/images/svg/Enterprise.svg'
import Buildings from '../assets/images/svg/Buildings.svg'
import Asisstant from '../assets/images/svg/Assistant.svg'
import { Container, Row, Col } from 'react-bootstrap'
const IntegerSection = () => {
    return (
        <>
            <section className='integerBg'>
                <Container className='pb-4'>
                    <h2 className='ff-Konexy fs-48 fw-400 fc-black mt-5 pt-5'>Integer et nisl non</h2>

                    <Row className='mt-5 mt-2 mb-5 pb-5 justify-content-center align-items-center'>
                        <Col lg={4} md={6} data-aos="fade-left">
                            <div className='integerCard'>
                                <div className='d-flex flex-column text-center justify-content-center align-items-center'>
                                    <img src={Enterprise} alt="Enterprise Icon" />
                                    <h4 className='mt-4 ff-Inter fc-black fs-24 fw-600 '>Enterprise WordPress Solutions	</h4>
                                    <p className='fs-16 fw-400 ff-Gilroy fc-black opacity-75 mt-3'>Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.</p>
                                    <p className='fc-primary fw-600 ff-Gilroy fs-16 crsr learnMore'>Learn More</p>
                                </div>
                            </div>

                        </Col>

                        <Col lg={4} md={6} className='pt-4 pt-sm-0' data-aos="fade-down">
                            <div className='integerCard'>
                                <div className='d-flex flex-column text-center justify-content-center align-items-center'>
                                    <img src={Buildings} alt="Buildings Icon" />
                                    <h4 className='mt-4 ff-Inter fc-black fs-24 fw-600 '>Small to Mid Size Business Development</h4>
                                    <p className='fs-16 fw-400 ff-Gilroy fc-black opacity-75 mt-3'>Et nunc fermentum id amet tempus, elementum. Eget ac ultrices tortor, mattis amet blandit aenean amet. Massa diam lacus, aliquam neque, cursus.</p>
                                    <p className='fc-primary fw-600 ff-Gilroy fs-16 crsr learnMore'>Learn More</p>
                                </div>
                            </div>

                        </Col>


                        <Col lg={4} md={6} className='pt-4 pt-lg-0' data-aos="fade-right">
                            <div className='integerCard'>
                                <div className='d-flex flex-column text-center justify-content-center align-items-center'>
                                    <img src={Asisstant} alt="Asisstant Icon" />
                                    <h4 className='mt-4 ff-Inter fc-black fs-24 fw-600 '>Support & Maintenance	</h4>
                                    <p className='fs-16 fw-400 ff-Gilroy fc-black opacity-75 mt-3'>Ac donec ipsum fringilla tortor, consectetur etiam sociis amet quis. Viverra volutpat pretium non in fusce tellus sed urna. Pharetra ullamcorper et donec aliquam.</p>
                                    <p className='fc-primary fw-600 ff-Gilroy fs-16 crsr learnMore'>Learn More</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default IntegerSection
