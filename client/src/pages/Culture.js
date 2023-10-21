import React from 'react';
import "../index.css"
import { Image, Card, Carousel, Container } from 'react-bootstrap';
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
        <div className='article-slides mt-5'>

            <Container className='article-slides-container'>
        

             
            
                        <Carousel slide={false} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyle}
                            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about'>
                                <div className='content-container'>
                            <Carousel.Item className="content-container">

                                <Carousel className='mb-5'>

                                    <Carousel.Item className="carousel-item-one">
                                        <Image src={process.env.PUBLIC_URL + "/assets/short/tokyo-bannershort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />
                                    </Carousel.Item>
                                </Carousel>
                                <div className="carousel-two">
                                    <Carousel className='mt-5 about'>
                                        <div className="carousel-item-two">
                                        <Carousel.Item className="carousel-item-two">
                                            <Carousel.Caption className='d-flex flex-column justify-content-around text-center'>
                                                <h3 className='bg-white'>In Cartagena Every Day Feels Like a Fiesta!</h3>

                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        </div>
                                    </Carousel>
                                </div>
                            </Carousel.Item>
                            </div>
                            {/* <Carousel.Item className="carousel">

                                <Carousel className='mb-5'>

                                    <Carousel.Item className="carousel-item-one">

                                        <Image src={process.env.PUBLIC_URL + "/assets/short/cartagenashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />
                                    </Carousel.Item>
                                </Carousel>
                                <Carousel className='mt-5'>
                                    <Carousel.Item className="carousel-item-two">
                                        <Image src={process.env.PUBLIC_URL + "/assets/short/tokyo-bannershort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center" />
                                    </Carousel.Item>
                                </Carousel>

                            </Carousel.Item> */}
                        </Carousel>



                <Card></Card>





  
</Container>



        </div>)

}
export default Culture;
