import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../../index.css'
import { Image, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faSkype, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  const location = useLocation();
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
    <footer className="mt-auto bg-secondary">

      <div className='w-100 custom-links-footer'>
        <div className="w-100 mt-2 text-center text-white">
          {location.pathname !== '/' && (
            <button
              className="btn btn-dark mb-3"
              onClick={() => navigate(-1)}
            >
              &larr; Go Back
            </button>
          )}
        </div>
        <div className='p-0 pb-5'>
          <Link to="/" onClick={() => handleNavLinkClick('/')} className='custom-link'> <Image className='vv-white-logo' src={process.env.PUBLIC_URL + "/assets/venture-villa-white-logo.png"} fluid />
          </Link>
        </div>
        <div className="w-100 text-center text-white">

          <h4 className='pl-0'>
            {' '}
            <span
              className="social-media-icons p-1">
              <a href='https://www.instagram.com/ichigo23__/' target="_blank" rel="noreferrer" className="social-media-icons">
                <FontAwesomeIcon icon={faInstagram} size='xl' />
              </a>
            </span>
            {' '}
            <span
              className="social-media-icons p-1">
              <a href='https://www.linkedin.com/in/amirlasalle/' target="_blank" rel="noreferrer" className="social-media-icons">
                <FontAwesomeIcon icon={faLinkedin} size='xl' />
              </a>
            </span>
            {' '}
            <span
              className="social-media-icons p-1">
              <a href='https://github.com/Amirlasalle' target="_blank" rel="noreferrer" className="social-media-icons">
                <FontAwesomeIcon icon={faGithub} size='xl' />
              </a>
            </span>
            {' '}
            <span
              className="social-media-icons p-1">
              <a href='https://github.com/Amirlasalle' target="_blank" rel="noreferrer" className="social-media-icons">
                <FontAwesomeIcon icon={faSkype} size='xl' />
              </a>
            </span>
          </h4>
        </div>
        <Accordion flush className='mt-5 mb-5 ml-0 accordion-footer'>
          <div className='section-divide'>
            <h2 className="mt-2 mb-2 section-divider-accordion " >
            </h2>
          </div>
          <Accordion.Item eventKey="0" className='bg-secondary accordion-footer'>
            <Accordion.Header className='pl-0 accordion-footer'>
              <h6 className='pl-0 pt-2 bg-secondary accordion-footer text-bold'>
                ABOUT US
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <div className='section-divide'>
            <h2 className="mt-2 mb-2 section-divider-accordion " >
            </h2>
          </div>
          <Accordion.Item eventKey="1" className='bg-secondary accordion-footer'>
            <Accordion.Header className='pl-0 accordion-footer'>
              <h6 className='pl-0 pt-2 bg-secondary accordion-footer text-bold'>
                SUPPORT
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <div className='section-divide'>
            <h2 className="mt-2 mb-2 section-divider-accordion " >
            </h2>
          </div>
          <Accordion.Item eventKey="2" className='bg-secondary accordion-footer'>
            <Accordion.Header className='pl-0 accordion-footer'>
              <h6 className='pl-0 pt-2 bg-secondary accordion-footer text-bold'>
                CONTACT US
              </h6>
            </Accordion.Header>
            <Accordion.Body>
            <Link to="/contact" onClick={() => handleNavLinkClick('/contact')} className='footer-text'><p className='pl-0 mb-0 pb-1 footer-text'>Contact Support</p></Link>
            <Link to="/" onClick={() => handleNavLinkClick('/')} className='footer-text'><p className='pl-0 mb-0 pb-1 footer-text'>Bed & Breakfasts</p></Link>
            <a href="tel:+1(631)925-8216" >
                  <p className='pl-0 mb-0 pb-1 footer-text'>Call Us <FontAwesomeIcon icon={faPhone}  />
                  </p>
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <div className='section-divide'>
            <h2 className="mt-2 mb-2 section-divider-accordion " >
            </h2>
          </div>
          <Accordion.Item eventKey="3" className='bg-secondary accordion-footer'>
            <Accordion.Header className='pl-0 accordion-footer'>
              <h6 className='pl-0 pt-2 bg-secondary accordion-footer text-bold'>
                QUICK LINKS
              </h6>
            </Accordion.Header>
            <Accordion.Body>
            <Link to="/" onClick={() => handleNavLinkClick('/')} className='footer-text'><p className='pl-0 mb-0 pb-1 footer-text'>Discover Colombia</p></Link>
            <Link to="/universities" onClick={() => handleNavLinkClick('/')} className='footer-text'><p className='pl-0 mb-0 pb-1 footer-text'>Universities</p></Link>
            <Link to="/culture" onClick={() => handleNavLinkClick('/culture')} className='footer-text'><p className='pl-0 mb-0 pb-1 footer-text'>Columbian Culture</p></Link>
            <Link to="/" onClick={() => handleNavLinkClick('/')} className='footer-text'><p className='pl-0 mb-0 pb-1 footer-text'>Delicious Cuisine</p></Link>
            <Link to="/" onClick={() => handleNavLinkClick('/')} className='footer-text'><p className='pl-0 mb-0 pb-1 footer-text'>Wondrous Landscapes</p></Link>   
            <Link to="/" onClick={() => handleNavLinkClick('/')} className='footer-text'><p className='pl-0 mb-0 pb-1 footer-text'>Bed & Breakfasts</p></Link>
            </Accordion.Body>
          </Accordion.Item>
          <div className='section-divide'>
            <h2 className="mt-2 mb-2 section-divider-accordion " >
            </h2>
          </div>
        </Accordion>
      </div>
      {/* <Container className='footer-nav '>

          <div className='footer-nav'>


            <Nav.Link>
              <Link to="/">
                <h4 className='pl-0'>
                  Home
                </h4>
              </Link>
            </Nav.Link>
            <NavDropdown title="Profile and more" id="">
              <h4>
                home
              </h4>
              <NavDropdown.Item href="#action/3.1">
                <Link to="/">
                  Bookings
                </Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">
                <Link to="/">
                  Ventures
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Account settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Get help
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link >  <Link>
              Logout
            </Link></Nav.Link>

            <Nav.Link><Link to="/">
              Home
            </Link></Nav.Link>

            <Nav.Link >  <Link to="/login" onClick={() => handleNavLinkClick('/login')} >
              Login
            </Link></Nav.Link>

            <Nav.Link ><Link to="/signup" onClick={() => handleNavLinkClick('/signup')} >
              Signup
            </Link></Nav.Link>

          </div>

        </Container>
      </Navbar> */}
      <div className="w-100 text-center text-white">

        <h4 className='pl-0'>
          Your Next Venture Awaits!{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>
          {' '}
          <span
            className="emoji"
            role="img"
            aria-label="plane"
            aria-hidden="false"
          >
            ✈️
          </span>
        </h4>
      </div>
      <div className="mt-0 mb-0 banner ">
        <Image src={process.env.PUBLIC_URL + "/assets/short/colombia_flag.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around banner-image banner" />
        <h1 className='mt-0 mb-auto d-flex flex-column justify-content-center banner-text banner text-center'>Venture Villa</h1>
      </div>
    </footer>
  );
};

export default Footer;
