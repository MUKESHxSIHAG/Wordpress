import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SearchIcon from '../assets/images/svg/SearchIcon.svg'
import Sync from '../assets/images/svg/Sync.svg'
const TellusMore = () => {
  return (
      <>
          <section className='tellusMore-bg'>
              <Container>
                  <Row className='align-items-center justify-content-center'>
                      <Col lg={6} data-aos="zoom-in">
                          <div className='mt-5 pt-3 mb-lg-5 pb-3'>
                              <h2 className='fs-36 fw-400 fc-white ff-Konexy'>Tell us more....</h2>
                              <p className='ff-Gilroy fc-white fw-400 opacity-75 fs-16 max-573'>Lectus vitae est ultrices sed. Sit aliquam commodo hac donec augue in quis. Magna vel orci sem neque fringilla et lectus laoreet.</p>
                          </div>
                      </Col>

                      <Col lg={6} data-aos="zoom-in" className='d-flex justify-content-center flex-column' id='inpt'>
                          <div className='d-flex justify-content-between search_bg'>
                              <input type="text" placeholder='What do you need assistance with?' />
                              <img className='crsr' src={SearchIcon} alt="Search Icon" />
                          </div>
                          <div className='d-flex justify-content-between mt-2 pb-lg-0 pb-5'>
                              <div className='d-flex align-items-center gap-2 crsr'>
                                  <img src={Sync} alt="Sync Spinner Icon" />
                                  <p className='ff-Gilroy fs-16 fw-400 fc-white opacity-75 mb-0'>or send us an inquire?	</p>
                              </div>
                              <div>
                                  <p className='ff-Gilroy fs-16 fc-white fw-400 opacity-75 mb-0 crsr'>Learn more about...</p>
                              </div>
                         </div>
                      </Col>
                  </Row>
              </Container>
              
          </section>
      
    </>
  )
}

export default TellusMore
