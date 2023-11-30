import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import placesinfoData from "../components/Places/placesinfo.json"
import { Image, Container, Col, Card, Row, Carousel, Tab, Tabs, Button, Modal } from 'react-bootstrap';
import '../App.css'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft, faChevronLeft, faChevronRight, faExternalLinkAlt, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import companiesData from "../components/Jsons/companies.json";
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
    fontSize: '4rem',
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
  const [companies] = useState(companiesData);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  return (
    <div className="home">
      <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around home">

        <div id="carousel" className="carousel-one">
          <Carousel slide={false} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyle}
            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}>

            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/colombiaflagshort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />
              <Carousel.Caption className='mt-0 pl-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h2 className='outlined-text'>Colombia is a Venture Waiting to happen</h2>
                <div className="button-container btn1">
                  <Button variant="info" onClick={handleShow} size="md" className="carousel-btn btn-block mx-auto btn1" style={{ maxWidth: '150px' }}> Learn More <FontAwesomeIcon icon={faExternalLinkAlt} />
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
                <h2 className='outlined-text'>In Cartagena Every Day Feels Like a Fiesta!</h2>
                <div className="button-container">
                  <Link to="/bnb" onClick={() => handleNavLinkClick('bnb')} className='btn1'>
                    <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '155px' }}>
                      See Rentals <FontAwesomeIcon icon={faChevronRight} size="md" />
                    </Button>
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/sanandresshort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h2 className='outlined-text'>Where Paradise Meets Passion!</h2>
                <div className="button-container">
                  <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=1z2wa7nK8zs')} className='btn1'>
                    <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '125px' }}>
                      <a href='#home' target="_blank" rel="noreferrer" className="btn1">Beaches <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                    </Button>
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/Bogotashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h2 className='outlined-text'>Bogota Is A City of Endless Horizons and Vibrant Realities!</h2>
                <div className="button-container">
                  <Link to="/bnb" onClick={() => handleNavLinkClick('bnb')} className='btn1'>
                    <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '155px' }}>
                      See Rentals <FontAwesomeIcon icon={faChevronRight} size="md" />
                    </Button>
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/colombiacali.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h2 className='outlined-text'>Cali: Where Salsa, Sunshine, and Smiles Await!</h2>
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

        <Row className=''>
          <div className='about'>
            <div className="about-div-item">


              <div className='about-img-div-one'>
                <Image src={process.env.PUBLIC_URL + "/assets/short/colombiaforest.jpeg"} className="img-fluid d-flex flex-wrap about-img-one" />
              </div>
              <div className='about-text-one'>
                <h1 className="pl-3">Discover Colombia: A Gem of South America Worth Exploring
                </h1>
                <p className="pl-3 mb-3 justify-content-center about-text-p">Colombia, a country long associated with a turbulent past, has emerged as a top destination for travelers seeking unique experiences, rich cultural heritage, and stunning natural beauty. This diverse South American nation boasts a wealth of reasons why you should add it to your travel bucket list.
                </p>
              </div>
            </div>
          </div>
        </Row>




        <div>
          <Row className='mt-4'>
            <h2 className="text-center p-3 mt-2 section-divider-y w-100" >
            </h2>
            <h2 className="text-center section-divider-b w-100" >
            </h2>
            <h2 className="text-center section-divider-r w-100" >
            </h2>

            <h2 className="mt-3 pr-5 justify-content-center">Experience Unforgettable Colombia: Where Culture, Scenery, Cuisine, and Heart Combine.
            </h2>


          </Row>
        </div>


        <Row>
          <div id="homepageCards" className="d-flex flex-wrap justify-content-center pt-3 pb-3 cards-bg">
            <Card className="atribute-cards w-100">
              <div className="card-content">
                <Image src={process.env.PUBLIC_URL + "/assets/short/soccerfansshort.jpeg"} className="img-fluid atribute-img" />
                <div className="text-container">
                  <h3 className="atribute-text">Cultural<br></br>Richness</h3>
                </div>
              </div>
            </Card>
            <Card className="atribute-cards">
              <div className="card-content">
                <Image src={process.env.PUBLIC_URL + "/assets/short/colombiadessertshort.jpg"} className="img-fluid atribute-img" />
                <div className="text-container">
                  <h3 className="atribute-text">Breathtaking<br></br>Landscapes</h3>
                </div>
              </div>
            </Card>
            <Card className="atribute-cards">
              <div className="card-content">
                <Image src={process.env.PUBLIC_URL + "/assets/short/colombianfoodshort.jpeg"} className="img-fluid atribute-img" />
                <div className="text-container">
                  <h3 className="atribute-text">Culinary<br></br>Delights</h3>
                </div>
              </div>
            </Card>
            <Card className="atribute-cards" >
              <div className="card-content">
                <Image src={process.env.PUBLIC_URL + "/assets/short/colombiawomanfoodshort.jpg"} className="img-fluid atribute-img" />
                <div className="text-container">
                  <h3 className="atribute-text">Colombian<br></br>Love</h3>
                </div>
              </div>
            </Card>
          </div>
        </Row>




        <div className='mt-5 history-img'>
          <Row className=''>
            <div className='history-text'>
              <h2 className='d-flex flex-column justify-content-center pl-0 mt-5'>Colombia's Tourism Evolution</h2>
              <p className='d-flex flex-column justify-content-center history-para'>Colombia's tourism history is a captivating tale of transformation and resilience. From the mysterious allure of its pre-Columbian civilizations to the tumultuous years marked by conflict, and ultimately, its remarkable resurgence as a sought-after destination, the story of Colombian tourism is a testament to the nation's enduring spirit. The country's journey from a turbulent history to a beacon of adventure and cultural diversity is an inspiring narrative that invites visitors to be part of its ongoing renaissance, making Colombia a destination brimming with captivating tales yet to be told.</p>
            </div>
          </Row>
        </div>


        <div className='w-100'>
          <Row className=''>
            <h2 className="text-center pb-4 section-divider-y w-100" >
            </h2>
            <h2 className="text-center section-divider-b w-100" >
            </h2>
            <h2 className="text-center section-divider-r w-100" >
            </h2>



            <h2 className="mt-3 pr-5 justify-content-center    ">
              Best Stays of 2023
            </h2>
            <p className="mt-1 mb-1 pr-5 justify-content-center  -smaller  ">If you're searching for accommodations in Colombia, don't miss out on these top-rated bed and breakfast homes, each offering remarkable features and a plethora of exciting activities to enjoy.
            </p>
          </Row>
        </div>

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
          <h2 className="text-center mt-2 pb-3 section-divider-y w-100" >
          </h2>
          <h2 className="text-center section-divider-b w-100" >
          </h2>
          <h2 className="text-center section-divider-r w-100" >
          </h2>
        </Row>
        <Row className='mt-5'>
          <Carousel slide={true} interval={null} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyleTwo}
            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about'>

            <Carousel.Item className="about-carousel-item">
              <div className='about-img-div'>
                <Image src={process.env.PUBLIC_URL + "/assets/short/bogotacity.jpg"} className="img-fluid d-flex flex-wrap about-img" />
              </div>
              <div>
                <div className='about-text'>
                  <h1 className="pl-3">Colombia and Attractions in Bogotá
                  </h1>
                  <p className="pl-3 mb-3 justify-content-center about-text-p">Bogotá is Colombia's capital city and is responsible for 56% of the country's tourism.
                  </p>

                  <div className="button-container mb-2">
                    <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=BamIljS3reIr')} className='btn1'>
                      <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '125px' }}>
                        <a href='#cali' target="_blank" rel="noreferrer" className="btn1">See Why <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                      </Button>
                    </Link>
                  </div>
                  <h2 className="text-center pl-5 pr-5 pb-3 mb-0 about-section-divider-y about-text-sd" >
                  </h2>
                  <h2 className="text-center about-section-divider-b  mb-0 about-text-sd " >
                  </h2>
                  <h2 className="text-center about-section-divider-r about-text-sd" >
                  </h2>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item className="about-carousel-item">
              <div className='about-img-div'>
                <Image src={process.env.PUBLIC_URL + "/assets/short/sanadresboat.jpg"} className="img-fluid d-flex flex-wrap about-img" />
              </div>
              <div>
                <div className='about-text'>
                  <h1 className="pl-3">San Andres a paradise for beach and sun enthusiasts
                  </h1>
                  <p className="pl-3 mb-3 justify-content-center about-text-p">This island's clear waters, white sands, and coral reefs attract global visitors seeking relaxation and adventure.
                  </p>

                  <div className="button-container mb-2">
                    <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=BamIljS3reIr')} className='btn1'>
                      <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '120px' }}>
                        <a href='#cali' target="_blank" rel="noreferrer" className="btn1">More <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                      </Button>
                    </Link>
                  </div>
                  <h2 className="text-center pl-5 pr-5 pb-3 mb-0 about-section-divider-y about-text-sd" >
                  </h2>
                  <h2 className="text-center about-section-divider-b  mb-0 about-text-sd " >
                  </h2>
                  <h2 className="text-center about-section-divider-r about-text-sd" >
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
            <h2 className="mt-3 mb-2 pr-5 justify-content-center">Travel News and Events
            </h2>
            <p className="mt-1 mb-3 pr-5 justify-content-center  -smaller  ">Colombia offers a captivating blend of experiences for travelers. Enjoy classical music in the historic streets of Cartagena at the International Music Festival, explore the Amazon rainforest with eco-tours, and savor the rich flavors of Colombian coffee through farm tours and tastings. With its diverse attractions, Colombia continues to be a must-visit destination
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
            <h2 className="mt-3 mb-2 pr-5 justify-content-center">Resources to help you navigate the opportunities in Colombia as a foreigner
            </h2>
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

                <Carousel slide={true} interval={null} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyleTwo}
                  prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about'>

                  <Carousel.Item className="about-carousel-item">
                    <div className='about-img-div'>
                      <Image src={process.env.PUBLIC_URL + "/assets/short/Universidad-de-los-Andes.jpeg"} className="img-fluid d-flex flex-wrap about-img" />
                    </div>
                    <div>
                      <div className='about-text'>
                        <h1 className="pl-3">Universidad de los Andes
                        </h1>
                        <p className="pl-3 mb-3 justify-content-center about-text-p">Founded in 1948, Universidad de los Andes, Colombia's top-ranked university dedicated to academic excellence and truth-seeking.
                        </p>

                        <div className="button-container mb-2">
                          <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=BamIljS3reIr')} className='btn1'>
                            <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '120px' }}>
                              <a href='#cali' target="_blank" rel="noreferrer" className="btn1">Explore <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                            </Button>
                          </Link>
                        </div>
                        <h2 className="text-center pl-5 pr-5 pb-3 mb-0 about-section-divider-y about-text-sd" >
                        </h2>
                        <h2 className="text-center about-section-divider-b  mb-0 about-text-sd " >
                        </h2>
                        <h2 className="text-center about-section-divider-r about-text-sd" >
                        </h2>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item className="about-carousel-item">
                    <div className='about-img-div'>
                      <Image src={process.env.PUBLIC_URL + "/assets/short/javerianabogota.jpg"} className="img-fluid d-flex flex-wrap about-img" />
                    </div>
                    <div>
                      <div className='about-text'>
                        <h1 className="pl-3">Pontificia Universidad Javeriana
                        </h1>
                        <p className="pl-3 mb-3 justify-content-center about-text-p">Pontificia Universidad Javeriana is a private higher education institution, founded in 1623. It is one of the oldest and most prestigious universities in Colombia, with its main campus in Bogota and a branch campus in Cali.
                        </p>

                        <div className="button-container mb-2">
                          <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=BamIljS3reIr')} className='btn1'>
                            <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '120px' }}>
                              <a href='#cali' target="_blank" rel="noreferrer" className="btn1">Explore <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                            </Button>
                          </Link>
                        </div>
                        <h2 className="text-center pl-5 pr-5 pb-3 mb-0 about-section-divider-y about-text-sd" >
                        </h2>
                        <h2 className="text-center about-section-divider-b  mb-0 about-text-sd " >
                        </h2>
                        <h2 className="text-center about-section-divider-r about-text-sd" >
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
                    <a href='https://www.gooverseas.com/study-abroad/colombia' target="_blank" rel="noreferrer" className="w-100">
                      <Button variant='outline-light' className='btn2 w-100' size="lg">
                        Study abroad programs in Colombia <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </a>
                  </div>

                  <div className='bot'>
                    <a href='https://www.unisabana.edu.co/englishversion/academic-programs/undergraduate/gastronomy/' target="_blank" rel="noreferrer" className="w-100">
                      <Button variant='outline-light' className='btn2 w-100' size="lg">
                        The number one culinary progam in Colombia <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </a>
                  </div>

                  <div className='bot'>
                    <a href='https://ingenieria.bogota.unal.edu.co/en/programs/undergraduate/mechanical-engineering.html' target="_blank" rel="noreferrer" className="w-100">
                      <Button variant='outline-light' className='btn2 w-100' size="lg">
                        Colombia's premier Mechanical Engineering program <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </a>
                  </div>

                  <div className='bot'>
                    <a href='https://centrocatalina.com/' target="_blank" rel="noreferrer" className="w-100">
                      <Button variant='outline-light' className='btn2 w-100' size="lg">
                        Learn Spanish in Medellin <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </a>
                  </div>

                  <div className='bot'>
                    <a href='https://salsapura.com/en/salsa-school-in-cali-colombia-salsa-academy-in-cali-colombia/' target="_blank" rel="noreferrer" className="w-100">
                      <Button variant='outline-light' className='btn2 w-100' size="lg">
                        Elevate your dance skills in Cali <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </a>
                  </div>

                  <div className='bot'>
                    <a href='https://www.alliance-training.com/our-facilities/medellin-colombia/#:~:text=MEDELLIN%20TRAINING%20CENTER,UAEAC%2Dapproved%20pilot%20training%20programs' target="_blank" rel="noreferrer" className="w-100">
                      <Button variant='outline-light' className='btn2 w-100' size="lg">
                        Flight training with Alliance Aviation <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
                      </Button>
                    </a>
                  </div>

                </div>
              </Tab>
              <Tab eventKey="companies" title="Companies" className="tab">
                <Carousel slide={true} interval={null} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyleTwo}
                  prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about-company'>

                  <Carousel.Item className="about-carousel-item-company">
                    <div className='about-company-img-div'>
                      <Image src={process.env.PUBLIC_URL + "/assets/short/Rappi_logo.svg.png"} className="img-fluid d-flex mt-5 flex-wrap about-company-image" />
                    </div>
                    <div>
                      <div className='about-company-text'>
                        <h1 className="pl-3">Colombia's Super App
                        </h1>
                        <p className="pl-3 mb-3 justify-content-center about-text-p">RAPPI was created in August 2015 by Simón Borrero, Felipe Villamarín and Sebastian Mejía in Bogotá, Colombia.  The concept of Rappi emerged as a pioneering solution designed to bridge the gap between small businesses, often referred to as "neighborhood stores," and local users residing within just a few city blocks.
                        </p>

                        <div className="button-container mb-2">
                          <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=BamIljS3reIr')} className='btn1'>
                            <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '120px' }}>
                              <a href='#cali' target="_blank" rel="noreferrer" className="btn1">Explore <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                            </Button>
                          </Link>
                        </div>
                        <h2 className="text-center pl-5 pr-5 pb-3 mb-0 about-section-divider-y about-text-sd" >
                        </h2>
                        <h2 className="text-center about-section-divider-b  mb-0 about-text-sd " >
                        </h2>
                        <h2 className="text-center about-section-divider-r about-text-sd" >
                        </h2>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item className="about-carousel-item-company">
                    <div className="uni-container mt-2">
                      <div className="uni-title-container">
                        <h1 className="title">Colombia's Impactful Companies</h1>
                        <h2 className="title-subcontent">Explore these remarkable companies that started in Colombia</h2>
                      </div>

                      <div className="uni-main mt-5 mb-5">
                        <Container fluid secondary="true" className="justify-content-around d-flex flex-wrap  uni-main">
                          {companies.map((company, key) => (
                            <button key={key} className="document-category" style={{ maxWidth: '100%', height: '7rem' }}>
                              <a href={company.companyUrl} target="_blank" rel="noreferrer" className="no-decoration">
                                <div className="document-category-container">
                                  <div className="document-category-item document-icon-title">
                                    <Col xs={3} md={3} className='justify-content-start ml-1 icon'>
                                      <Image className="img-fluid icon-medium-company hydrated" no-hover="true" src={process.env.PUBLIC_URL + company.logo} style={{ width: '70px', border: 'none' }} />
                                    </Col>
                                    <div className="document-title ">
                                      <span className="document-company-name">{company.name}</span>
                                      <p className="pl-0 document-company-desc">
                                        <span className='text-black'>Founded: </span> {company.founded}
                                        <br></br>
                                        <span className='text-black'>Headquarters: </span> {company.headquarters}
                                        <br></br>
                                        <span className='text-black'>Industry: </span> {company.industry}
                                        <br></br>
                                        <span className='text-black'>Products: </span> {company.products}
                                      </p>

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


                    </div>
                  </Carousel.Item>
                </Carousel>
              </Tab>
              <Tab eventKey="airlines" title="Airlines" className="tab">
                <Carousel slide={true} interval={null} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyleTwo}
                  prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about'>

                  <Carousel.Item className="about-carousel-item">
                    <div className='about-img-div'>
                      <Image src={process.env.PUBLIC_URL + "/assets/short/avianca.jpg"} className="img-fluid d-flex flex-wrap about-img" />
                    </div>
                    <div>
                      <div className='about-text'>
                        <h1 className="pl-3">Avianca Airlines
                        </h1>
                        <p className="pl-3 mb-3 justify-content-center about-text-p">Discover great flight deals with Avianca, serving 75 destinations. Find year-round travel offers and book your next trip, and Venture away!
                        </p>

                        <div className="button-container mb-2">
                          <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '155px' }}>
                            <a href='https://www.avianca.com/en/' target="_blank" rel="noreferrer" className="btn1">Book Flights  <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                          </Button>
                        </div>
                        <h2 className="text-center pl-5 pr-5 pb-3 mb-0 about-section-divider-y about-text-sd" >
                        </h2>
                        <h2 className="text-center about-section-divider-b  mb-0 about-text-sd " >
                        </h2>
                        <h2 className="text-center about-section-divider-r about-text-sd" >
                        </h2>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item className="about-carousel-item">
                    <div className='about-img-div'>
                      <Image src={process.env.PUBLIC_URL + "/assets/short/latamair.jpeg"} className="img-fluid d-flex flex-wrap about-img" />
                    </div>
                    <div>
                      <div className='about-text'>
                        <h1 className="pl-3">LATAM Airlines Colombia
                        </h1>
                        <p className="pl-3 mb-3 justify-content-center about-text-p">  LATAM Airlines Colombia, Colombia's second-largest carrier, connects you with regional domestic flights and cargo services. Your gateway to Colombia, based at Bogotá's El Dorado International Airport.
                        </p>

                        <div className="button-container mb-2">
                          <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '155px' }}>
                            <a href='https://www.latamairlines.com/us/en/destinations/colombia' target="_blank" rel="noreferrer" className="btn1">Book Flights  <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                          </Button>
                        </div>
                        <h2 className="text-center pl-5 pr-5 pb-3 mb-0 about-section-divider-y about-text-sd" >
                        </h2>
                        <h2 className="text-center about-section-divider-b  mb-0 about-text-sd " >
                        </h2>
                        <h2 className="text-center about-section-divider-r about-text-sd" >
                        </h2>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item className="about-carousel-item">
                    <div className='about-img-div'>
                      <Image src={process.env.PUBLIC_URL + "/assets/short/copa-airlines.jpeg"} className="img-fluid d-flex flex-wrap about-img" />
                    </div>
                    <div>
                      <div className='about-text'>
                        <h1 className="pl-3">Copa Airlines
                        </h1>
                        <p className="pl-3 mb-3 justify-content-center about-text-p">  Copa Airlines: Panama's Flag Carrier, part of Star Alliance, based in Panama City, with Tocumen International Airport as its main hub.
                        </p>

                        <div className="button-container mb-2">
                          <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '155px' }}>
                            <a href='https://destinationsguide.copaair.com/en/flights-to-colombia' target="_blank" rel="noreferrer" className="btn1">Book Flights  <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                          </Button>
                        </div>
                        <h2 className="text-center pl-5 pr-5 pb-3 mb-0 about-section-divider-y about-text-sd" >
                        </h2>
                        <h2 className="text-center about-section-divider-b  mb-0 about-text-sd " >
                        </h2>
                        <h2 className="text-center about-section-divider-r about-text-sd" >
                        </h2>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item className="about-carousel-item">
                    <div className='about-img-div'>
                      <Image src={process.env.PUBLIC_URL + "/assets/short/satenaair.jpeg"} className="img-fluid d-flex flex-wrap about-img" />
                    </div>
                    <div>
                      <div className='about-text'>
                        <h1 className="pl-3">Satena Airlines
                        </h1>
                        <p className="pl-3 mb-3 justify-content-center about-text-p">  SATENA: Bogotá-based airline, government-majority owned, focused on improving connectivity in remote areas, hub at El Dorado International Airport.
                        </p>

                        <div className="button-container mb-2">
                          <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '155px' }}>
                            <a href='https://www.satena.com/' target="_blank" rel="noreferrer" className="btn1">Book Flights  <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
                          </Button>
                        </div>
                        <h2 className="text-center pl-5 pr-5 pb-3 mb-0 about-section-divider-y about-text-sd" >
                        </h2>
                        <h2 className="text-center about-section-divider-b  mb-0 about-text-sd " >
                        </h2>
                        <h2 className="text-center about-section-divider-r about-text-sd" >
                        </h2>
                      </div>
                    </div>
                  </Carousel.Item>

                </Carousel>
              </Tab>
            </Tabs>
          </Row>
        </div>

        <div className='mt-5 mb-5 homepage-signup-img'>
          <Row className='mb-5'>
            <div className='history-text'>
              <h1 className='mt-2 d-flex flex-column justify-content-center pl-1'>Your Venture Awaits!</h1>
              <p className='d-flex flex-column justify-content-center history-para'>Create a Colombian travel bucket list, book charming B&Bs, and embark on a journey to uncover Colombia's diverse experiences.</p>
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