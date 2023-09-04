import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TeamStars from '../assets/images/png/TeamStars.png'
const StarTeam = () => {
  return (
      <>
          <section className='starTeamBg'>
              <Container className=''>
                  <Row className='pt-5'>
                      <Col lg={6} className='mt-5 pt-4' data-aos="fade-left">
                          <div>
                              <h2 className='fc-black fs-48 ff-Konexy fw-400'>Team Full of Stars</h2>
                              <p className='max-476 mt-1 fs-16 ff-Gilroy fc-black fw-400'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                              <p className='fs-16 ff-Gilroy fw-600 fc-white navBtn mt-3'>Explore</p>
                          </div>
                      </Col>
                      <Col lg={6} data-aos="fade-down">
                          <img className='w-100 teamImg' src={TeamStars} alt="Team" />
                      </Col>
                  </Row>
                  
              </Container>
          </section>
      
    </>
  )
}

export default StarTeam
