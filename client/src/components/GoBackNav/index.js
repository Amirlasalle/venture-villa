import React from 'react';
import {  useNavigate, useLocation } from 'react-router-dom';
import { Container, Navbar, Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
//, { useState, useEffect, useRef Link, }

const GoBackNav = ({ handlePageChange }) => {
  
    const location = useLocation();
    const navigate = useNavigate();


  return (
    <div role='navigation' className='bg-body-tertiary'>
      <Navbar className="fixed-top go-back custom-link bg-body-" bg="" expand="sm">
        <Container fluid className='betterheader'>

        <div className="w-100  text-left text-white">
          {location.pathname !== '/' && (
            <Button
              className="btn-xsm  btn-white"
              onClick={() => navigate(-1)}
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
