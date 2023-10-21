import React from 'react';
import "../index.css"
import { Row, Col, Image, Card, Carousel, Container } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';



const Culture = () => {


  const nextIconStyle = {
    fontSize: '10vw',
    fontWeight: 'bolder',
  };

  return (
      <div className='asco m-5'>
      
      <Container id="root" className='d-flex flex-wrap justify-content-around mt-4 about' >

        <Row>

          <Col >
          <Carousel slide={false} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyle}
              prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about'>
        <Carousel.Item className="carousel">
            
            <Carousel className='mb-5'>

              <Carousel.Item className="carousel">
                <Image src={process.env.PUBLIC_URL + "/assets/short/tokyo-bannershort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />
              </Carousel.Item>           
            </Carousel>
            <Carousel className='mt-5'>
              <Carousel.Item className="carousel">
                <Image src={process.env.PUBLIC_URL + "/assets/short/cartagenashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />
              </Carousel.Item>
            </Carousel>
               
              </Carousel.Item>
              <Carousel.Item className="carousel">
            
            <Carousel className='mb-5'>

              <Carousel.Item className="carousel">
               
                <Image src={process.env.PUBLIC_URL + "/assets/short/cartagenashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />
              </Carousel.Item>           
            </Carousel>
            <Carousel className='mt-5'>
              <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/tokyo-bannershort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />
              </Carousel.Item>
            </Carousel>
               
              </Carousel.Item>
</Carousel>

          </Col>


        </Row>

 <Card></Card>
     

       

    
     
      </Container>



    </div>)

}
export default Culture;
