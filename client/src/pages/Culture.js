import React from 'react';
import "../index.css"
import { Row, Col, Image, Card, Carousel, Container } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';



const Culture = () => {


    const nextIconStyle = {
        fontSize: '2rem',
        fontWeight: 'bolder',
    };


    return (



        <Carousel slide={true} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyle}
            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about'>
<Carousel.Item className="about-carousel-item">
                <div>

                    <div className='about-img-div'>
                        <Image src={process.env.PUBLIC_URL + "/assets/short/antioquiashort.jpeg"} className="img-fluid d-flex flex-wrap about-img" />
                    </div>
                    <div className='about-text'>
                        <h2 className="mb-2 justify-content-around about-text">Colombia has emerged as a top destination.
                        </h2>
                        <p className="mt-1 mb-3 justify-content-center about-text-p">Colombia, a country long associated with a turbulent past, has emerged as a top destination for travelers
                        </p>
                        <h2 className="text-center pl-5 pr-5 pb-3 mb-0 section-divider-y   about-text-sd" >
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
                        <Image src={process.env.PUBLIC_URL + "/assets/short/cartagenashort.jpeg"} className="img-fluid d-flex flex-wrap about-img" />
                    </div>
                    <div className='about-text'>
                        <h2 className="mb-2 justify-content-around about-text">Colombia has emerged as a top destination.
                        </h2>
                        <p className="mt-1 mb-3 justify-content-center about-text-p">Colombia, a country long associated with a turbulent past, has emerged as a top destination for travelers
                        </p>
                        <h2 className="text-center pl-5 pr-5 pb-3 mb-0 section-divider-y   about-text-sd" >
                        </h2>
                        <h2 className="text-center section-divider-b  mb-0 about-text-sd " >
                        </h2>
                        <h2 className="text-center section-divider-r about-text-sd" >
                        </h2>
                    </div>
                </div>
            </Carousel.Item>
            {/* <Carousel.Item className="about">
                <div>

                    <div className='about-img-div'>
                        <Image src={process.env.PUBLIC_URL + "/assets/short/cartagenashort.jpeg"} className="img-fluid d-flex flex-wrap about-img" />
                    </div>
                    <div className='about-text'>
                        <h2 className="mt-3 mb-2 pl-5 pr-5 justify-content-center about">Colombia, a country long associated with a turbulent past, has emerged as a top destination.
                        </h2>
                        <p className="mt-1 mb-3 pl-5 pr-5 justify-content-center">Colombia, a country long associated with a turbulent past, has emerged as a top destination for travelers
                        </p>
                        <h2 className="text-center p-3 mb-0 section-divider-y w-100" >
                        </h2>
                        <h2 className="text-center section-divider-b w-100 mb-0" >
                        </h2>
                        <h2 className="text-center section-divider-r w-100" >
                        </h2>
                    </div>
                </div>
            </Carousel.Item> */}

        </Carousel>







    )

}
export default Culture;
