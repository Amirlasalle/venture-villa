import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
// import { Link, useNavigate } from 'react-router-dom';
import placesinfoData from "../components/Places/placesinfo.json"
import { Image, Container, Card, Row, Carousel,  } from 'react-bootstrap';
import '../App.css'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft,  } from '@fortawesome/free-solid-svg-icons';
// import Col from 'react-bootstrap/Col';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import PlaceList from '../components/Places/Places'; 
//Col,  Tab, Tabs, Button, Modal 
//faChevronLeft, faChevronRight, faExternalLinkAlt, faArrowUpRightFromSquare
//
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

function BnB() {
  // const [listings, setListings] = useState([]);

//   const nextIconStyle = {
//     fontSize: '4rem',
//     fontWeight: 'bolder',
//   };
//   const nextIconStyleTwo = {
//     fontSize: '2rem',
//     fontWeight: 'bolder',
//   };

  const chevIconStyle = {
    fontSize: '2.5rem',
  };
  // const navigate = useNavigate();

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'auto',
  //   });
  // };


  // const handleNavLinkClick = (url) => {
  //   scrollToTop();
  //   navigate(url);
  // };

  const [placesinfo] = useState(placesinfoData)
  console.log(placesinfo)


  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);





  return (
    <div className="home">
      <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around home">



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
        
          <div id="homepageCards" className="d-flex flex-wrap justify-content-center pt-3 pb-3 cards-bg bnb-cards-570">
            <Card className="atribute-cards-bnb w-100">
              <div className="card-content">
                <Image src={process.env.PUBLIC_URL + "/assets/short/beach-house.jpg"} className="img-fluid atribute-img-bnb" />
                <div className="text-container">
                  <h3 className="atribute-text-bnb">Beach<br></br>Houses</h3>
                </div>
              </div>
            </Card>
            <Card className="atribute-cards-bnb">
              <div className="card-content">
                <Image src={process.env.PUBLIC_URL + "/assets/short/mountain-view-house.jpeg"} className="img-fluid atribute-img-bnb" />
                <div className="text-container">
                  <h3 className="atribute-text-bnb">Mountain<br></br>Views</h3>
                </div>
              </div>
            </Card>
            <Card className="atribute-cards-bnb">
              <div className="card-content">
                <Image src={process.env.PUBLIC_URL + "/assets/short/city-view.jpeg"} className="img-fluid atribute-img-bnb" />
                <div className="text-container">
                  <h3 className="atribute-text-bnb">City<br></br>Lights</h3>
                </div>
              </div>
            </Card>
            <Card className="atribute-cards-bnb" >
              <div className="card-content">
                <Image src={process.env.PUBLIC_URL + "/assets/short/farmer-vibe.jpeg"} className="img-fluid atribute-img-bnb" />
                <div className="text-container">
                  <h3 className="atribute-text-bnb">Farmer's<br></br>Vibe</h3>
                </div>
              </div>
            </Card>
          </div>
        
          <h2 className="text-center mt-2 pb-3 section-divider-y w-100" >
          </h2>
          <h2 className="text-center section-divider-b w-100" >
          </h2>
          <h2 className="text-center section-divider-r mb-0 w-100" >
          </h2>
        </Row>
       

      </Container>
    </div>
  );
}



export default BnB;


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