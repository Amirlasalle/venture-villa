import React, { useState, useContext } from 'react';
import universitiesData from "../components/Jsons/universities.json";
import tradeschoolData from "../components/Jsons/tradeschool.json";
import { Image, Container, Col, Card, Accordion, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown, faChevronUp, faChevronCircleRight, faChevronCircleLeft, faLocationDot, faSuitcase, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Universities = () => {
    const [universities] = useState(universitiesData);
    const [tradeschool] = useState(tradeschoolData);

    const UP = <FontAwesomeIcon icon={faChevronUp} size="lg" className='up-to-down' />;
    const DOWN = <FontAwesomeIcon icon={faChevronDown} size="lg" className='down-to-up' />;

    function ContextAwareToggle({ children, eventKey, callback }) {
        const { activeEventKey } = useContext(AccordionContext);

        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );

        const isCurrentEventKey = activeEventKey === eventKey;

        return (
            <button
                type="button"
                style={{ backgroundColor: isCurrentEventKey ? 'white' : 'rgb(4, 14, 158)' }}
                onClick={decoratedOnClick}
                className='offer-icon'
            >
                {isCurrentEventKey ? UP : DOWN}
                {children}
            </button>
        );
    }
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
        <div className="uni-container">
            <div className="uni-title-container">
                <h1 className="title">Colombia &amp; Top Ten Universities</h1>
                <h2 className="title-subcontent">Browse these amazing top ten universities in Colombia</h2>
            </div>

            <div className="uni-main mt-5 mb-5">
                <Container fluid secondary="true" className="justify-content-around d-flex flex-wrap  uni-main">
                    {universities.map((university, key) => (
                        <button key={key} className="document-category" style={{ maxWidth: '100%', height: '7rem' }}>
                            <a href={university.uniUrl} target="_blank" rel="noreferrer" className="no-decoration">
                                <div className="document-category-container">
                                    <div className="document-category-item document-icon-title">
                                        <Col xs={3} md={3} className='justify-content-start ml-1 icon'>
                                            <Image className="img-fluid icon-medium hydrated" no-hover="true" src={process.env.PUBLIC_URL + university.logo} style={{ width: '50px', height: '50px', border: 'none' }} thumbnail />
                                        </Col>
                                        <div className="document-title">
                                            <span className="document-cat-name">{university.name}</span>
                                            <p className="pl-0 document-category-desc">{university.brief}</p>
                                        </div>
                                    </div>
                                    <span className="document-category-item document-count">
                                        <FontAwesomeIcon icon={faChevronRight} size="lg" />
                                    </span>
                                </div>
                            </a>
                        </button>
                    ))}
                </Container>
            </div>

            <Container fluid secondary="true" className="mb-5 justify-content-around d-flex flex-wrap  about">
                <Accordion style={{ width: '80%' }}>
                    <Card className='majors'>
                        <Card.Header className='majors-header'>
                            <div className='header-content'>
                                <ContextAwareToggle eventKey="0" className='icon-small' />

                                <h2 id="category-title" className="category-title pl-5">
                                    Top 10 Majors in Colombia
                                </h2>
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0" className="m-auto" style={{ width: '100%' }}>
                            <Card.Body className="majors-card-body m-auto" style={{ width: '100%' }}>
                                <div className='slider-body mt-5'>
                                    <Slider {...settings} >
                                        {tradeschool.map((trade, key) => (
                                            <Card key={key} className="m-5 p-2 major-cards" style={{ maxWidth: '18rem' }}>
                                                <a href={trade.uniUrl} target="_blank" rel="noreferrer" className="no-decoration">
                                                    <Card.Body className='w-100 mt-2 ml-0 mr-0 '>
                                                        <Card.Img src={process.env.PUBLIC_URL + trade.logo} className="img-fluid d-flex flex-wrap justify-content-around trade-image" />
                                                        <Card.Subtitle className="mt-2 mb-2 card-subtitle text-muted">{trade.name}</Card.Subtitle>
                                                        <Card.Subtitle className="mt-2 mb-2 card-subtitle text-muted"><FontAwesomeIcon icon={faLocationDot} size="sm" /> {trade.campusLocation}</Card.Subtitle>
                                                        <Card.Subtitle className="mt-2 mb-2 card-subtitle text-muted"><FontAwesomeIcon icon={faSuitcase} size="sm" /> :  {trade.credits} credits</Card.Subtitle>
                                                        <Card.Subtitle className="mt-2 mb-2 card-subtitle text-muted"><FontAwesomeIcon icon={faCalendarDays} size="sm" /> :  {trade.semesters} semesters</Card.Subtitle>
                                                    </Card.Body>
                                                </a>
                                            </Card>
                                        ))}
                                    </Slider>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </div>
    );
};



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

export default Universities;
