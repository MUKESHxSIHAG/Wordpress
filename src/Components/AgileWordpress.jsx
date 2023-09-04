import React from 'react'
import DevelopmentImg from '../assets/images/png/DevelopmentImg.png'
import { Container, Row, Col } from 'react-bootstrap'
const AgileWordpress = () => {
  return (
      <>
          <section className='integerBG'>
              <Container className='pt-5 pb-5'>
                  <Row className='pt-3 pb-5 align-items-center justify-content-center'>
                      <Col lg={6} data-aos="zoom-in">
                          <img className='w-100' src={DevelopmentImg} alt="Development" />
                      </Col>

                      <Col lg={6} className='mt-xl-0 mt-5' data-aos="zoom-in">
                          <h2 className='fc-primary ff-Konexy fs-48 fw-400  max-670'>Agile WordPress <span className='fc-black'>Development Project management</span></h2>
                          <p className='max-572 mt-1'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                          <p className='navBtn ff-Gilroy fs-16 fw-600 fc-white mt-4'>Explore</p>
                      </Col>
                  </Row>
              </Container>
          </section>
      
    </>
  )
}

export default AgileWordpress
