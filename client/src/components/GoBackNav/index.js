import React from 'react';
import {  useNavigate, useLocation } from 'react-router-dom';
import { Container, Navbar, Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
//, { useState, useEffect, useRef Link, }

const GoBackNav = ({ handlePageChange }) => {
  
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1);
      window.scrollTo(0, 0); 
    };
  
  

  return (
    <div role='navigation' className='bg-body-tertiary'>
      <Navbar className="fixed-top go-back custom-link " bg="" expand="sm">
        <Container fluid className=''>

        <div className="text-left text-white">
          {location.pathname !== '/' && (
            <Button
              className="btn-xsm  btn-white"
              onClick={handleGoBack}
            >
              <FontAwesomeIcon icon={faChevronCircleLeft} /> Go Back
            </Button>
          )}
        </div>
</Container>

      </Navbar>
    </div>
  );
};


export default GoBackNav;
