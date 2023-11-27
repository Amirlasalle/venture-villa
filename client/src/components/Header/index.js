import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Image, Container, Nav, Navbar, NavDropdown, Button, Modal, Tab, Tabs, Stack, Card, Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleUser, faBars, faLanguage, faGlobe } from '@fortawesome/free-solid-svg-icons';
import wheretoData from "../Jsons/whereto.json";
import terrainsData from "../Jsons/terrains.json";
import whattodoData from "../Jsons/whattodo.json";
import foryourtastebudsData from "../Jsons/foryourtastebuds.json";
// ,Col,   , faChevronCircleRight, faChevronLeft, faChevronRight, faPipe, faExternalLinkAlt, faArrowUpRightFromSquare 

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

  const [backgroundColor, setBackgroundColor] = useState('#f3f2f2');
  const resetColor = useRef(null);

  const changeBgColor = () => {
    setBackgroundColor('#f3f2f2');
  };

  const outSideSearchBar = (event) => {
    if (resetColor.current && !resetColor.current.contains(event.target)) {
      setBackgroundColor('#fff');
    }
  };
  useEffect(() => {
    document.addEventListener('click', outSideSearchBar);

    return () => {
      document.removeEventListener('click', outSideSearchBar);
    };
  }, []);

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const [whereto] = useState(wheretoData)
  console.log(whereto)
  const [terrains] = useState(terrainsData)
  console.log(terrains)
  const [whattodo] = useState(whattodoData)
  console.log(whattodo)
  const [foryourtastebuds] = useState(foryourtastebudsData)
  console.log(foryourtastebuds)

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

          {values.map((v, idx) => (
            <Button key={idx} variant='flat' size="md" className="venture-search-container-btn"
              onClick={() => handleShow(v)}>
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
                  </div>
                </Button>
              </div>
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
          ))}
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>

            <Modal.Body className='search-modal-body justify-center'>
              <Modal.Header closeButton
                className='close-button fixed-top'>
              </Modal.Header>
              <Tabs
                defaultActiveKey="stays"
                transition={false}
                id="model-tabs"
                variant='tabs'
                className="model-tabs fixed-top justify-center"
              >
                <Tab eventKey="stays" title="Stays" className="modal-tab justify-center">

                  <div className='modal-tab-content'>
                    <div className='mt-4 justify-center'>

                      <h4 className='pl-3 mx-3 pb-2 text-left text-black'>
                        Where to?
                      </h4>
                      <Stack direction="horizontal">
                        {/* <Form.Control className="mx-3 p-3" placeholder=" Venture Search..." /> */}
                        <Button variant='light' className='btn10 btn-block10 mx-3 p-3 text-left' onClick={toggleShowA}>
                          <span className='mx-1'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size='md' style={{ fontWeight: 'bolder' }} />
                          </span>
                          <span className='btn-block-text'>
                            Venture Search
                          </span>
                        </Button>

                      </Stack>
                    </div>
                    <div className='mt-4 where-to-content ml-2'>
                      <div className='where-to-cards-container'>
                        {whereto.map((butwhereto, key) =>

                          <Card key={key} className=" mx-1 where-to-cards" style={{ width: '10rem' }}>
                            <Link to={butwhereto.more} className="btn1" >
                              <Image src={process.env.PUBLIC_URL + butwhereto.screenshotone} className="img-fluid d-flex flex-wrap justify-content-around where-to-image" />
                            </Link>
                            <Card.Body className='w-100 mt-1 ml-0 mr-0'>
                              <Card.Subtitle className="mb-2 mr-1 where-to-text">
                                {butwhereto.name}
                              </Card.Subtitle>
                              <style type="text/css">
                              </style>
                            </Card.Body>

                          </Card>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='modal-tab-content-two mb-1'>
                    <div className='mt-1 justify-center'>

                      <h6 className='pl-3 mx-3 mb-0 text-left text-black'>
                        What's your vibe?
                      </h6>
                    </div>
                    <div className=' where-to-content-two ml-2'>
                      <div className='where-to-cards-container-two'>
                        {terrains.map((terrain, key) =>

                          <Card key={key} className=" mx-1 where-to-cards-two" style={{ width: '3.5rem' }}>
                            <Link to={terrain.more} className="btn1 where-to-image-two" >
                              <Image src={process.env.PUBLIC_URL + terrain.screenshotone} className="img-fluid d-flex flex-wrap justify-content-around where-to-image-two" />
                            </Link>
                            <Card.Body className='w-100 mt-1 ml-0 mr-0'>
                              <Card.Subtitle className="mb-2 where-to-text-two">
                                {terrain.name}
                              </Card.Subtitle>
                              <style type="text/css">
                              </style>
                            </Card.Body>

                          </Card>
                        )}
                      </div>
                    </div>
                  </div>
                </Tab>


                <Tab eventKey="explorations" title="Explorations" className="modal-tab">

                  <div className='modal-tab-content'>
                    <div className='mt-4 justify-center'>

                      <h4 className='pl-3 mx-3 pb-2 text-left text-black'>
                        What to do?
                      </h4>
                      <Stack direction="horizontal">
                        {/* <Form.Control className="mx-3 p-3" placeholder=" Venture Search..." /> */}
                        <Button variant='light' className='btn10 btn-block10 mx-3 p-3 text-left' onClick={toggleShowA}>
                          <span className='mx-1'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size='md' style={{ fontWeight: 'bolder' }} />
                          </span>
                          <span className='btn-block-text'>
                            Venture Search
                          </span>
                        </Button>
                      </Stack>
                    </div>
                    <div className='mt-4 where-to-content ml-2'>
                      <div className='where-to-cards-container'>
                        {whattodo.map((butwhattodo, key) =>

                          <Card key={key} className=" mx-1 where-to-cards" style={{ width: '10rem' }}>
                            <Link to={butwhattodo.more} target="_blank" rel="noreferrer" className="btn1" >
                              <Image src={process.env.PUBLIC_URL + butwhattodo.screenshotone} className="img-fluid d-flex flex-wrap where-to-image" />
                            </Link>
                            <Card.Body className='w-100 mt-1 ml-0 mr-0'>
                              <Card.Subtitle className="mb-2 mr-1 where-to-text">
                                {butwhattodo.name}
                              </Card.Subtitle>
                              <style type="text/css">
                              </style>
                            </Card.Body>

                          </Card>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='modal-tab-content-3 mb-1'>
                    <div className='mt-1 justify-center'>

                      <h6 className='pl-3 mx-3 mb-0 text-left text-black'>
                        For your taste buds
                      </h6>
                    </div>
                    <div className=' where-to-content-3 ml-2'>
                      <div className='where-to-cards-container-3'>
                        {foryourtastebuds.map((food, key) =>

                          <Card key={key} className=" mx-1 where-to-cards-3" style={{ width: '3.5rem' }}>
                            <Link to={food.more} className="btn1 where-to-image-3" >
                              <Image src={process.env.PUBLIC_URL + food.screenshotone} className="img-fluid d-flex flex-wrap justify-content-around where-to-image-3" />
                            </Link>
                            <Card.Body className='w-100 mt-1 ml-0 mr-0'>
                              <Card.Subtitle className="mb-2 where-to-text-3">
                                {food.name}
                              </Card.Subtitle>
                              <style type="text/css">
                              </style>
                            </Card.Body>

                          </Card>
                        )}
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </Modal.Body>

            <div className='w-100  bg-white'>
              <Toast show={showA} onClose={toggleShowA}
                style={{ height: '540px', width: '100%' }} className=''>
                <Toast.Header className='mt-4'>
                </Toast.Header>
                <Toast.Body>
                  <Stack direction="horizontal">
                     
                        <div ref={resetColor} variant='light' style={{ backgroundColor }} className='form-div p-3 text-left'  onClick={changeBgColor}>
                          <span className='mx-1 '>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' className='faMagGlass' />
                          </span>
                       
                          <input className="form-input search-btn-form" placeholder=" Venture Search..." />
                   
                        </div>
                      </Stack>

                </Toast.Body>
              </Toast>
              <Modal.Footer className='p-5 modal-footers bg-colombia'>
              </Modal.Footer>
            </div>
          </Modal>



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
                      <Link to="/wishlists" onClick={() => handleNavLinkClick('/wishlists')}>
                        <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-bold'>Wishlists</p>
                      </Link>
                    </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item className='p-0'>
                    <Nav.Link>
                      <Link to="/bnb" onClick={() => handleNavLinkClick('/bnb')}>
                        <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Find a Bed & Breakfast</p>
                      </Link>
                    </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='p-0'>
                    <Nav.Link>
                      <Link to="/restaurants" onClick={() => handleNavLinkClick('/restaurants')}>
                        <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Restaurants</p>
                      </Link>
                    </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='p-0'>
                    <Nav.Link>
                      <Link to="/futbol" onClick={() => handleNavLinkClick('/futbol')}>
                        <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Watch a Fútbol Game</p>
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
                      <Link to="/restaurants" onClick={() => handleNavLinkClick('/restaurants')}>
                        <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Restaurants</p>
                      </Link>
                    </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='p-0'>
                    <Nav.Link>
                      <Link to="/bnb" onClick={() => handleNavLinkClick('/bnb')}>
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
      </Navbar>



    </div>
  );
};


export default Header;
