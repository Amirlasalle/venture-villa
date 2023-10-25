import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import placesinfoData from "../components/Places/placesinfo.json"
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../App.css'
import '../index.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft, faChevronLeft, faChevronRight, faExternalLinkAlt, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';

// import Col from 'react-bootstrap/Col';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import PlaceList from '../components/Places/Places';

const client = new ApolloClient({
  uri: 'https://api.insidebnb.com:8443/v2/markets',
  cache: new InMemoryCache(),
});
const GET_MARKETS_QUERY = gql`
  query {
    markets {
      name
      country
      city
    }
  }
`;
client
  .query({
    query: GET_MARKETS_QUERY,
  })
  .then((response) => {
    const { data } = response;
    console.log(data.markets);
  })
  .catch((error) => {
    console.error(error);
  });

function Home() {
  // const [listings, setListings] = useState([]);

  const nextIconStyle = {
    fontSize: '10vw',
    fontWeight: 'bolder',
  };
  const nextIconStyleTwo = {
    fontSize: '2rem',
    fontWeight: 'bolder',
  };

  const chevIconStyle = {
    fontSize: '2.5rem',
  };
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };


  const handleNavLinkClick = (url) => {
    scrollToTop();
    navigate(url);
  };

  const [placesinfo] = useState(placesinfoData)
  console.log(placesinfo)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  return (
    <div className="home">
      <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around home">

        <div id="carousel" className="carousel">
          <Carousel slide={false} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyle}
            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}>

            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/colombiaflagshort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />
              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h3 className='outlined-text'>Colombia is a Venture Waiting to happen</h3>
                <div className="button-container">
                  <Button variant="info" onClick={handleShow} size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '150px' }}> Learn More <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </Button>

                  <div className='ml-5 modal-div'>
                    <Modal show={show} onHide={handleClose} animation={false} size="lg" dialogClassName="my-modal custom-modal">
                      <Modal.Header closeButton style={{ display: 'none' }}></Modal.Header>
                      <Modal.Body className='d-flex flex-wrap justify-content-around custom-modal' closeButton>

                        <div className='custom-youtube-video'>
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/NjbRrRfyvW4?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreenclassName='my-modal custom-modal'></iframe>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/cartagenashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h3 className='outlined-text'>In Cartagena Every Day Feels Like a Fiesta!</h3>
                <div className="button-container">
                  <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/shorts/r25RXQVJH50')} className='btn1'>
                    <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '145px' }}>
                      <a href='#cartagena' target="_blank" rel="noreferrer" className="btn1">See Rentals <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                    </Button>
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/sanandresshort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h3 className='outlined-text'>Where Paradise Meets Passion!</h3>
                <div className="button-container">
                  <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=1z2wa7nK8zs')} className='btn1'>
                    <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '120px' }}>
                      <a href='#home' target="_blank" rel="noreferrer" className="btn1">Beaches <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                    </Button>
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/Bogotashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h3 className='outlined-text'>Bogota Is A City of Endless Horizons and Vibrant Realities!</h3>
                <div className="button-container">
                  <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=1z2wa7nK8zsr')} className='btn1'>
                    <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '145px' }}>
                      <a href='#bogota' target="_blank" rel="noreferrer" className="btn1">See Rentals <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                    </Button>
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/colombiacali.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h3 className='outlined-text'>Cali: Where Salsa, Sunshine, and Smiles Await!</h3>
                <div className="button-container">
                  <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=BamIljS3reIr')} className='btn1'>
                    <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '120px' }}>
                      <a href='#cali' target="_blank" rel="noreferrer" className="btn1">Explore <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                    </Button>
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>


          </Carousel>
        </div>





        <div>
          <Row className='mt-4   '>
            <Image src={process.env.PUBLIC_URL + "/assets/short/antioquiashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around page-img" />
            <h2 className="mt-3 mb-2 pl-5 pr-5 justify-content-center    ">Discover Colombia: A Gem of South America Worth Exploring
            </h2>
            <p className="mt-1 mb-3 pl-5 pr-5 justify-content-center  -smaller  ">Colombia, a country long associated with a turbulent past, has emerged as a top destination for travelers seeking unique experiences, rich cultural heritage, and stunning natural beauty. This diverse South American nation boasts a wealth of reasons why you should add it to your travel bucket list.
            </p>
            <h2 className="text-center p-3 mt-2 section-divider-y w-100" >
            </h2>
            <h2 className="text-center section-divider-b w-100" >
            </h2>
            <h2 className="text-center section-divider-r w-100" >
            </h2>

            <h3 className="mt-3 pl-5 pr-5 justify-content-center    ">Where Cultural Richness, Breathtaking Landscapes, Culinary Delights, and Colombian Love Converge to Create an Unforgettable Journey
            </h3>


          </Row>
        </div>


        <Row>
          <div id="homepageCards" className="d-flex flex-wrap justify-content-center pt-3 pb-3 cards-bg">
            <Card className="atribute-cards w-100">
              <div className="card-content">
                <Image src={process.env.PUBLIC_URL + "/assets/short/soccerfansshort.jpeg"} className="img-fluid atribute-img" />
                <div className="text-container">
                  <h3 className="atribute-text">Cultural Richness</h3>
                </div>
              </div>
            </Card>
            <Card className="atribute-cards">
              <div className="card-content">
                <Image src={process.env.PUBLIC_URL + "/assets/short/colombiadessertshort.jpg"} className="img-fluid atribute-img" />
                <div className="text-container">
                  <h3 className="atribute-text">Breathtaking Landscapes</h3>
                </div>
              </div>
            </Card>
            <Card className="atribute-cards">
              <div className="card-content">
                <Image src={process.env.PUBLIC_URL + "/assets/short/colombianfoodshort.jpeg"} className="img-fluid atribute-img" />
                <div className="text-container">
                  <h3 className="atribute-text">Culinary Delights</h3>
                </div>
              </div>
            </Card>
            <Card className="atribute-cards" >
              <div className="card-content">
                <Image src={process.env.PUBLIC_URL + "/assets/short/colombiawomanfoodshort.jpg"} className="img-fluid atribute-img" />
                <div className="text-container">
                  <h3 className="atribute-text">Colombian Love</h3>
                </div>
              </div>
            </Card>
          </div>
        </Row>




        <div className='mt-5 history-img'>
          <Row className=''>
            <div className='history-text'>
              <h2 className='d-flex flex-column justify-content-center pl-1'>Colombia's Tourism Evolution</h2>
              <p className='d-flex flex-column justify-content-center history-para  '>Colombia's tourism history is a captivating tale of transformation and resilience. From the mysterious allure of its pre-Columbian civilizations to the tumultuous years marked by conflict, and ultimately, its remarkable resurgence as a sought-after destination, the story of Colombian tourism is a testament to the nation's enduring spirit. The country's journey from a turbulent history to a beacon of adventure and cultural diversity is an inspiring narrative that invites visitors to be part of its ongoing renaissance, making Colombia a destination brimming with captivating tales yet to be told.</p>
            </div>
          </Row>
        </div>


        <div className='w-100'>
          <Row className='mt-4   '>
            <h2 className="text-center mt-2 pb-3 section-divider-y w-100" >
            </h2>
            <h2 className="text-center section-divider-b w-100" >
            </h2>
            <h2 className="text-center section-divider-r w-100" >
            </h2>



            <h3 className="mt-3 pl-5 pr-5 justify-content-center    ">
              Best Stays of 2023
            </h3>
            <p className="mt-1 mb-1 pl-5 pr-5 justify-content-center  -smaller  ">If you're searching for accommodations in Colombia, don't miss out on these top four bed and breakfast homes, each offering remarkable features and a plethora of exciting activities to enjoy.
            </p>
          </Row>
        </div>

        <Row className='mt-5'>
          <div id="homepageCards" className="d-flex flex-wrap justify-content-center pt-3 pb-3 cards-bg">
            {placesinfo.map((placesinfo, key) =>

              <Card key={key} className="m-2 p-2  product-cards" style={{ maxWidth: '22rem' }}>
                <a href={placesinfo.more} target="_blank" rel="noreferrer" className="btn1" >
                  <Carousel slide={false} nextIcon={<FontAwesomeIcon icon={faChevronCircleRight} />} style={chevIconStyle}
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
        <Row className='mt-5'>
          <Carousel slide={true} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyleTwo}
            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about'>
            <Carousel.Item className="about-carousel-item">
              <div>

                <div className='about-img-div'>
                  <Image src={process.env.PUBLIC_URL + "/assets/short/bogotacity.jpg"} className="img-fluid d-flex flex-wrap about-img" />
                </div>
                <div className='about-text'>
                  <h2 className="justify-content-around about-text">Colombia and Attractions in Bogotá
                  </h2>
                  <p className="mt-1 mb-3 justify-content-center about-text about-text-p">Bogotá is Colombia's capital city and is responsible for 56% of the country's tourism.
                  </p>
                  <div className="button-container mb-3">
                    <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=1z2wa7nK8zs')} className='btn1'>
                      <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '120px' }}>
                        <a href='#home' target="_blank" rel="noreferrer" className="btn1">See Why <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                      </Button>
                    </Link>
                  </div>
                  <h2 className="text-center pl-5 pr-5 pb-3 mb-0 section-divider-y about-text-sd" >
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
                  <Image src={process.env.PUBLIC_URL + "/assets/short/sanadresboat.jpg"} className="img-fluid d-flex flex-wrap about-img" />
                </div>
                <div className='about-text'>
                  <h2 className="justify-content-around about-text">San Andres a paradise for beach and sun enthusiasts
                  </h2>
                  <p className="mb-3 justify-content-center about-text about-text-p">
                    This island's clear waters, white sands, and coral reefs attract global visitors seeking relaxation and adventure.
                  </p>
                  <div className="button-container mt-3 mb-3">
                    <Link to="/" onClick={() => handleNavLinkClick('/')} className='btn1'>
                      <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '120px' }}>
                        More <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </Link>
                  </div>
                  <h2 className="text-center pl-5 pr-5 pb-3 mb-0 section-divider-y about-text-sd" >
                  </h2>
                  <h2 className="text-center section-divider-b  mb-0 about-text-sd " >
                  </h2>
                  <h2 className="text-center section-divider-r about-text-sd" >
                  </h2>

                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Row>


        <div className='mb-5'>
          <Row className='mt-4   '>
            <h2 className="text-center mt-2 pb-3 section-divider-y w-100" >
            </h2>
            <h2 className="text-center section-divider-b w-100" >
            </h2>
            <h2 className="text-center section-divider-r w-100" >
            </h2>
            <h3 className="mt-3 mb-2 pl-5 pr-5 justify-content-center    ">Travel News and Events
            </h3>
            <p className="mt-1 mb-3 pl-5 pr-5 justify-content-center  -smaller  ">Colombia offers a captivating blend of experiences for travelers. Enjoy classical music in the historic streets of Cartagena at the International Music Festival, explore the Amazon rainforest with eco-tours, and savor the rich flavors of Colombian coffee through farm tours and tastings. With its diverse attractions, Colombia continues to be a must-visit destination
            </p>
          </Row>
        </div>

        <Row>
          <div id="homepageCards" className="d-flex flex-wrap justify-content-center pt-3 cards-bg w-100">
            <Card className="atribute-cardstwo w-100">
              <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/shorts/r25RXQVJH50')} className='btn1'>
                <a href={placesinfo.more} target="_blank" rel="noreferrer" className="btn1" >
                  <div className="card-content">
                    <Image src={process.env.PUBLIC_URL + "/assets/short/colombianews.jpeg"} className="img-fluid atribute-image" />
                    <div className='text-link-container atributes-links'>
                      <p className='atributes-links'>
                        Browse All News <FontAwesomeIcon icon={faChevronRight} size="xs" />
                      </p>
                    </div>
                    <div className="text-container">
                      <div className="overlay-container">
                        <h3 className="text-left atribute-text shown-text">Travel News</h3>
                        <p className='hidden-text atribute-text text-left'>
                          Read about the latest travelling news in Colombia
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </Card>
            <Card className="atribute-cardstwo">
              <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/shorts/r25RXQVJH50')} className='btn1'>
                <a href={placesinfo.more} target="_blank" rel="noreferrer" className="btn1" >
                  <div className="card-content">
                    <Image src={process.env.PUBLIC_URL + "/assets/short/calideferia.jpeg"} className="img-fluid atribute-image" />
                    <div className="text-container">
                      <div>
                        <h3 className="atribute-text shown-text">Events</h3>
                        <p className='hidden-text atribute-text text-left'>
                          From events like La Feria De Cali, y Carnaval de Barranquilla and more
                        </p>
                      </div>
                      <div className='text-link-container atributes-links'>
                        <p className='atributes-links'>
                          Events <FontAwesomeIcon icon={faChevronRight} size="xs" />
                        </p>
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>
                </a>
              </Link>
            </Card>
          </div>
        </Row>

        <div className='mb-5'>
          <Row className='w-100 section'>
            <h2 className="text-center pb-3 section-divider-y w-100" >
            </h2>
            <h2 className="text-center section-divider-b w-100" >
            </h2>
            <h2 className="text-center section-divider-r w-100" >
            </h2>
            <h3 className="mt-3 mb-2 pl-5 pr-5 justify-content-center">Resources to help you navigate the opportunities in Colombia as a foreigner
            </h3>
          </Row>
        </div>

        <div className="d-flex flex-wrap justify-content-center pt-3 w-100 sections">
          <Row className='w-100 sections'>
            <Tabs
              defaultActiveKey="universities"
              transition={false}
              id="noanim-tab-example"
              variant='tabs'
              className="mb-3 tabs"
            >
              <Tab eventKey="universities" title="Universities" className=" tab">
                <div></div>
                <Carousel slide={true} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyleTwo}
                  prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about'>
                  <Carousel.Item className="about-carousel-item">
                    <div>

                      <div className='about-img-div'>
                        <Image src={process.env.PUBLIC_URL + "/assets/short/Universidad-de-los-Andes.jpeg"} className="img-fluid d-flex flex-wrap about-img" />
                      </div>
                      <div className='about-text'>
                        <h2 className="justify-content-around about-text">Universidad de los Andes
                        </h2>
                        <p className="justify-content-center about-text about-text-p">Founded in 1948, Universidad de los Andes, Colombia's top-ranked university dedicated to academic excellence and truth-seeking.
                        </p>
                        <div className="button-container mb-3">
                          <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=1z2wa7nK8zs')} className='btn1'>
                            <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '120px' }}>
                              <a href='#home' target="_blank" rel="noreferrer" className="btn1">See Why <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                            </Button>
                          </Link>
                        </div>
                        <h2 className="text-center pl-5 pr-5 pb-3 mb-0 section-divider-y about-text-sd" >
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
                        <Image src={process.env.PUBLIC_URL + "/assets/short/sanadresboat.jpg"} className="img-fluid d-flex flex-wrap about-img" />
                      </div>
                      <div className='about-text'>
                        <h2 className="justify-content-around about-text">San Andres a paradise for beach and sun enthusiasts
                        </h2>
                        <p className="justify-content-center about-text about-text-p">
                          This island's clear waters, white sands, and coral reefs attract global visitors seeking relaxation and adventure.
                        </p>
                        <div className="button-container mt-3 mb-3">
                          <Link to="/" onClick={() => handleNavLinkClick('/')} className='btn1'>
                            <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '120px' }}>
                              More <FontAwesomeIcon icon={faChevronRight} size="md" />
                            </Button>
                          </Link>
                        </div>
                        <h2 className="text-center pl-5 pr-5 pb-3 mb-0 section-divider-y about-text-sd" >
                        </h2>
                        <h2 className="text-center section-divider-b  mb-0 about-text-sd " >
                        </h2>
                        <h2 className="text-center section-divider-r about-text-sd" >
                        </h2>

                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </Tab>
              <Tab eventKey="education" title="Education" className="tab">
                <div className="d-grid gap-3 ml-5 mr-5 about-carousel-item">

                  <div className='bot'>
                    <Link to="/universities" onClick={() => handleNavLinkClick('/universities')} className='w-100'>
                      <Button variant='outline-light' className='btn2 w-100' size="lg">
                        Browse All Universities <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </Link>
                  </div>

                  <div className='bot'>
                    <a href='https://www.youtube.com/watch?v=1z2wa7nK8zs' target="_blank" rel="noreferrer" className="w-100">
                      <Button variant='outline-light' className='btn2 w-100' size="lg">
                        Block level button<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </a>
                  </div>

                  <div className='bot'>
                    <a href='https://www.youtube.com/watch?v=1z2wa7nK8zs' target="_blank" rel="noreferrer" className="w-100">
                      <Button variant='outline-light' className='btn2 w-100' size="lg">
                        Block level button<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </a>
                  </div>

                  <div className='bot'>
                    <a href='https://www.youtube.com/watch?v=1z2wa7nK8zs' target="_blank" rel="noreferrer" className="w-100">
                      <Button variant='outline-light' className='btn2 w-100' size="lg">
                        Block level button<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </a>
                  </div>

                  <div className='bot'>
                    <a href='https://www.youtube.com/watch?v=1z2wa7nK8zs' target="_blank" rel="noreferrer" className="w-100">
                      <Button variant='outline-light' className='btn2 w-100' size="lg">
                        Block level button<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </a>
                  </div>

                  <div className='bot'>
                    <a href='https://www.youtube.com/watch?v=1z2wa7nK8zs' target="_blank" rel="noreferrer" className="w-100">
                      <Button variant='outline-light' className='btn2 w-100' size="lg">
                        Block level button<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </a>
                  </div>

                </div>
              </Tab>
              <Tab eventKey="companies" title="Companies" className="tab">
                Tab content for Contact
              </Tab>
              <Tab eventKey="airlines" title="Airlines" className="tab">
                Tab content for Contact
              </Tab>
            </Tabs>
          </Row>
        </div>

        <div className='mt-5 mb-5 homepage-signup-img'>
          <Row className='mb-5'>
            <div className='history-text'>
              <h1 className='mt-5 pt-5 d-flex flex-column justify-content-center pl-1'>Your Venture Awaits!</h1>
              <p className='d-flex flex-column justify-content-center history-para hide-it pb-5 mb-5 '>Create a beautiful travel wishlist of all the enchanting destinations in Colombia you'd love to explore. Indulge in a journey of discovery as you reserve stays at the most exquisite Bed and Breakfasts, all while uncovering the rich tapestry of experiences Colombia has in store for you.</p>
              <div className="button-container mt-5 mb-3">
                <Link to="/signup" onClick={() => handleNavLinkClick('/signup')} className='btn1'>
                  <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '170px' }}> Sign Up Now <FontAwesomeIcon icon={faChevronRight} size="md" />
                  </Button>
                </Link>
              </div>
            </div>

          </Row>
        </div>

      </Container>
    </div>
  );
}



export default Home;


// import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';

// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Container from 'react-bootstrap/Container';