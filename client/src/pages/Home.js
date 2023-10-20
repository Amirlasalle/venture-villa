import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import placesinfoData from "../components/Places/placesinfo.json"
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import '../App.css'
import '../index.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft, faChevronLeft, faChevronRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
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
                  {/* <Modal show={show} onHide={handleClose} animation={false} size="sm" className='d-flex flex-wrap justify-content-around custom-modal'>
                    <Modal.Body className='d-flex flex-wrap justify-content-around custom-modal'closeButton>
                      <div className='custom-youtube-video'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RqFZ7Xeumuo?si=SlblQNZhfvUT9jiC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                    </Modal.Body>
                  </Modal> */}
                  <Modal show={show} onHide={handleClose} animation={false} size="lg" className='d-flex flex-wrap justify-content-around custom-modal'>
                  {/* <Modal.Header className='model-header' closeButton  /> */}
                    <Modal.Body className='d-flex flex-wrap justify-content-around custom-modal' closeButton>
                      <div className='custom-youtube-video'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RqFZ7Xeumuo?si=SlblQNZhfvUT9jiC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='custom-youtube-video'></iframe>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            {/* <a href='https://www.youtube.com/watch?v=7-DkkLTe2eA' target="_blank" rel="noreferrer" className="btn1">Learn More <FontAwesomeIcon icon={faExternalLinkAlt} /></a>  */}

            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/cartagenashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h3 className='outlined-text'>In Cartagena Every Day Feels Like a Fiesta!</h3>
                <div className="button-container">
                  <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/shorts/r25RXQVJH50')} className='btn1'>
                    <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '140px' }}>
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
                    <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '140px' }}>
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
          <Row className='mt-4  about'>
            <Image src={process.env.PUBLIC_URL + "/assets/short/antioquiashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around page-img" />
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

        {/* <p className="mt-1 mb-1 pl-5 pr-5 justify-content-center about-asco-text-smaller about">Colombia is a melting pot of diverse cultures and traditions. Its cities are vibrant hubs of art, music, and dance, while rural regions preserve indigenous customs that have endured for centuries. A visit to Colombia will immerse you in a rich tapestry of festivals, music, and folklore, providing an opportunity to witness the country's cultural resilience and passion.
            </p>
      



            <Image src={process.env.PUBLIC_URL + "/assets/short/andesmountainshort.png"} className="img-fluid d-flex flex-wrap justify-content-around page-img" />
            <h3 className="mt-3 pl-5 pr-5 justify-content-center about-asco-text about">Breathtaking Landscapes
            </h3>
            <p className="mt-1 mb-1 pl-5 pr-5 justify-content-center about-asco-text-smaller about">From the lush Amazon rainforest to the towering Andes mountains and the pristine Caribbean coast, Colombia's landscapes are nothing short of spectacular. Whether you're exploring the lush coffee regions, embarking on a trek to the Lost City, or relaxing on the white-sand beaches, Colombia offers a wide array of natural wonders that will leave you in awe.
            </p>


            <h2 className="text-center mt-2 pb-3 section-divider-y w-100" >
            </h2>
            <h2 className="text-center section-divider-b w-100" >
            </h2>
            <h2 className="text-center section-divider-r w-100" >
            </h2>



            <h3 className="mt-3 pl-5 pr-5 justify-content-center about-asco-text about">
              Best Stays of 2023
            </h3>
            <p className="mt-1 mb-1 pl-5 pr-5 justify-content-center about-asco-text-smaller about">If you're searching for accommodations in Colombia, don't miss out on these top four bed and breakfast homes, each offering remarkable features and a plethora of exciting activities to enjoy.
            </p> */}

        <Row>
          <div id="homepageCards" className="d-flex flex-wrap justify-content-center pt-3 pb-3 cards-bg">
            <Card className="atribute-cards">
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

        {/* <h2 className="mt-3 mb-2 pl-5 pr-5 justify-content-center about-asco-text about">Discover Colombia: A Gem of South America Worth Exploring
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
            </h3> */}

        <div>
          <Row className='mt-4  about'>
            <h2 className="text-center mt-2 pb-3 section-divider-y w-100" >
            </h2>
            <h2 className="text-center section-divider-b w-100" >
            </h2>
            <h2 className="text-center section-divider-r w-100" >
            </h2>



            <h3 className="mt-3 pl-5 pr-5 justify-content-center about-asco-text about">
              Best Stays of 2023
            </h3>
            <p className="mt-1 mb-1 pl-5 pr-5 justify-content-center about-asco-text-smaller about">If you're searching for accommodations in Colombia, don't miss out on these top four bed and breakfast homes, each offering remarkable features and a plethora of exciting activities to enjoy.
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

        <div className='mb-5'>
          <Row className='mt-4  about'>
            <h2 className="text-center mt-2 pb-3 section-divider-y w-100" >
            </h2>
            <h2 className="text-center section-divider-b w-100" >
            </h2>
            <h2 className="text-center section-divider-r w-100" >
            </h2>
            <h3 className="mt-3 mb-2 pl-5 pr-5 justify-content-center about-asco-text about">Culinary Delights
            </h3>
            <p className="mt-1 mb-3 pl-5 pr-5 justify-content-center about-asco-text-smaller about">Colombian cuisine is a feast for the senses, blending indigenous ingredients you can savor traditional dishes like arepas, bandeja paisa, and empanadas, or indulge in fresh tropical fruits and some of the world's finest coffee.
            </p>



            <h3 className="mt-3 pl-5 pr-5 justify-content-center about-asco-text about">Colombian love
            </h3>
            <p className="mt-1 mb-5 pl-5 pr-5 justify-content-center about-asco-text-smaller about">Colombians are renowned for their warmth and hospitality. You'll find that locals are eager to share their culture and traditions with visitors, making you feel at home and creating lasting memories of your journey.
            </p>
            {/* <h2 className="text-center mt-2 section-divider-b w-100" >
            </h2> 

            <h2 className="text-center mt-2 section-divider-r w-100" >
            </h2>
            <h3 className="mt-3 pl-5 pr-5 justify-content-center about-asco-text about">Breathtaking Landscapes
            </h3>
            <p className="mt-1 mb-1 pl-5 pr-5 justify-content-center about-asco-text-smaller about">From the lush Amazon rainforest to the towering Andes mountains and the pristine Caribbean coast, Colombia's landscapes are nothing short of spectacular. Whether you're exploring the lush coffee regions, embarking on a trek to the Lost City, or relaxing on the white-sand beaches, Colombia offers a wide array of natural wonders that will leave you in awe.
            </p> */}


          </Row>
        </div>


        {/* <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around banner">
          <div className="banner">
            <Image src={process.env.PUBLIC_URL + "/assets/short/colombia_flag.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around banner-image banner" />
            <h1 className='mt-0 mb-auto d-flex flex-column justify-content-center banner-text banner text-center'>Venture Villa</h1>
          </div>
        </Container> */}



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