import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import '../App.css'
import '../index.css'



function Restaurants() {

    // const navigate = useNavigate();

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'auto',
    //     });
    // };


    // const handleNavLinkClick = (url) => {
    //     scrollToTop();
    //     navigate(url);
    // };

    return (
        <div className="home mb-5">
            <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around home">


                <div className='w-100 '>
                    <Row className=''>
                        <h2 className="text-center pb-4 section-divider-y w-100" >
                        </h2>
                        <h2 className="text-center section-divider-b w-100" >
                        </h2>
                        <h2 className="mb-0 text-center section-divider-r w-100" >
                        </h2>
                    </Row>
                </div>

                <div className='w-100'>
                    <Row className=''>
                        <h2 className="mt-3 pr-5 justify-content-center">
                            Restaurants
                        </h2>
                    </Row>
                </div>


                <div className=''>
                    <Row className='mt-3'>

                        <h4 className="mb-2 pr-5 justify-content-center">
                            Discover the finest culinary experiences in Colombia.
                        </h4>
                        <p className="mt-1 mb-auto pr-5 justify-content-center font-light text-small">
                        From traditional delights to gourmet wonders, our curated guide ensures a delectable journey for every palate. Immerse yourself in Colombian hospitality and savor the unique flavors that await.
                        </p>
                    </Row>
                </div>



            </Container>
        </div>
    );
}



export default Restaurants;