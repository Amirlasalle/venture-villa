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
// // import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';
import universitiesData from "../components/Jsons/universities.json";
import { Image, Container, Col, Card, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Universities = () => {
  const [universities] = useState(universitiesData);

  return (
    <div className="home">
      <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around home">
        <Row className='mt-5'>
          <div id="homepageCards" className="d-flex flex-wrap justify-content-center uni-btn align-items-center">
            {universities.map((university, key) => (
                <a href={university.uniUrl} target="_blank" rel="noreferrer" className="uni-btn">
              <Card
                key={key}
                className="m-5 university-card" style={{ width: '30rem', height: '10rem' }}>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Col xs={2} md={2} className='uni-img'>
                      <Image src={process.env.PUBLIC_URL + university.logo} className="img-fluid uni-img" thumbnail />
                    </Col>
                    <div className="text-center">
                      <Card.Title>
                        <h6 className='pl-0 uni-name'>
                          {university.name}
                        </h6>
                      </Card.Title>
                      <Card.Text className="pl-0 uni-brief">
                        <p className='pl-0 uni-brief'>{university.brief}</p>
                      </Card.Text>
                    </div>
                    <Card.Subtitle className="mb-2 mr-1 uni-fcr"><span className='text-muted fcr'><FontAwesomeIcon icon={faChevronRight} size="lg" /></span></Card.Subtitle>
                  </Card.Body>
              </Card>
                </a>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Universities;
