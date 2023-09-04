import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PlayBtn from '../assets/images/svg/PlayBtn.svg'
import headerImg from '../assets/images/png/headerImg.png'
import WordpressNavBar from './WordpressNavBar'
const HeaderSection = () => {
  return (
    <>
      <WordpressNavBar/>
      <header className='nav-bg position-relative pt-15 overflow-hidden'>
        <div className='blurGradient'></div>
        <div className='blurGradient2'></div>
        <Container className='pt-5 position-relative z-3  mt-5'>
          <Row className='align-items-center justify-content-center pb-149 pt-5 mt-5'>
            <Col lg={6} data-aos="zoom-in">
              <h1 className='ff-Konexy fw-800 fc-white fs-72 position-relative headerLine mb-0'>
                WordPress Development Agency
              </h1>
              <p className='fs-24 fw-700 fc-white ff-Gilroy mt-3'>for Enterprise + Friendly Team	</p>
              <p className='ff-Gilroy fs-16 fw-400 fc-white opacity-75'>Vipe Studio is a WordPress Agency for development - a long-term partner for any WordPress service. Websites and,online shops development, maintenance and customization is what we do best.</p>
              <div className='d-flex flex-column flex-sm-row align-items-center gap-4 mt-5'>
                <button className='fs-16 fw-600 ff-Gilroy fc-white headerBtn'>Get Started</button>
                <div className='d-flex align-items-center gap-2 mb-2'>
                  <img className='crsr' src={PlayBtn} alt="PlayBtn" />
                  <p className='fs-16 fw-400 fc-white ff-Gilroy mb-0 opacity-75'>What is Vipe? (1min)</p></div>
              </div>
            </Col>

            <Col lg={6} data-aos="zoom-in">
              <img className='headerImg mt-4 mt-lg-0 brdr' src={headerImg} alt="Header Image" />
            </Col>
          </Row>

        </Container>
      </header>

    </>
  )
}

export default HeaderSection
