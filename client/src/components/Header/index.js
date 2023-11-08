import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import Stack from 'react-bootstrap/Stack';
import { Image, Container, Nav, Navbar, NavDropdown, Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// faChevronCircleRight, faChevronCircleLeft, faChevronLeft, faChevronRight, faPipe,  faExternalLinkAlt, faArrowUpRightFromSquare,Col, Card,


const Header = ({ handlePageChange }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarRef = useRef(null);

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        closeNavbar();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <div role='navigation' className='bg-body-tertiary mar'>
      <Navbar className="fixed-top custom-links bg-body-tertiary" bg="white" expand="lg" ref={navbarRef} expanded={isNavbarOpen}>
        <Container fluid className='betterheader'>
          <Navbar.Brand className='navbarBrand'>
            <Nav.Link>
              <Link to="/" onClick={() => handleNavLinkClick('/')} className='custom-link'> <Image className='vv-logo' src={process.env.PUBLIC_URL + "/assets/venture-villa-logo.png"} fluid />
              </Link>

            </Nav.Link>
          </Navbar.Brand>

          <div className="venture-search-container">
            <Button onClick={handleShow} size="md" className="venture-search ">
              <div className=' venture-text'> Venture Search </div>
            </Button>
            <span className='venture-btn-divider'></span>
            <Button onClick={handleShow} size="md" className="venture-search-2 " >
              <div className=' venture-text'>Anywhere</div>
            </Button>
            <span className='venture-btn-divider'></span>
            <Button onClick={handleShow} size="md" className="venture-search-3 " >
              <div className=' venture-text'>Any week</div>
            </Button>
            <div className='venture-mag-div'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='venture-mag venture-mag-bold' size='md' style={{ fontWeight: 'bolder' }} />
            </div>


            <div className='ml-5 modal-div'>
              <Modal show={show} onHide={handleClose} animation={false} size="lg" dialogClassName="my-modal custom-modal">
                <Modal.Header closeButton style={{ display: 'none' }}></Modal.Header>
                <Modal.Body className='d-flex flex-wrap justify-content-around custom-modal' closeButton>

                  <div className='custom-youtube-video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NjbRrRfyvW4?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreenclassName='my-modal custom-modal'></iframe>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          {/* </Stack> */}

          <Navbar.Toggle aria-controls="navbarScroll" className='toggle' onClick={toggleNavbar} />
          <Navbar.Collapse id="navbarScroll" className={`navbar-scroll ${isNavbarOpen ? 'show' : ''}`}>
            <Nav
              className=" my-2 my-lg-0 navNav">

              {Auth.loggedIn() ? (
                <>
                  <Nav.Link><Link to="/">
                    Home
                  </Link></Nav.Link>
                  <NavDropdown title="Profile and more" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">    <Link to="/me">
                      {Auth.getProfile().data.username}'s Bookings
                    </Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1">    <Link to="/me">
                      {Auth.getProfile().data.username}'s Ventures
                    </Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Account settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Get help
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link >  <Link onClick={logout}>
                    Logout
                  </Link></Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link><Link to="/">
                    Home
                  </Link></Nav.Link>

                  <Nav.Link >  <Link to="/login">
                    Login
                  </Link></Nav.Link>

                  <Nav.Link ><Link to="/signup">
                    Signup
                  </Link></Nav.Link>

                </>
              )}

              <Stack direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder=" Venture Search..." />
                <Button variant="secondary">Search</Button>
              </Stack>
                 {/* <div className="venture-search-container">
            <Button onClick={handleShow} size="md" className="venture-search ">
              <div className=' venture-text'> Venture Search </div>
            </Button>
            <span className='venture-btn-divider'></span>
            <Button onClick={handleShow} size="md" className="venture-search-2 " >
              <div className=' venture-text'>Anywhere</div>
            </Button>
            <span className='venture-btn-divider'></span>
            <Button onClick={handleShow} size="md" className="venture-search-3 " >
              <div className=' venture-text'>Any week</div>
            </Button>
            <div className='venture-mag-div'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='venture-mag venture-mag-bold' size='md' style={{ fontWeight: 'bolder' }} />
            </div>
            </div> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default Header;
