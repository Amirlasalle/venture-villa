import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';, useContext, Accordion, useAccordionButton, AccordionContext faChevronDown, faChevronUp, 
import socialmediaData from "../components/Jsons/socialmedia.json";
import { Image, Container, Card, Row} from 'react-bootstrap';
import '../App.css'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function Contact() {
    const [socialmedia] = useState(socialmediaData)
    console.log(socialmedia)



    // const UP = <FontAwesomeIcon icon={faChevronUp} size="lg" className='up-to-down' />;
    // const DOWN = <FontAwesomeIcon icon={faChevronDown} size="lg" className='down-to-up' />;

    // function ContextAwareToggle({ children, eventKey, callback }) {
    //     const { activeEventKey } = useContext(AccordionContext);

    //     const decoratedOnClick = useAccordionButton(
    //         eventKey,
    //         () => callback && callback(eventKey),
    //     );

    //     const isCurrentEventKey = activeEventKey === eventKey;

    //     return (
    //         <button
    //             type="button"
    //             style={{ backgroundColor: isCurrentEventKey ? 'white' : 'rgb(4, 14, 158)' }}
    //             onClick={decoratedOnClick}
    //             className='offer-icon'
    //         >
    //             {isCurrentEventKey ? UP : DOWN}
    //             {children}
    //         </button>
    //     );
    // }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        dotsClass: "button__bar",
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <div className="home">
            <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around home">
                <div className='w-100'>
                    <Row className=''>
                        <h2 className="text-center pb-4 section-divider-y w-100" >
                        </h2>
                        <h2 className="text-center section-divider-b w-100" >
                        </h2>
                        <h2 className="mb-0 text-center section-divider-r w-100" >
                        </h2>
                    </Row>
                </div>
                <div className='contact-img'>
                    <Row className=''>
                        <div className='contact-img-text'>
                            <h2 className='justify-content-center text-center contact-img-text'>Contact Support</h2>
                        </div>
                    </Row>
                </div>


                <div className='w-100'>
                    <Row className=''>
                        <h2 className="mt-5  pr-5 justify-content-center">
                            We're here when you need us!
                        </h2>
                        <p className="mt-1 mb-5 pr-5 justify-content-center  -smaller  ">There are various of ways to get intouch with us, and we'll do our best to accomadate you with our full support.
                        </p>
                    </Row>
                </div>




                {/* <Accordion style={{ width: '80%' }}>
                    <Card className='majors'>
                        <Card.Header className='majors-header'>
                            <div className='header-content'>
                                <ContextAwareToggle eventKey="0" className='icon-small' />

                                <h2 id="category-title" className="category-title pl-5">
                                    Unveal Our Social Media
                                </h2>
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0" className="m-auto" style={{ width: '100%' }}>
                            <Card.Body className="majors-card-body m-auto" style={{ width: '100%' }}> */}
                                <div className='slider-body mt-5' style={{ width: '80%' }}>
                                    <Slider {...settings} >
                                        {socialmedia.map((socialmedia, key) =>

                                            <Card key={key} className="m-2 p-2 mb-5 product-cards" style={{ maxWidth: '22rem' }}>
                                                <a href={socialmedia.more} target="_blank" rel="noreferrer" className="btn1" >

                                                    <Image src={process.env.PUBLIC_URL + socialmedia.screenshotone} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />

                                                    <Card.Body className='w-100 mt-2 ml-0 mr-0'>
                                                        <Card.Subtitle className="mb-2 mr-1 card-titles">{socialmedia.name}</Card.Subtitle>
                                                        <Card.Subtitle className="mb-2 card-subtitle text-muted">{socialmedia.subtitle}</Card.Subtitle>
                                                        <Card.Subtitle className="mb-2 text-muted  card-subt2">{socialmedia.beds}</Card.Subtitle>
                                                        <Card.Subtitle className="mb-3 text-muted  card-subt2">{socialmedia.dates}</Card.Subtitle>
                                                        <style type="text/css">
                                                        </style>
                                                    </Card.Body>
                                                </a>
                                            </Card>
                                        )}
                                    </Slider>
                                </div>
                            {/* </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion> */}




            </Container>
        </div>
    );
}



export default Contact;

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faChevronCircleRight} size="lg"
            className={`arrow ${className}`}
            style={{ ...style, display: "block", color: "rgb(4, 14, 158)", fontSize: "5rem" }}
            onClick={onClick}
        />
    );
}

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faChevronCircleLeft} size="lg"
            className={`arrow ${className}`}
            style={{ ...style, display: "block", color: "rgb(4, 14, 158)" }}
            onClick={onClick}
        />
    );
}
