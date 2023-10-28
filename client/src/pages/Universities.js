// import { useState } from 'react';
// import "../index.css"
// import universitiesData from "../components/Jsons/universities.json"
// import { Image, Container, Col, Card, Row } from 'react-bootstrap';
// // import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
// // import { useNavigate } from 'react-router-dom'; Button, Carousel,
// // import Container from "react-bootstrap/Container";
// // import Tab from 'react-bootstrap/Tab';
// // import Tabs from 'react-bootstrap/Tabs';
// // import Button from 'react-bootstrap/Button';
// // import Modal from 'react-bootstrap/Modal';, Card, Row 

import { useState } from 'react';
import universitiesData from "../components/Jsons/universities.json";
import { Image, Container, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Universities = () => {
    const [universities] = useState(universitiesData);

    return (

        <div className="uni-main mt-5 mb-5">
            <Container fluid secondary="true" className=" d-flex flex-wrap uni-main">
                {universities.map((university, key) => (

                    <button key={key} className="document-category" style={{ width: '25rem', height: '7rem' }}>
                        <a href={university.uniUrl} target="_blank" rel="noreferrer" className="no-decoration">
                            <div className="document-category-container">
                                <div className="document-category-item document-icon-title">
                                    <Col xs={3} md={3} className='justify-content-start ml-1 icon'>
                                        <Image className="img-fluid icon-medium hydrated" no-hover="true" src={process.env.PUBLIC_URL + university.logo}   style={{ width: '50px', height: '50px', border: 'none' }}thumbnail />
                                    </Col>


                                    <div className="document-title">
                                        <span className="document-cat-name">{university.name}</span>
                                        <p className="pl-0 document-category-desc">{university.brief}</p>
                                    </div>
                                </div>
                                <span className="document-category-item document-count">
                                    <FontAwesomeIcon icon={faChevronRight} size="lg" /></span>
                            </div>
                        </a>
                    </button>

                ))}
            </Container>
        </div>

    );
}

export default Universities;
