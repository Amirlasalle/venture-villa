import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import '../App.css'
import '../index.css'



function Futbol() {

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
                            Fútbol
                        </h2>
                    </Row>
                </div>


                <div className=''>
                    <Row className='mt-3'>

                        <h4 className="mb-2 pr-5 justify-content-center">
                            Book tickets to watch your favorite team play
                        </h4>
                        <p className="mt-1 mb-auto pr-5 justify-content-center font-light text-small">
                            Currently, there are no available games. Please check again later for updates.
                        </p>
                    </Row>
                </div>



            </Container>
        </div>
    );
}



export default Futbol;