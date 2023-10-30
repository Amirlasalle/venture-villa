// import { useState } from 'react';
// import "../index.css"
// import universitiesData from "../components/Jsons/universities.json"
// import { Image, Container, Col, Card, Row } from 'react-bootstrap';
// // import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
// // import { useNavigate } from 'react-router-dom'; Button, ,
// // import Container from "react-bootstrap/Container";
// // import Tab from 'react-bootstrap/Tab';
// // import Tabs from 'react-bootstrap/Tabs';
// // import Button from 'react-bootstrap/';
// // import Modal from 'react-bootstrap/Modal';, Card, 

import { useState, useContext } from 'react';
import universitiesData from "../components/Jsons/universities.json";
import tradeschoolData from "../components/Jsons/tradeschool.json";
import { Image, Container, Col, Carousel, Card, Accordion, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
    const nextIconStyleTwo = {
        fontSize: '2rem',
        fontWeight: 'bolder',
    };


    const cardsPerSlide = 3; // Number of cards per slide

    const numberOfSlides = Math.ceil(tradeschool.length / cardsPerSlide);
  
    const slides = [];
  
    for (let i = 0; i < numberOfSlides; i++) {
      const start = i * cardsPerSlide;
      const end = start + cardsPerSlide;
  
      const slideCards = tradeschool.slice(start, end);
  
      slides.push(
        <Carousel.Item key={i}>
          <div className="card-slider d-flex">
            {slideCards.map((trade, index) => (
              <Card key={index} className="trade-items" style={{ width: "18rem", margin: "0 1rem" }}>
                <a href={trade.uniUrl} className="item">
                  <Card.Body className="trade-body d-flex flex-column">
                    <div>
                      <Card.Img
                        variant="top"
                        className="img-fluid trade-image"
                        src={process.env.PUBLIC_URL + trade.logo}
                      />
                    </div>
                    <div>
                      <Card.Title>{trade.name}</Card.Title>
                    </div>
                  </Card.Body>
                </a>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      );
    }

    return (
        <div className="uni-container">
            <div className="uni-title-container">
                <h1 className="title pl-0">Colombia &amp; Top Ten Universities</h1>
                <h2 className="title-subcontent pl-0">Browse these amazing top ten universities in Colombia</h2>
            </div>

            <div className="uni-main mt-5 mb-5">


                <Container fluid secondary="true" className="justify-content-around d-flex flex-wrap  uni-main">

                    {universities.map((university, key) => (

                        <button key={key} className="document-category" style={{ width: '25rem', height: '7rem' }}>
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
                                        <FontAwesomeIcon icon={faChevronRight} size="lg" /></span>
                                </div>
                            </a>
                        </button>

                    ))}
                </Container>
            </div>

            <div className="offer-container mb-5">
                <div className="offerCategory">
                    <Accordion>
                        <Card className="trades">
                            <Card.Header className="trade-header">
                                <ContextAwareToggle eventKey="0" className="icon-small">
                                    {/* Add your toggle icon */}
                                </ContextAwareToggle>
                                <span id="category-title" className="category-title pl-5">
                                    Top 10 Majors in Colombia
                                </span>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="content" style={{ width: "100%" }}>
                                    <div className="offer-container mb-5">
                                        <div className="offerCategory">
                                            <Carousel interval={null} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyleTwo}
                                                prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='trade'>{slides}</Carousel>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>

            {/* <div className="offer-container mb-5">




                <div className="offerCategory">

                    <Accordion >
                        <Card className='trades'>
                            <Card.Header className='trade-header'>
                                <ContextAwareToggle eventKey="0" className='icon-small'>
                                </ContextAwareToggle>
                                <span id="category-title" className="category-title pl-5">
                                    Top 10 Majors in Colombia</span>

                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className='content' style={{ width: '100%' }}>
                                    <div className="w-100">
                                        <Carousel slide={false} interval={null} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyleTwo}
                                            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
                                            className=' trade-carousel trade'
                                        >
                                            {tradeschool.map((trade, index) => (
                                                <Carousel.Item key={index} >
                                                    <Card className="trade-items" style={{ width: '18rem' }}>
                                                        <a href={trade.uniUrl} className="item">
                                                            <Card.Body className='trade-body'>
                                                                <Card.Img variant="top" className="img-fluid trade-image" no-hover="true" src={process.env.PUBLIC_URL + trade.logo}  />
                                                                <Card.Title>{trade.name}</Card.Title>
                                                            </Card.Body>
                                                        </a>
                                                    </Card>
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>


                </div>
            </div> */}
        </div>

    );
}

export default Universities;
