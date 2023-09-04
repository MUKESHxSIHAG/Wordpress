import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SuccessGuidesImg from '../assets/images/png/SuccessGuidesImg.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import VipePPP from '../assets/images/png/VipePPP.png'
const SuccessGuides = () => {
    return (
        <>
            <section className='SuccessGuidesBg'>
                <Container>
                    <Row className='align-items-center mb-5'>
                        <Col lg={4} data-aos="zoom-in">
                            <div>
                                <img className='mt-245 w-100' src={SuccessGuidesImg} alt="Main Image" />
                            </div>
                        </Col>

                        <Col lg={8} data-aos="zoom-in" className='pt-245'>
                            <div>
                                <p className='fc-gray ff-Gilroy fs-16 fw-400 mb-0'>HAVE YOU SEEN OUR MASCOT?</p>
                                <h3 className='fc-black ff-Konexy fs-48 fw-400'>Success Guides</h3>

                                <div>
                                    <Tabs
                                        defaultActiveKey="Category-1"
                                        transition={false}
                                        id="noanim-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="Category-1" title="Category-1" >
                                            <Row className='justify-content-center align-items-center'>
                                                <Col lg={4} md={6}>
                                                    <div className='successGuidesCard'>
                                                        <img className='w-100' src={VipePPP} alt="Vipe PPP" />
                                                        <h4 className='fs-24 fc-black ff-Gilroy fw-600 mt-3'>Sit diam metus</h4>
                                                        <p className='fs-16 fc-black fw-400 ff-Gilroy opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                        <p className='fc-primary ff-Gilroy fs-16 fw-600 crsr learnMore'>Learn More....</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={6} className='mt-md-0 mt-4'>
                                                    <div className='successGuidesCard'>
                                                        <img className='w-100' src={VipePPP} alt="Vipe PPP" />
                                                        <h4 className='fs-24 fc-black ff-Gilroy fw-600 mt-3'>diam metus Sit</h4>
                                                        <p className='fs-16 fc-black fw-400 ff-Gilroy opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                        <p className='fc-primary ff-Gilroy fs-16 fw-600 crsr learnMore'>Learn More....</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={6} className='mt-lg-0 mt-4'>
                                                    <div className='successGuidesCard'>
                                                        <img className='w-100' src={VipePPP} alt="Vipe PPP" />
                                                        <h4 className='fs-24 fc-black ff-Gilroy fw-600 mt-3'>metus Sit diam</h4>
                                                        <p className='fs-16 fc-black fw-400 ff-Gilroy opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                        <p className='fc-primary ff-Gilroy fs-16 fw-600 crsr learnMore'>Learn More....</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="Category-2" title="Category-2">
                                            <Row>
                                                <Col lg={4} md={6}>
                                                    <div className='successGuidesCard'>
                                                        <img className='w-100' src={VipePPP} alt="Vipe PPP" />
                                                        <h4 className='fs-24 fc-black ff-Gilroy fw-600 mt-3'>diam Sit metus</h4>
                                                        <p className='fs-16 fc-black fw-400 ff-Gilroy opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                        <p className='fc-primary ff-Gilroy fs-16 fw-600 crsr learnMore'>Learn More....</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={6} className='mt-md-0 mt-4'>
                                                    <div className='successGuidesCard'>
                                                        <img className='w-100' src={VipePPP} alt="Vipe PPP" />
                                                        <h4 className='fs-24 fc-black ff-Gilroy fw-600 mt-3'>Sit metus diam</h4>
                                                        <p className='fs-16 fc-black fw-400 ff-Gilroy opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                        <p className='fc-primary ff-Gilroy fs-16 fw-600 crsr learnMore'>Learn More....</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={6} className='mt-lg-0 mt-4'>
                                                    <div className='successGuidesCard'>
                                                        <img className='w-100' src={VipePPP} alt="Vipe PPP" />
                                                        <h4 className='fs-24 fc-black ff-Gilroy fw-600 mt-3'> diam metus Sit</h4>
                                                        <p className='fs-16 fc-black fw-400 ff-Gilroy opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                        <p className='fc-primary ff-Gilroy fs-16 fw-600 crsr learnMore'>Learn More....</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="Category-3" title="Category-3">
                                            <Row>
                                                <Col lg={4} md={6}>
                                                    <div className='successGuidesCard'>
                                                        <img className='w-100' src={VipePPP} alt="Vipe PPP" />
                                                        <h4 className='fs-24 fc-black ff-Gilroy fw-600 mt-3'> metus Sit diam</h4>
                                                        <p className='fs-16 fc-black fw-400 ff-Gilroy opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                        <p className='fc-primary ff-Gilroy fs-16 fw-600 crsr learnMore'>Learn More....</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={6}>
                                                    <div className='successGuidesCard mt-md-0 mt-4'>
                                                        <img className='w-100' src={VipePPP} alt="Vipe PPP" />
                                                        <h4 className='fs-24 fc-black ff-Gilroy fw-600 mt-3'>Sit diam metus </h4>
                                                        <p className='fs-16 fc-black fw-400 ff-Gilroy opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                        <p className='fc-primary ff-Gilroy fs-16 fw-600 crsr learnMore'>Learn More....</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={6}>
                                                    <div className='successGuidesCard mt-lg-0 mt-4'>
                                                        <img className='w-100' src={VipePPP} alt="Vipe PPP" />
                                                        <h4 className='fs-24 fc-black ff-Gilroy fw-600 mt-3'>diam Sit metus  </h4>
                                                        <p className='fs-16 fc-black fw-400 ff-Gilroy opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                        <p className='fc-primary ff-Gilroy fs-16 fw-600 crsr learnMore'>Learn More....</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="Category-4" title="Category-4">
                                            <Row>
                                                <Col lg={4} md={6}>
                                                    <div className='successGuidesCard'>
                                                        <img className='w-100' src={VipePPP} alt="Vipe PPP" />
                                                        <h4 className='fs-24 fc-black ff-Gilroy fw-600 mt-3'>Sit diam metus</h4>
                                                        <p className='fs-16 fc-black fw-400 ff-Gilroy opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                        <p className='fc-primary ff-Gilroy fs-16 fw-600 crsr learnMore'>Learn More....</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={6}>
                                                    <div className='successGuidesCard mt-md-0 mt-4'>
                                                        <img className='w-100' src={VipePPP} alt="Vipe PPP" />
                                                        <h4 className='fs-24 fc-black ff-Gilroy fw-600 mt-3'>Sit diam metus</h4>
                                                        <p className='fs-16 fc-black fw-400 ff-Gilroy opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                        <p className='fc-primary ff-Gilroy fs-16 fw-600 crsr learnMore'>Learn More....</p>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={6}>
                                                    <div className='successGuidesCard mt-lg-0 mt-4'>
                                                        <img className='w-100' src={VipePPP} alt="Vipe PPP" />
                                                        <h4 className='fs-24 fc-black ff-Gilroy fw-600 mt-3'>Sit diam metus</h4>
                                                        <p className='fs-16 fc-black fw-400 ff-Gilroy opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                        <p className='fc-primary ff-Gilroy fs-16 fw-600 crsr learnMore'>Learn More....</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </Col>
                    </Row>


                    <div className='speedPerformance d-flex flex-column flex-md-row align-items-center justify-content-between'>
                        <div>
                            <h3 className='fc-white ff-Konexy fw-400 fs-48'>Have you</h3>
                            <p className='fc-white fs-24 ff-Gilroy fw-600 mb-0'>read our study about Speed and <span className='d-md-block d-lg-inline'>Performance in <span className='d-lg-block'> WordPress?</span></span></p>
                        </div>
                        <div className='mt-3 mt-md-4 mt-lg-0 d-flex align-items-center'>
                            <button className='checkBtn fc-primary fs-16 ff-Inter fw-600'>Check it Out</button>
                        </div>
                    </div>

                </Container>
            </section>

        </>
    )
}

export default SuccessGuides
