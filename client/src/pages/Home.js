import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import placesinfoData from "../components/Places/placesinfo.json"
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import '../App.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
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
  const [placesinfo] = useState(placesinfoData)
  console.log(placesinfo)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://airbnb-listings.p.rapidapi.com/v2/getadmins?countrycode=IT&admin1=07&admin2=RM&admin3=058091&admin4=05809101',
          {
            headers: {
              'X-RapidAPI-Key': 'b3569df6b3mshd27a28f0f1315a1p1376d5jsn45d184e33c7f',
              'X-RapidAPI-Host': 'airbnb-listings.p.rapidapi.com',
            },
          }
        );
        const data = await response.json();
        console.log(data);
        // setListings(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


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
                  <Button variant="info" size="sm" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '150px' }}>
                    <a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1">Learn More </a>
                  </Button>
                </div>
              </Carousel.Caption>

            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/cartagenashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h3 className='outlined-text'>In Cartagena Every Day Feels Like a Fiesta!</h3>
                <div className="button-container">
                  <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}>
                    <a href='https://www.youtube.com/playlist?list=PLOm6FLTQtSyJez1dBGsC9SoOuQas0pFk2' target="_blank" rel="noreferrer" className="btn1">Start Learning <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a>
                  </Button>
                </div>
              </Carousel.Caption>

            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/sanandresshort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h3 className='outlined-text'>Where Paradise Meets Passion!</h3>
                <div className="button-container">
                  <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '150px' }}>
                    <a href='https://www.youtube.com/playlist?list=PLOm6FLTQtSyJd84_uDBxlwXH9_67b7o_Y' target="_blank" rel="noreferrer" className="btn1">Team ASCO <span><i class="fa fa-users" aria-hidden="true"></i></span></a>
                  </Button>
                </div>
              </Carousel.Caption>

            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/Bogotashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h3 className='outlined-text'>Bogota Is A City of Endless Horizons and Vibrant Realities!</h3>
                <div className="button-container">
                  <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '150px' }}>
                    <a href='https://www.youtube.com/watch?v=lbs_BC8cQwo' target="_blank" rel="noreferrer" className="btn1">Learn More <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a>
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>







            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/colombiacali.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h3 className='outlined-text'>Cali: Where Salsa, Sunshine, and Smiles Await!</h3>
                <div className="button-container">
                  <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '250px' }}>
                    <a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1">Customer Testimonials <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a>
                  </Button>
                </div>
              </Carousel.Caption>

            </Carousel.Item>





          </Carousel>
        </div>

        <div>
          <Row className='mt-4  about'>
            <h3 className="mt-3 mb-2 pl-5 pr-5 justify-content-center about-asco-text about">Discover Colombia: A Gem of South America Worth Exploring
            </h3>
            <p className="mt-1 mb-3 pl-5 pr-5 justify-content-center about-asco-text-smaller about">Colombia, a country long associated with a turbulent past, has emerged as a top destination for travelers seeking unique experiences, rich cultural heritage, and stunning natural beauty. This diverse South American nation boasts a wealth of reasons why you should add it to your travel bucket list.
            </p>
            <h2 className="text-center p-3 mt-2 section-divider-y w-100" >
            </h2>


            <h3 className="mt-3 pl-5 pr-5 justify-content-center about-asco-text about">Cultural Richness
            </h3>
            <p className="mt-1 mb-1 pl-5 pr-5 justify-content-center about-asco-text-smaller about">Colombia is a melting pot of diverse cultures and traditions. Its cities are vibrant hubs of art, music, and dance, while rural regions preserve indigenous customs that have endured for centuries. A visit to Colombia will immerse you in a rich tapestry of festivals, music, and folklore, providing an opportunity to witness the country's cultural resilience and passion.
            </p>
            <h2 className="text-center mt-2 section-divider-b w-100" >
            </h2>
            <h3 className="mt-3 pl-5 pr-5 justify-content-center about-asco-text about">Breathtaking Landscapes
            </h3>
            <p className="mt-1 mb-1 pl-5 pr-5 justify-content-center about-asco-text-smaller about">From the lush Amazon rainforest to the towering Andes mountains and the pristine Caribbean coast, Colombia's landscapes are nothing short of spectacular. Whether you're exploring the lush coffee regions, embarking on a trek to the Lost City, or relaxing on the white-sand beaches, Colombia offers a wide array of natural wonders that will leave you in awe.
            </p>
            <h2 className="text-center mt-2 section-divider-r w-100" >
            </h2>

          </Row>
        </div>

        <Row className='mt-4'>
          <div id="homepageCards" className="d-flex flex-wrap justify-content-around ">
            {placesinfo.map((placesinfo, key) =>

              <Card key={key} className="m-2 p-2 shadow-lg product-cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + placesinfo.screenshot} />
                <Card.Body>
                  <Card.Title className="card-titles">{placesinfo.productname}</Card.Title>
                  <Card.Subtitle className="mb-2  card-subt">{placesinfo.subtitle}</Card.Subtitle>
                  <Card.Subtitle className="mb-3 text-muted  card-subt2">{placesinfo.subtitle2}</Card.Subtitle>
                  <Card.Text>{placesinfo.brief}
                  </Card.Text>
                  <style type="text/css">
                  </style>
                  <Button variant="info" size="md" className="mb-1 mt-auto" ><a href={placesinfo.product} target="_blank" rel="noreferrer" className="btn1" >More information <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a></Button>
                  {/* &nbsp;&nbsp;&nbsp;
        <Button variant="info"  ><a href={placesinfo.deployment} target="_blank" rel="noreferrer" className="btn1"  >Contact <br></br>sales</a></Button> */}
                </Card.Body>
              </Card>

            )}
          </div>
        </Row>

        <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around banner">


          <div className="banner">
            <Image src={process.env.PUBLIC_URL + "/assets/short/colombia_flag.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around banner-image banner" />
            <h1 className='mt-0 mb-auto d-flex flex-column justify-content-center banner-text banner text-center'>Venture Villa</h1>


          </div>
        </Container>



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