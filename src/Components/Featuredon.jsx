import React from "react";
import Slider from "react-slick";
import { Container, Row } from 'react-bootstrap'
import yahooNews from '../assets/images/png/yahooNews.png'
import yahooFinance from '../assets/images/png/yahooFinance.png'
import trendingTopics from '../assets/images/png/trendingTopics.png'
import yahooLife from '../assets/images/png/yahooLife.png'
const Featuredon = () => {
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
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className='featuredonBg'>
                <Container>
                    <Row data-aos="fade-up">
                        <h2 className='fs-48 fw-400 ff-Konexy fc-black mt-5 pt-5'>Featured on</h2>
                        <Slider className="mt-5 mt-3 mb-5 pb-3" {...settings}>
                            <div>
                                <img src={yahooNews} alt="yahooNews" />
                            </div>
                            <div>
                                <img src={yahooFinance} alt="yahooFinance" />
                            </div>
                            <div>
                                <img src={yahooNews} alt="yahooNews" />
                            </div>
                            <div>
                                <img src={trendingTopics} alt="trendingTopics" />
                            </div>
                            <div>
                                <img src={yahooLife} alt="yahoolife" />
                            </div>
                            <div>
                                <img src={trendingTopics} alt="Trending Topics" />
                            </div>
                            <div>
                                <img src={yahooNews} alt="yahooNews" />
                            </div>
                            <div>
                                <img src={yahooFinance} alt="yahooFinance" />
                            </div>
                        </Slider>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Featuredon

