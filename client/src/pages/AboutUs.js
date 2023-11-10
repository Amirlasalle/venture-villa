import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Image, Container, Row, Button } from 'react-bootstrap';
import '../App.css'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';



function AboutUs() {

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

    return (
        <div className="home">
            <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around home">


                <div className='w-100'>
                    <Row className=''>
                        <h2 className="text-center pb-4 section-divider-y w-100" >
                        </h2>
                        <h2 className="text-center section-divider-b w-100" >
                        </h2>
                        <h2 className="mb-0 text-center section-divider-r w-100" >
                        </h2>
                    </Row>
                </div>
                <div className='about-img-us take-out'>
                    <Row className=''>
                        <div className='contact-img-text'>
                            <h2 className='justify-content-center text-center contact-img-text'>About Us</h2>
                        </div>
                    </Row>
                </div>


                <div className='w-100 take-out'>
                    <Row className=''>
                        <h2 className="mt-5  pr-5 justify-content-center">
                            Venture Villa – Your Gateway to the Heart of Colombia!
                        </h2>
                        <p className="mt-1 mb-5 pr-5 justify-content-center   ">
                            At Venture Villa, we are passionate about providing an immersive experience for foreigners exploring the vibrant and diverse landscape of Colombia. Our platform is more than just a guide; it's a personalized journey through the rich tapestry of Colombian culture, offering insights into the best bed and breakfasts, restaurants, universities, companies, and the unparalleled world of Colombian futball.
                        </p>
                    </Row>
                </div>

                <div className='w-100 move-it'>
                    <Row className=''>
                        <h2 className="mt-3 pr-5 justify-content-center move-it">
                            About Us
                        </h2>
                    </Row>
                </div>

                <Row className='mt-0 move-it'>
                    <div className='mt-0 about'>
                        <div className="mt-0 about-div-item">


                            <div className='about-img-div-one'>
                                <Image src={process.env.PUBLIC_URL + "/assets/short/about-us.jpeg"} className="img-fluid d-flex flex-wrap about-us-img-one" />
                            </div>
                            <div className='about-text-one'>
                                <h1 className="pl-3">Venture Villa – Your Gateway to the Heart of Colombia!
                                </h1>
                                <p className="pl-3 mb-3 justify-content-center about-text-p">
                                    At Venture Villa, we are passionate about providing an immersive experience for foreigners exploring the vibrant and diverse landscape of Colombia. Our platform is more than just a guide; it's a personalized journey through the rich tapestry of Colombian culture, offering insights into the best bed and breakfasts, restaurants, universities, companies, and the unparalleled world of Colombian football.
                                </p>
                            </div>
                        </div>
                    </div>
                </Row>







                <div className='w-100'>
                    <Row className=''>
                        <h2 className="mt-3 pr-5 justify-content-center">
                            What Sets Us Apart?
                        </h2>
                    </Row>
                </div>


                <div className=''>
                    <Row className='mt-4   '>

                        <h4 className="mt-3 mb-2 pr-5 justify-content-center">
                            Bed and Breakfasts Across Colombia:
                        </h4>
                        <p className="mt-1 mb-3 pr-5 justify-content-center ">
                            Explore Colombia like a local by discovering unique and cozy bed and breakfasts in every corner of the country. Whether nestled in the Andean highlands, along the Caribbean coast, or in the heart of bustling cities, our guide ensures you find the perfect accommodation for an authentic Colombian experience.
                        </p>
                    </Row>
                </div>

                <div className=''>
                    <Row className=' '>

                        <h4 className="mt-3 mb-2 pr-5 justify-content-center">
                            Personalized Travel Planning:
                        </h4>
                        <p className="mt-1 mb-3 pr-5 justify-content-center ">
                            Create your travel bucket list with our user-friendly interface. Plan your itinerary by selecting cities and adding must-see attractions. Tailor your journey with a checklist of experiences unique to each location.
                        </p>
                    </Row>
                </div>

                <div className=''>
                    <Row className=' '>

                        <h4 className="mt-3 mb-2 pr-5 justify-content-center">
                            Culinary Delights:
                        </h4>
                        <p className="mt-1 mb-3 pr-5 justify-content-center ">
                            Savor the flavors of Colombia through our curated list of restaurants. From traditional Colombian dishes to international cuisine, our recommendations promise a gastronomic journey that mirrors the country's diverse culinary heritage.
                        </p>
                    </Row>
                </div>

                <div className=''>
                    <Row className=''>

                        <h4 className="mt-3 mb-2 pr-5 justify-content-center">
                            Academia and Beyond:
                        </h4>
                        <p className="mt-1 mb-3 pr-5 justify-content-center ">
                            Discover the academic landscape of Colombia with insights into universities and educational institutions. Whether you're planning to study, conduct research, or simply explore intellectual pursuits, our guide provides valuable information to make informed decisions.
                        </p>
                    </Row>
                </div>

                <div className=''>
                    <Row className=' '>

                        <h4 className="mt-3 mb-2 pr-5 justify-content-center">
                            Cultural Exploration:
                        </h4>
                        <p className="mt-1 mb-3 pr-5 justify-content-center ">
                            Immerse yourself in the rich tapestry of Colombian culture. From festivals and traditions to art and music, our platform serves as a window into the soul of this enchanting country.
                        </p>
                    </Row>
                </div>
                <div className=''>
                    <Row className=' '>

                        <h4 className="mt-3 mb-2 pr-5 justify-content-center">
                            Business and Industry:
                        </h4>
                        <p className="mt-1 mb-3 pr-5 justify-content-center ">
                            Gain insights into the thriving business landscape of Colombia. Whether you're an entrepreneur looking for opportunities or a professional seeking to understand the market, our guide offers valuable resources and information.
                        </p>
                    </Row>
                </div>

                <div className=''>
                    <Row className=''>

                        <h4 className="mt-3 mb-2 pr-5 justify-content-center">
                            Futbol Fever:
                        </h4>
                        <p className="mt-1 mb-3 pr-5 justify-content-center ">
                            Experience the passion and excitement of Colombian football. Stay updated on matches, teams, and immerse yourself in the electric atmosphere that defines Colombian soccer culture.
                        </p>
                    </Row>
                </div>


                <div className='w-100 '>
                    <Row className=''>
                        <h2 className="mt-5  pr-5 justify-content-center">
                            Join Us on Your Colombian Adventure!
                        </h2>
                        <p className="mt-1 mb-5 pr-5 justify-content-center   ">
                            At Venture Villa, we believe that travel is not just about the destinations but the experiences that shape your journey. Let us be your companion as you explore the breathtaking landscapes, savor mouth-watering cuisine, and dive into the rich tapestry of Colombia's culture. Start your adventure today and make every moment in Colombia unforgettable!
                        </p>
                    </Row>
                </div>

                <div className='mt-5 mb-5 about-signup-img'>
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



export default AboutUs;


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