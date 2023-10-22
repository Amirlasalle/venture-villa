import React from 'react';
import "../index.css"
import { Row, Col, Image, Card, Carousel, Container } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';



const Culture = () => {


    const nextIconStyle = {
        fontSize: '3rem',
        fontWeight: 'bolder',
    };

    return (
        <Container id="root" className='d-flex flex-wrap justify-content-around mt-4 pt-5 about' >

            <Row>


                <Carousel slide={false} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyle}
                    prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about'>
                    <Carousel.Item className="carousel-two">

                        <div>
                            <Row className='mt-4  about'>
                                <Image src={process.env.PUBLIC_URL + "/assets/short/antioquiashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around page-img" />
                                <h2 className="mt-3 mb-2 pl-5 pr-5 justify-content-center about-asco-text about">Colombia, a country long associated with a turbulent past, has emerged as a top destination for travelers seeking unique experiences, rich cultural heritage, and stunning 
                                </h2>
                                <p className="mt-1 mb-3 pl-5 pr-5 justify-content-center about-asco-text-smaller about">Colombia, a country long associated with a turbulent past, has emerged as a top destination for travelers 
                                </p>
                                <h2 className="text-center p-3 mt-2 section-divider-y w-100" >
                                </h2>
                                <h2 className="text-center section-divider-b w-100" >
                                </h2>
                                <h2 className="text-center section-divider-r w-100" >
                                </h2>

                                <h3 className="mt-3 pl-5 pr-5 justify-content-center about-asco-text about">Where Cultural Richness, Breathtaking Landscapes, Culinary Delights, o Create an Unforgettable Journey
                                </h3>


                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-two">

                        <div>
                            <Row className='mt-4  about'>
                                <Image src={process.env.PUBLIC_URL + "/assets/short/cartagenashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around page-img" />
                                <h2 className="mt-3 mb-2 pl-5 pr-5 justify-content-center about-asco-text about">Discover Colombia: A Gem of South America Worth Exploring
                                </h2>
                                <p className="mt-1 mb-3 pl-5 pr-5 justify-content-center about-asco-text-smaller about">Colombia, a country long associated with a turbulent past, has emerged as a top destination for travelers seeking unique experiences, rich cultural heritage, and stunning natural beauty. This diverse South American nation boasts a wealth of reasons why you should add it to your travel bucket list.
                                </p>
                                <h2 className="text-center p-3 mt-2 section-divider-y w-100" >
                                </h2>
                                <h2 className="text-center section-divider-b w-100" >
                                </h2>
                                <h2 className="text-center section-divider-r w-100" >
                                </h2>

                                <h3 className="mt-3 pl-5 pr-5 justify-content-center about-asco-text about">Where Cultural Richness, Breathtaking Landscapes, Culinary Delights, and Colombian Love Converge to Create an Unforgettable Journey
                                </h3>


                            </Row>
                        </div>
                    </Carousel.Item>
                </Carousel>






            </Row>
        </Container >

    )

}
export default Culture;
