import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Image, Container, Nav, Navbar, NavDropdown, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleUser, faBars, faLanguage, faGlobe } from '@fortawesome/free-solid-svg-icons';
// faChevronCircleRight, faChevronLeft, faChevronRight, faPipe,  faExternalLinkAlt, faArrowUpRightFromSquare,Col, Card,


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


  // const toggleNavbar = () => {
  //   setIsNavbarOpen(!isNavbarOpen);
  // };

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

  // const location = useLocation();
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
      <Navbar className="pb-0 fixed-top custom-link bg-body-tertiary" bg="white" expand="lg" ref={navbarRef} expanded={isNavbarOpen}>
        <Container fluid className='betterheader'>
          <Navbar.Brand className='navbarBrand'>
            <Nav.Link>
              <Link to="/" onClick={() => handleNavLinkClick('/')} className='custom-link'> <Image className='vv-logo' src={process.env.PUBLIC_URL + "/assets/venture-villa-logo.png"} fluid />
              </Link>

            </Nav.Link>
          </Navbar.Brand>

          <Button variant='flat' onClick={handleShow} size="md" className="venture-search-container-btn">
            <div className="venture-search-container">
              <Button size="md" className="venture-search ">
                <div className=' venture-text'> Venture Search </div>
              </Button>
              <span className='venture-btn-divider'></span>
              <Button size="md" className="venture-search-2 dis-none" >
                <div className=' venture-text'>Anywhere</div>
              </Button>
              <span className='venture-btn-divider'></span>
              <Button size="md" className="venture-search-3 dis-none" >
                <div className=' venture-text'>Any week</div>
              </Button>
              <Button size="md" className="venture-search-3 pr-0" >
                <div className='venture-mag-div'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='venture-mag venture-mag-bold' size='md' style={{ fontWeight: 'bolder' }} />
                </div></Button>



            </div>
          </Button>
          <div className='ml-0 modal-div'>
            <Modal show={show} onHide={handleClose} animation={false} size="lg" dialogClassName="my-modal custom-modal">
              <Modal.Header closeButton ></Modal.Header>
              <Modal.Body className='d-flex flex-wrap justify-content-around custom-modal' closeButton>

                <div className='custom-youtube-video'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/NjbRrRfyvW4?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreenclassName='my-modal custom-modal'></iframe>
                </div>
              </Modal.Body>
            </Modal>
          </div>



          <div className="basic-nav-dropdown-div">

            {Auth.loggedIn() ? (
              <>


                <Nav.Link>

                  <p className='pl-2 mb-0 mt-0 d-flex parcero-text parcero'>
                    <span>
                      <Image className='emerald-icon parcero' src={process.env.PUBLIC_URL + "/assets/thumbnails/hola-parcero.png"} fluid />
                    </span>
                    Hola parce<br></br>Que mas?
                  </p>

                </Nav.Link>

                <Nav.Link>
                  <div className=' mr-3 language-translate emerald-icon'>

                    <FontAwesomeIcon icon={faGlobe} className='language-translate-g emerald-icon' /> <FontAwesomeIcon icon={faLanguage} size='md' className=' language-translate-a emerald-icon' />

                  </div>
                </Nav.Link>

                {/* <NavDropdown title="Profile and more" id="basic-nav-dropdown">
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
                </NavDropdown> */}


                <NavDropdown eventKey={3} title={<div style={{ display: "inline-block" }}>

                  <FontAwesomeIcon icon={faBars} className='' size='md' style={{ fontWeight: 'bolder' }} /><FontAwesomeIcon icon={faCircleUser} className='ml-2 ' size='2xl' style={{ fontWeight: 'bolder' }} />
                </div>} className='navbar-static basic-nav-dropdown' autoClose="true">

                <NavDropdown.Item className='p-0'>
                  <Nav.Link>
                    <Link to="/" onClick={() => handleNavLinkClick('/')}>
                      <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-bold'>
                        Explore Colombia's gem
                        <span>
                          <Image className='emerald-icon' src={process.env.PUBLIC_URL + "/assets/thumbnails/pngwing.com.png"} fluid />
                        </span>
                      </p>
                    </Link>
                  </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />


                  <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text-signedin'>Signed in as: {Auth.getProfile().data.username}</p>

                  <NavDropdown.Item className='p-0'>
                  <Nav.Link>
                    <Link to="/me" onClick={() => handleNavLinkClick('/me')}>
                      <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-bold'>Venture trips bucklist</p>
                    </Link>
                  </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='p-0'>
                  <Nav.Link>
                    <Link to="/login" onClick={() => handleNavLinkClick('/login')}>
                      <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-bold'>Wishlists</p>
                    </Link>
                  </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item className='p-0'>
                  <Nav.Link>
                    <Link to="/" onClick={() => handleNavLinkClick('/')}>
                      <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Find a Bed & Breakfast</p>
                    </Link>
                  </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='p-0'>
                  <Nav.Link>
                    <Link to="/" onClick={() => handleNavLinkClick('/')}>
                      <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Restaurants</p>
                    </Link>
                  </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='p-0'>
                  <Nav.Link>
                    <Link to="/" onClick={() => handleNavLinkClick('/')}>
                      <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Watch a Soccer Game</p>
                    </Link>
                  </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item className='p-0'>
                  <Nav.Link>
                    <Link to="/" onClick={() => handleNavLinkClick('/')}>
                      <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Language  <FontAwesomeIcon icon={faGlobe} /> <FontAwesomeIcon icon={faLanguage} size='md' /></p>
                    </Link>
                  </Nav.Link>
                  </NavDropdown.Item>


                  <NavDropdown.Item className='p-0'>
                  <Nav.Link>
                    <Link to="/contact" onClick={() => handleNavLinkClick('/contact')}>
                      <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Help Center</p>
                    </Link>
                  </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='p-0'>
                  <Nav.Link>
                    <Link onClick={logout}>
                      <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Logout</p>
                    </Link>
                  </Nav.Link>
                  </NavDropdown.Item>

                </NavDropdown>
              </>
            ) : (
              <>

                {/* <Nav.Link>

                  <p className='pl-2 mb-0 mt-0 d-flex parcero-text parcero'>
                    <span>
                      <Image className='emerald-icon parcero' src={process.env.PUBLIC_URL + "/assets/thumbnails/hola-parcero.png"} fluid />
                    </span>
                    Hola parce<br></br>Que mas?
                  </p>

                </Nav.Link> */}

                <Nav.Link>
                  <div className=' mr-3 language-translate emerald-icon'>

                    <FontAwesomeIcon icon={faGlobe} className='language-translate-g emerald-icon' /> <FontAwesomeIcon icon={faLanguage} size='md' className=' language-translate-a emerald-icon' />

                  </div>
                </Nav.Link>

                <NavDropdown title={<div style={{ display: "inline-block" }}>
                  <FontAwesomeIcon icon={faBars} className='' size='xl' style={{ fontWeight: 'bolder' }} />
                  <FontAwesomeIcon icon={faCircleUser} className='ml-2 ' size='2xl' style={{ fontWeight: 'bolder' }} />
                </div>} className='navbar-static basic-nav-dropdown' autoClose="true">

                  <NavDropdown.Item className='p-0'>
                    <Nav.Link>
                      <Link to="/" onClick={() => handleNavLinkClick('/')}>
                        <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>
                          Explore Colombia's gem
                          <span>
                            <Image className='emerald-icon' src={process.env.PUBLIC_URL + "/assets/thumbnails/pngwing.com.png"} fluid />
                          </span>
                        </p>
                      </Link>
                    </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item className='p-0'>
                    <Nav.Link>
                      <Link to="/signup" onClick={() => handleNavLinkClick('/signup')}>
                        <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Sign up</p>
                      </Link>
                    </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='p-0'>
                    <Nav.Link>
                      <Link to="/login" onClick={() => handleNavLinkClick('/login')}>
                        <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Login</p>
                      </Link>
                    </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item className='p-0'>
                    <Nav.Link>
                      <Link to="/" onClick={() => handleNavLinkClick('/')}>
                        <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Restaurants</p>
                      </Link>
                    </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='p-0'>
                    <Nav.Link>
                      <Link to="/" onClick={() => handleNavLinkClick('/')}>
                        <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Find a Bed & Breakfast</p>
                      </Link>
                    </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='p-0'>
                    <Nav.Link>
                      <Link to="/contact" onClick={() => handleNavLinkClick('/contact')}>
                        <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Help Center</p>
                      </Link>
                    </Nav.Link>
                  </NavDropdown.Item>

                </NavDropdown>
              </>
            )}
            <br></br>








          </div>

        </Container>
        {/* {location.pathname !== '/' && (
        <div className="w-100 text-left go-back text-white">
                <Button
                  className="btn-xsm  btn-white mt-1 mb-1 ml-1"
                  onClick={() => navigate(-1)}
                >
                  <FontAwesomeIcon icon={faChevronCircleLeft} /> Go Back
                </Button>
            </div>
              )} */}
      </Navbar>



    </div>
  );
};


export default Header;
