import React, { useState } from 'react';
import "../index.css"
import universitiesData from "../components/Jsons/universities.json"
import { Image, Carousel, Card, Row } from 'react-bootstrap';
// import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
// import { useNavigate } from 'react-router-dom';
import placesinfoData from "../components/Places/placesinfo.json"
// import Container from "react-bootstrap/Container";
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import '../App.css'
import '../index.css'
// import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
// import Modal from 'react-bootstrap/Modal';


const Universities = () => {

    const [universities] = useState(universitiesData)
    console.log(universities)

    const nextIconStyle = {
        fontSize: '2rem',
        fontWeight: 'bolder',
    };

    // const nextIconStyleTwo = {
    //     fontSize: '2rem',
    //     fontWeight: 'bolder',
    // };

    const chevIconStyle = {
        fontSize: '2.5rem',
    };
    // const navigate = useNavigate();

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'auto',
    //     });
    // };


    // const handleNavLinkClick = (url) => {
    //     scrollToTop();
    //     navigate(url);
    // };

    const [placesinfo] = useState(placesinfoData)
    console.log(placesinfo)

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);



    return (

        <div>
            <Row className='mt-4 custom-color about'>
                <h className="mt-3 timeline-title about">Discover ASCO's Timeline</h>
                <div id="universities" className="d-flex flex-wrap justify-content-around ">
                    {universities.map((university, key) =>

                        <Card key={key} className="m-2 p-2 shadow-lg product-cards" style={{ width: '22rem' }}>
                            <a href={university.more} target="_blank" rel="noreferrer" className="btn1" >
                                <Card.Body>
                                    <Card.Title className='year-size ' >{university.name}</Card.Title>
                                    <Card.Text className='brief'>{university.brief}
                                    </Card.Text>
                                    <Card.Text className='brief'>{university.brief2}
                                    </Card.Text>
                                    <Card.Text className='brief'>{university.brief3}
                                    </Card.Text>

                                </Card.Body>
                            </a>
                        </Card>

                    )}
                </div>
            </Row>
            <Row className='mt-5'>
                <div id="homepageCards" className="d-flex flex-wrap justify-content-center pt-3 pb-3 cards-bg">
                    {placesinfo.map((placesinfo, key) =>

                        <Card key={key} className="m-2 p-2  product-cards" style={{ maxWidth: '22rem' }}>
                            <a href={placesinfo.more} target="_blank" rel="noreferrer" className="btn1" >
                                <Carousel slide={false} interval={null} nextIcon={<FontAwesomeIcon icon={faChevronCircleRight} />} style={chevIconStyle}
                                    prevIcon={<FontAwesomeIcon icon={faChevronCircleLeft} />} className='next-icon'>

                                    <Carousel.Item className="carousel">
                                        <Image src={process.env.PUBLIC_URL + placesinfo.screenshotone} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel">
                                        <Image src={process.env.PUBLIC_URL + placesinfo.screenshottwo} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel">
                                        <Image src={process.env.PUBLIC_URL + placesinfo.screenshotthree} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel">
                                        <Image src={process.env.PUBLIC_URL + placesinfo.screenshotfour} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel">
                                        <Image src={process.env.PUBLIC_URL + placesinfo.screenshotfive} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel">
                                        <Image src={process.env.PUBLIC_URL + placesinfo.screenshotsix} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel">
                                        <Image src={process.env.PUBLIC_URL + placesinfo.screenshotseven} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel">
                                        <Image src={process.env.PUBLIC_URL + placesinfo.screenshoteight} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel">
                                        <Image src={process.env.PUBLIC_URL + placesinfo.screenshotnine} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel">
                                        <Image src={process.env.PUBLIC_URL + placesinfo.screenshotten} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                                    </Carousel.Item>
                                </Carousel>
                                {/* <Card.Img variant="top" src={process.env.PUBLIC_URL + placesinfo.screenshot} /> */}
                                <Card.Body className='w-100 mt-2 ml-0 mr-0'>
                                    <Card.Subtitle className="mb-2 mr-1 card-titles">{placesinfo.placesname} <span className='rating'>{placesinfo.star}<span className='text-muted'>{placesinfo.ratings}</span></span></Card.Subtitle>
                                    <Card.Subtitle className="mb-2 card-subtitle text-muted">{placesinfo.subtitle}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted  card-subt2">{placesinfo.beds}</Card.Subtitle>
                                    <Card.Subtitle className="mb-3 text-muted  card-subt2">{placesinfo.dates}</Card.Subtitle>
                                    <Card.Subtitle className="mb-3 card-price">{placesinfo.price} <span className='text-muted night'>night</span></Card.Subtitle>
                                    <style type="text/css">
                                    </style>
                                </Card.Body>
                            </a>
                        </Card>

                    )}
                </div>
            </Row>

            <Carousel slide={true} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyle}
                prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about'>
                <Carousel.Item className="about-carousel-item">
                    <div>

                        <div className='about-img-div'>
                            <Image src={process.env.PUBLIC_URL + "/assets/short/antioquiashort.jpeg"} className="img-fluid d-flex flex-wrap about-img" />
                        </div>
                        <div className='about-text'>
                            <h2 className="mb-2 justify-content-around about-text">Colombia has emerged as a top destination.
                            </h2>
                            <p className="mt-1 mb-3 justify-content-center about-text-p">Colombia, a country long associated with a turbulent past, has emerged as a top destination for travelers
                            </p>
                            <h2 className="text-center pl-5 pr-5 pb-3 mb-0 section-divider-y   about-text-sd" >
                            </h2>
                            <h2 className="text-center section-divider-b  mb-0 about-text-sd " >
                            </h2>
                            <h2 className="text-center section-divider-r about-text-sd" >
                            </h2>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="about-carousel-item">
                    <div>

                        <div className='about-img-div'>
                            <Image src={process.env.PUBLIC_URL + "/assets/short/cartagenashort.jpeg"} className="img-fluid d-flex flex-wrap about-img" />
                        </div>
                        <div className='about-text'>
                            <h2 className="mb-2 justify-content-around about-text">Colombia has emerged as a top destination.
                            </h2>
                            <p className="mt-1 mb-3 justify-content-center about-text-p">Colombia, a country long associated with a turbulent past, has emerged as a top destination for travelers
                            </p>
                            <h2 className="text-center pl-5 pr-5 pb-3 mb-0 section-divider-y   about-text-sd" >
                            </h2>
                            <h2 className="text-center section-divider-b  mb-0 about-text-sd " >
                            </h2>
                            <h2 className="text-center section-divider-r about-text-sd" >
                            </h2>
                        </div>
                    </div>
                </Carousel.Item>


            </Carousel>




        </div>


    )

}
export default Universities;
