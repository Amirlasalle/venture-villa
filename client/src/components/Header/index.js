import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';


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
          {/* <Navbar.Brand>
          <Image className='vv-logo' src={process.env.PUBLIC_URL + "/assets/venture-villa-logo.png"} fluid /></Navbar.Brand> */}
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

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default Header;
