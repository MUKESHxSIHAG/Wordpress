import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Search2 from '../assets/images/svg/Search2.svg'
import Arrow from '../assets/images/svg/Arrow.svg'
import { Call, Email, Facebook, Github, Home, Instagram, Linkedin, Twitter, Wood } from './Icons'
const FooterSection = () => {
    return (
        <>
            <section className='bg-black'>
                <Container>
                    <Row className='pt-150'>
                        <div className='d-flex justify-content-end mb-5'>
                            <div className='d-flex justify-content-between footerSearch'>
                                <input type="text" placeholder='Search here.....' />
                                <img className='crsr' src={Search2} alt="Search Icon" />
                            </div>
                        </div>
                        <Col lg={3}>
                            <div>
                                <ul>
                                    <li className='ff-Gilroy fs-16 fw-400 fc-white'>Services</li>
                                    <Link className='d-flex mt-4 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>WordPress Development</p></Link>
                                    <Link className='d-flex mt-3 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>WooCommerce Development</p></Link>
                                    <Link className='d-flex mt-3 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>WordPress Maintenance</p></Link>
                                    <Link className='d-flex mt-3 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>Speed Optimizationt</p></Link>
                                    <Link className='d-flex mt-3 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>Dedicated WordPress Developer</p></Link>
                                    <Link className='d-flex mt-3 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>Headless WordPress Development</p></Link>
                                    <Link className='d-flex mt-3 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>White Label Development</p></Link>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div>
                                <ul>
                                    <li className='ff-Gilroy fs-16 fw-400 fc-white'>Services</li>
                                    <Link className='d-flex mt-4 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>WordPress Hosting</p></Link>
                                    <Link className='d-flex mt-3 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>PSD, XD, Figma to WordPress Conversion</p></Link>
                                    <Link className='d-flex mt-3 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>Custom WordPress Theme</p></Link>
                                    <Link className='d-flex mt-3 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>Custom WordPress Plugins</p></Link>
                                    <Link className='d-flex mt-3 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>CMS to WordPress</p></Link>
                                    <Link className='d-flex mt-3 gap-1'><img src={Arrow} alt="Arrow" />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>WordPress Malware Removal</p></Link>

                                </ul>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div>
                                <ul>
                                    <li className='ff-Gilroy fs-16 fw-400 fc-white'>Latest Articles</li>
                                    <Link className=' d-flex flex-column mt-4'>
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>7 WordPress Plugins to Create an Effective Newsletter 03.01.2022</p></Link>
                                    <Link className='d-flex flex-column mt-3'>
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>What’s the Perfect Blog Post Length for Your WordPress Site’s SEO?
                                            02.01.2022</p></Link>
                                    <Link className='d-flex flex-column mt-3'>
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>5 Reasons the Future of WordPress Is Headless 01.01.2022</p></Link>
                                    <Link className='d-flex flex-column mt-3'>
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy opacity-75 learnMore'>Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the Amazingly Successful 2021 30.12.2021</p></Link>


                                </ul>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div>
                                <ul>
                                    <li className='ff-Gilroy fs-16 fw-400 fc-white'>Contact</li>
                                    <Link className='d-flex mt-4 opacity-75 gap-2'>
                                        <Call />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy learnMore'>EU: +359 988 993 128</p></Link>
                                    <Link className='d-flex mt-3 opacity-75 gap-2'>
                                        <Call />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy learnMore'>US: +1 (1 888) 266-6917</p></Link>
                                    <Link className='d-flex mt-3 opacity-75 gap-2'>
                                        <Email />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy learnMore'>office@vipestudio.com
                                        </p></Link>
                                    <Link className='d-flex mt-3 opacity-75 gap-2'>
                                        <Home />
                                        <p className='mb-0 fc-white fs-14 fw-400 ff-Gilroy learnMore'>14 Srebarna, Sofia 1407, Bulgaria</p></Link>

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='footerLine'></div>

                <Container className='pb-2'>
                    <div className='d-flex flex-column flex-md-row justify-content-between align-items-center py-4 mt-2'>
                        <div className='order-1 order-md-0 pt-3 pt-md-0'>
                            <p className='fc-white'>© Vipe Studio 2016-2022</p>
                            <p className='fc-white'>Privacy | Careers | Media | Client Area</p>
                        </div>
                        <ul className='d-flex align-items-center gap-2 gap-sm-3 ps-0 mb-0 order-0'>
                            <li><a href="https://github.com/" className='github'><Github /></a></li>
                            <li><a href="https://www.linkedin.com/" className='linkedin'> <Linkedin /></a></li>
                            <li><a href="https://www.twitter.com/" className='twitter'><Twitter /></a></li>
                            <li><a href="https://www.facebook.com/" className='facebook'><Facebook /></a></li>
                            <li><a href="https://www.instagram.com/" className='instagram'><Instagram /></a></li>
                            <li><a href="https://www.wordpress.com/" className='wordpress'><Wood /></a></li>
                        </ul>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default FooterSection
