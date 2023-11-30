import React, { useState, useEffect, useRef } from 'react';
import placesinfoData from "../components/Places/placesinfo.json"
import bnbsearchData from '../components/Jsons/bnbsearch.json'
import { Image, Container, Card, Row, Carousel, } from 'react-bootstrap';
import '../App.css'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import Col from 'react-bootstrap/Col';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import PlaceList from '../components/Places/Places'; 
//Col,  Tab, Tabs, Button, Modal 
//faChevronLeft, faChevronRight, faExternalLinkAlt, faArrowUpRightFromSquare
//


function BnB() {

  const [backgroundColor, setBackgroundColor] = useState('#f3f2f2');
  const resetColor = useRef(null);

  const changeBgColor = () => {
    setBackgroundColor('#f3f2f2');
  };

  const [data2, setData2] = useState([]);
  const [searchQuery2, setSearchQuery2] = useState('');

  useEffect(() => {

    const searchData2 = [
      ...bnbsearchData
    ];
    setData2(searchData2);
  }, []);

  const searchedData2 = data2.filter((item) => {
    const filteredSearch2 = searchQuery2.trim().toLowerCase();
    const filteredName2 = item.name.toLowerCase().trim();
    const searchWords = filteredSearch2.split(' ');

    return searchWords.some((word) => filteredName2.includes(word));
  });



  const chevIconStyle = {
    fontSize: '2.5rem',
  };


  const [placesinfo] = useState(placesinfoData)
  console.log(placesinfo)





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
          </Row>
        </div>

        <div className='w-100 mb-5 toast-body'>
          <div ref={resetColor} variant='light' style={{ backgroundColor }} className='form-div  mx-3 p-3 text-left' onClick={changeBgColor}>
            <span className='mx-1 '>
              <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' className='faMagGlass' />
            </span>
            <input
              className="form-input search-btn-form" placeholder=" Venture Search..."
              value={searchQuery2}
              onChange={(e) => setSearchQuery2(e.target.value)}
            />
          </div>
          {searchQuery2 && (
            <div className="d-flex flex-wrap justify-content-center pt-3 pb-3 cards-bg mt-3">
              {searchedData2.length > 0 ? (
                searchedData2.slice(0, 10).map((item) => (
                    <Card key={item} className="m-2 p-2  product-cards" style={{ maxWidth: '22rem' }}>
                      <a href={item.more} target="_blank" rel="noreferrer" className="btn1" >
                        <Carousel slide={false} interval={null} nextIcon={<FontAwesomeIcon icon={faChevronCircleRight} />} style={chevIconStyle}
                          prevIcon={<FontAwesomeIcon icon={faChevronCircleLeft} />} className='next-icon'>
                          <Carousel.Item className="carousel">
                            <Image src={process.env.PUBLIC_URL + item.screenshotone} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                          </Carousel.Item>
                          <Carousel.Item className="carousel">
                            <Image src={process.env.PUBLIC_URL + item.screenshottwo} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                          </Carousel.Item>
                          <Carousel.Item className="carousel">
                            <Image src={process.env.PUBLIC_URL + item.screenshotthree} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                          </Carousel.Item>
                          <Carousel.Item className="carousel">
                            <Image src={process.env.PUBLIC_URL + item.screenshotfour} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                          </Carousel.Item>
                          <Carousel.Item className="carousel">
                            <Image src={process.env.PUBLIC_URL + item.screenshotfive} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                          </Carousel.Item>
                          <Carousel.Item className="carousel">
                            <Image src={process.env.PUBLIC_URL + item.screenshotsix} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                          </Carousel.Item>
                          <Carousel.Item className="carousel">
                            <Image src={process.env.PUBLIC_URL + item.screenshotseven} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                          </Carousel.Item>
                          <Carousel.Item className="carousel">
                            <Image src={process.env.PUBLIC_URL + item.screenshoteight} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                          </Carousel.Item>
                          <Carousel.Item className="carousel">
                            <Image src={process.env.PUBLIC_URL + item.screenshotnine} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                          </Carousel.Item>
                          <Carousel.Item className="carousel">
                            <Image src={process.env.PUBLIC_URL + item.screenshotten} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
                          </Carousel.Item>
                        </Carousel>
                        <Card.Body className='w-100 mt-2 ml-0 mr-0'>
                          <Card.Subtitle className="mb-2 mr-1 card-titles">{item.name} <span className='rating'>{item.star}<span className='text-muted'>{item.ratings}</span></span></Card.Subtitle>
                          <Card.Subtitle className="mb-2 card-subtitle text-muted">{item.subtitle}</Card.Subtitle>
                          <Card.Subtitle className="mb-2 text-muted  card-subt2">{item.beds}</Card.Subtitle>
                          <Card.Subtitle className="mb-3 text-muted  card-subt2">{item.dates}</Card.Subtitle>
                          <Card.Subtitle className="mb-3 card-price">{item.price} <span className='text-muted night'>night</span></Card.Subtitle>
                          <style type="text/css">
                          </style>
                        </Card.Body>
                      </a>
                    </Card>
                  ))
                

              ) : (
                <div className="text-center mt-3">
                  <p className='pl-0'>Sorry, there are no available stays at this location.</p>
                </div>
              )}
            </div>


          )}
        </div>


        <div className='w-100'>
          <Row className=''>
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

          <h2 className="text-center pb-5 section-divider-y w-100" >
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