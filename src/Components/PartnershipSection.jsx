import React from 'react'
import Slider from "react-slick";
import { Container, Row } from 'react-bootstrap'
import Propy from '../assets/images/png/Propy.png'
import Revuele from '../assets/images/png/Revuele.png'
import Ciela from '../assets/images/png/Ciela.png'
import Spark from '../assets/images/png/Spark.png'
const PartnershipSection = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 4500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <section className='wordpressPartnerBg'>
                <Container className='pb-4'>
                    <div className='pt-3'>
                        <h2 className='fs-48 fc-black ff-Konexy fw-400 max-631 pt-5'>Long Term WordPress Partner</h2>
                        <p className='fs-16 ff-Gilroy fc-black opacity-75 fw-400 max-693 mt-3'>Our motto is the long-term partnership – we will not only develop your perfect website, but will be behind you through the whole process. They already trusted us:</p>
                    </div>
                    <Row className=' pb-5'>
                        <Slider className='mt-4' {...settings}>
                            <div>
                                <img src={Propy} alt="Propy img" />
                            </div>
                            <div>
                                <img src={Ciela} alt="Ciela img" />
                            </div>
                            <div>
                                <img src={Revuele} alt="Revuele img" />
                            </div>
                            <div>
                                <img src={Ciela} alt="Ciela img" />
                            </div>
                            <div>
                                <img src={Spark} alt="Spark Img" />
                            </div>
                            <div>
                                <img src={Ciela} alt="Ciela img" />
                            </div>
                            <div>
                                <img src={Revuele} alt="Revuele img" />
                            </div>
                            <div>
                                <img src={Propy} alt="Propy img" />
                            </div>
                        </Slider>

                    </Row>

                </Container>
            </section>

        </>
    )
}


export default PartnershipSection
