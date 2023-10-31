import { useState, useContext } from 'react';
import universitiesData from "../components/Jsons/universities.json";
import tradeschoolData from "../components/Jsons/tradeschool.json";
import { Image, Container, Col, Carousel, Card, Accordion, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";

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


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
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
                <h1 className="title ">Colombia &amp; Top Ten Universities</h1>
                <h2 className="title-subcontent">Browse these amazing top ten universities in Colombia</h2>
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
                <div>

                    <Accordion >
                        <Card className='trades'>
                            <Card.Header className='trade-header'>
                                <ContextAwareToggle eventKey="0" className='icon-small'>
                                </ContextAwareToggle>
                                <span id="category-title" className="category-title pl-5">
                                    Top 10 Majors in Colombia</span>

                            </Card.Header>
                            <Accordion.Collapse eventKey="0" className="w-3/4 m-auto">
                                <Card.Body className="w-3/4 m-auto">
                                <div className="w-3/4 m-auto">
                                        <div className='mt-5'>
                                            {tradeschool.map((trade, index) => (
                                                <div className='tw-bg-white tw-h-[450px] tw-text-purple tw-rounded-xl' key={index}>
                                                    <div className='tw-h-56 tw-bg-indigo flex justify-center items-center' roundedCircle  >
                                                    <Image src={process.env.PUBLIC_URL + trade.logo} alt='' className="h-44 w-44" roundedCircle    />
                                                    </div>
                                                    <div className='flex flex-col justify-center items-center gap-4 pt-4 pb-4'>
                                                        <p className='pl-0'>
                                                         {trade.name}   
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                        </div>
                                        {/* <Slider {...settings} slide={false} interval={null} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyleTwo}
                                            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
                                            className='w-100 trade-carousel trade'
                                        >
                                            {tradeschool.map((trade, index) => (
                                            
                                                    <Card className="trade-items" style={{ width: '18rem' }} key={index}>
                                                        <a href={trade.uniUrl} className="item">
                                                            <Card.Body className='trade-body'>
                                                                <Card.Img variant="top" className="img-fluid  hydrated" no-hover="true" src={process.env.PUBLIC_URL + trade.logo} style={{ height: '150px', width: '150px' }} thumbnail />
                                                                <Card.Title>{trade.name}</Card.Title>
                                                            </Card.Body>
                                                        </a>
                                                    </Card>
                                            ))}
                                            </Slider> */}

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>


                </div>
            </div>
        </div>

    );
}

export default Universities;
