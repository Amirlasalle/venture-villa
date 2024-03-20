import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Image, Container, Nav, Navbar, NavDropdown, Button, Modal, Tab, Tabs, Stack, Card, Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleUser, faBars, faLanguage, faGlobe, faArrowLeft, faSpinner, faDirections, faPhone } from '@fortawesome/free-solid-svg-icons';
import terrainsData from '../Jsons/terrains.json';
import whattodoData from '../Jsons/whattodo.json';
import wheretoData from '../Jsons/whereto.json';
import foryourtastebudsData from "../Jsons/foryourtastebuds.json";
import { getAttractionsData } from '../ApiAttractions/index';
import { getPlacesData } from '../api/index';
import Map from '../Map/MapTwo'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


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


  useEffect(() => {
    document.addEventListener('click', outSideSearchBar);

    return () => {
      document.removeEventListener('click', outSideSearchBar);
    };
  }, []);

  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const [showB, setShowB] = useState(false);
  const toggleShowB = () => setShowB(!showB);

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const [showLanguages, setShowLanguages] = useState(false);

  const handleShowLanguages = () => setShowLanguages(true);
  const handleCloseLanguages = () => setShowLanguages(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleClose = () => setShow(false);

  const ToastCloseButton = ({ onClick }) => (
    <div variant="link" className="close-btn" onClick={onClick}>
      <FontAwesomeIcon icon={faArrowLeft} size='lg' />
    </div>
  );

  const [whereto] = useState(wheretoData)
  const [terrains] = useState(terrainsData)
  const [whattodo] = useState(whattodoData)
  const [foryourtastebuds] = useState(foryourtastebudsData)





  const closeToast = () => {
    setShowA(false);
    setShowB(false);
  };


  const [address, setAddress] = useState('');
  const handleSelect = async (selectedAddress, ...dataTypes) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      setCoordinates(latLng);
      setAddress(selectedAddress);

      const selectedBounds = {
        sw: { lat: latLng.lat - 0.1, lng: latLng.lng - 0.1 },
        ne: { lat: latLng.lat + 0.1, lng: latLng.lng + 0.1 }
      };

      setLoading(true);

      for (const dataType of dataTypes) {
        if (dataType === 'attractions') {
          getAttractionsData(selectedBounds.sw, selectedBounds.ne)
            .then((data) => {
              setPlaces(data);
            })
            .finally(() => {
              setLoading(false);
            });
        } else if (dataType === 'restaurants') {
          getPlacesData(selectedBounds.sw, selectedBounds.ne)
            .then((data) => {
              setRestaurants(data);
            })
            .finally(() => {
              setLoading(false);
            });
        }
      }
    } catch (error) {
      console.error('Error selecting place:', error);
    }
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


  const [bounds, setBounds] = useState({});
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    })
  }, [])

  const [backgroundColor, setBackgroundColor] = useState('#f3f2f2');
  const resetColor = useRef(null);

  const changeBgColor = () => {
    setBackgroundColor('#f3f2f2');
  };


  const [places, setPlaces] = useState([]);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
      setBounds({ sw: { lat: latitude - 0.1, lng: longitude - 0.1 }, ne: { lat: latitude + 0.1, lng: longitude + 0.1 } });
    })
  }, [])


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (bounds) {
      setLoading(true);

      getAttractionsData(bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data);
          setLoading(false);
        });
    }
  }, [bounds]);


  const [restaurants, setRestaurants] = useState([]);
  const [loadingRestaurants, setLoadingRestaurants] = useState(true);

  useEffect(() => {
    if (bounds) {
      setLoading(true);

      getPlacesData(bounds.sw, bounds.ne)
        .then((data) => {
          setRestaurants(data);
          setLoadingRestaurants(false);
        });
    }
  }, [bounds]);

  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };


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
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='venture-mag venture-mag-bold' style={{ fontWeight: 'bolder' }} />
                  </div>
                </Button>
              </div>
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
          ))}
          <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>

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
                onSelect={closeToast}
              >
                <Tab eventKey="stays" title="Stays" className="modal-tab justify-center" >

                  <div className='modal-tab-content'>
                    <div className='mt-4 justify-center'>

                      <h4 className='pl-3 mx-3 pb-2 text-left text-black'>
                        Where to?
                      </h4>
                      <Stack direction="horizontal">
                        <Button variant='light' className='btn10 btn-block10 mx-3 p-3 text-left' onClick={toggleShowA}>
                          <span className='mx-1'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontWeight: 'bolder' }} />
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
                            <Link to={butwhereto.more} onClick={(handleClose)} className="btn1" >
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
                            <Link to={terrain.more} onClick={(handleClose)} className="btn1 where-to-image-two" >
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


                <Tab eventKey="explorations" title="Explorations" className="modal-tab" >

                  <div className='modal-tab-content'>
                    <div className='mt-4 justify-center'>

                      <h4 className='pl-3 mx-3 pb-2 text-left text-black'>
                        What to do?
                      </h4>
                      <Stack direction="horizontal">
                        <Button variant='light' className='btn10 btn-block10 mx-3 p-3 text-left' onClick={toggleShowB}>
                          <span className='mx-1'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontWeight: 'bolder' }} />
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
                            <Link to={butwhattodo.more} onClick={(handleClose)} className="btn1" >
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
                    <div className=' where-to-content-3 ml-1 pl-3'>
                      <div className='where-to-cards-container-3'>
                        {foryourtastebuds.map((food, key) =>

                          <Card key={key} className=" mx-1 where-to-cards-3" style={{ width: '3.5rem' }}>
                            <Link to={food.more} onClick={(handleClose)} className="btn1 where-to-image-3" >
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
                style={{ width: '100%' }} className='toast'>
                <Toast.Header closeButton={false} closeVariant='primary' className='fixed-top'>
                  <ToastCloseButton onClick={toggleShowA} className='btn-close' />
                </Toast.Header>
                <Toast.Body className='w-100'>
                  <div className="w-100 display-flex justify-center align-center">
                    <PlacesAutocomplete
                      value={address}
                      onChange={(value) => setAddress(value)}
                      onSelect={handleSelect}
                      searchOptions={{
                        key: 'AIzaSyDzy3wz5yxKZv9CaxbAHUstxBLvan78zsY',
                        types: ['geocode'],
                        componentRestrictions: { country: 'co' },
                      }}>
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div className="w-100 mb-5 mt-3 justify-center">
                          <div className="w-100 display-flex justify-center align-center">
                            <div
                              ref={resetColor}
                              variant='light'
                              style={{ backgroundColor }}
                              className='form-div  mx-3 p-3 text-left '
                              onClick={changeBgColor}>
                              <span className="mx-1 ">
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="faMagGlass text-left" />
                              </span>
                              <input {...getInputProps({
                                placeholder: 'Venture City Search...',
                                className: 'w-100 form-input search-btn-form',
                              })}
                              />
                            </div>
                          </div>
                          <div className="mt-3">
                            {loading &&
                              <div>
                                <p className='pl-0 text-center'>
                                  Loading...
                                </p>
                              </div>}
                            {suggestions.map(suggestion => (
                              <div key={suggestion.placeId} {...getSuggestionItemProps(suggestion, {})}
                                className="w-100 search-data-item p-2" >
                                <div className="search-data-icon-div">
                                  <Image src={process.env.PUBLIC_URL + "/assets/cities/placeholder.png"} alt={suggestion.description} className="search-data-icon" />
                                </div>
                                <div className="search-data-text">
                                  {suggestion.description}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </div>


                  {coordinates && (
                    <div>
                      <p>
                        {coordinates.lat}, {coordinates.lng}
                      </p>
                    </div>
                  )}

                  <div className="w-100 display-flex justify-center align-center">

                    <Map
                      setCoordinates={setCoordinates}
                      setBounds={setBounds}
                      coordinates={coordinates}
                    />

                  </div>
                </Toast.Body>
              </Toast>
            </div>


            <div className='w-100  bg-white'>
              <Toast show={showB} onClose={toggleShowB}
                style={{ width: '100%' }} className='toast'>
                <Toast.Header closeButton={false} closeVariant='primary' className='fixed-top'>
                  <ToastCloseButton onClick={toggleShowB} className='btn-close' />
                </Toast.Header>
                <Toast.Body>
                  <div className="w-100 display-flex justify-center align-center">
                    <PlacesAutocomplete
                      onLoad={onLoad}
                      onPlaceChanged={onPlaceChanged}
                      value={address}
                      onChange={(value) => setAddress(value)}
                      onSelect={(selectedAddress) => handleSelect(selectedAddress, 'attractions', 'restaurants')}
                      searchOptions={{
                        key: 'AIzaSyDzy3wz5yxKZv9CaxbAHUstxBLvan78zsY',
                        types: ['geocode'],
                        componentRestrictions: { country: 'co' },
                      }}>
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div className="w-100 mb-5 mt-3 justify-center">
                          <div className="w-100 display-flex justify-center align-center">
                            <div
                              ref={resetColor}
                              variant='light'
                              style={{ backgroundColor }}
                              className='form-div  mx-3 p-3 text-left '
                              onClick={changeBgColor}>
                              <span className="mx-1 ">
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="faMagGlass text-left" />
                              </span>
                              <input {...getInputProps({
                                placeholder: 'Venture City Search...',
                                className: 'w-100 form-input search-btn-form',
                              })}
                              />
                            </div>
                          </div>
                          <div className="mt-3">
                            {loading &&
                              <div className="w-100 display-flex justify-center align-center">
                                <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#0011ff", }} size='2xl' />
                              </div>
                            }
                            {suggestions.map(suggestion => (
                              <div key={suggestion.placeId} {...getSuggestionItemProps(suggestion, {})}
                                className="w-100 search-data-item p-2" >
                                <div className="search-data-icon-div">
                                  <Image src={process.env.PUBLIC_URL + "/assets/cities/placeholder.png"} alt={suggestion.description} className="search-data-icon" />
                                </div>
                                <div className="search-data-text">
                                  {suggestion.description}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </div>
                </Toast.Body>
                <Tabs
                  defaultActiveKey="attractions"
                  transition={false}
                  id="model-tabs"
                  variant='tabs'
                  className="model-tabs fixed-top justify-center">
                  <Tab eventKey="attractions" title="Attractions" className="modal-tab mb-0 mt-0 justify-center" >



                    <div className='modal-tab-content mt-0'>
                      <div className='display-flex mt-0 justify-center align-center'>
                        {loading &&
                          <div className="w-100 display-flex justify-center align-center mb-5 mt-0 where-to-content">
                            <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#0011ff", }} size='2xl' className='mt-5' />
                          </div>
                        }
                      </div>
                      {!loading && (
                        <div className='mt-4 where-to-content ml-2'>
                          <div className='attractions-cards-container'>
                            {places &&
                              places.map((place, key) => (
                                (place.phone || place.address || place.website) && (

                                  <Card key={key} className=" mx-1 where-to-cards" style={{ width: '10rem' }}>
                                    <Image
                                      src={place.photo ? place.photo.images.large.url : "/assets/activities/extracurricular-activities.png"}
                                      alt={place.name}
                                      className="img-fluid d-flex flex-wrap where-to-image" />
                                    <Card.Body className='w-100 mt-1 ml-0 mr-0'>
                                      <Card.Subtitle className="mb-2 mr-1 where-to-text">
                                        {place.name}
                                      </Card.Subtitle>
                                      <Card.Subtitle
                                        className="mb-3 card-price">
                                        {place.price_level}
                                      </Card.Subtitle>
                                      {place.phone && (
                                        <a href={`tel:${place.phone}`}
                                          target="_blank" rel="noreferrer"
                                          className="hover-decoration">
                                          <Card.Subtitle
                                            className="mb-3 text-default-2 where-to-links-text">
                                            <FontAwesomeIcon icon={faPhone} /> {''}
                                            {place.phone}
                                          </Card.Subtitle>
                                        </a>
                                      )}
                                      {place.address && (
                                        <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.address)}`}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="hover-decoration" >
                                          <Card.Subtitle className="mb-3 text-default-2 where-to-links-text">
                                            <FontAwesomeIcon icon={faDirections} /> {''}
                                            Directions
                                          </Card.Subtitle>
                                        </a>
                                      )}
                                      {place.website && (
                                        <a href={place.website}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="hover-decoration">
                                          <Card.Subtitle className="mb-3 text-default-2 where-to-links-text">
                                            <FontAwesomeIcon icon={faGlobe} /> {''} website
                                          </Card.Subtitle>
                                        </a>
                                      )}
                                    </Card.Body>
                                  </Card>
                                )
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Tab>

                  <Tab eventKey="restaurants" title="Restaurants" className="modal-tab mb-0 mt-0 justify-center" >

                    <div className='modal-tab-content mt-0'>


                      <div className='display-flex mt-0 justify-center align-center'>
                        {loadingRestaurants &&
                          <div className="w-100 display-flex justify-center align-center mb-5 mt-0 where-to-content">
                            <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#0011ff", }} size='2xl' className='mt-5' />
                          </div>
                        }
                      </div>
                      {!loadingRestaurants && (
                        <div className='mt-4 where-to-content ml-2'>
                          <div className='attractions-cards-container'>
                            {restaurants &&
                              restaurants.map((restaurant, key) => (
                                (restaurant.phone || restaurant.address || restaurant.website) && (

                                  <Card key={key} className=" mx-1 where-to-cards" style={{ width: '10rem' }}>
                                    <Image
                                      src={restaurant.photo ? restaurant.photo.images.large.url : "/assets/food/food.png"}
                                      alt={restaurant.name}
                                      className="img-fluid d-flex flex-wrap where-to-image" />
                                    <Card.Body className='w-100 mt-1 ml-0 mr-0'>
                                      <Card.Subtitle className="mb-2 mr-1 where-to-text">
                                        {restaurant.name}
                                      </Card.Subtitle>
                                      {restaurant.phone && (
                                        <a href={`tel:${restaurant.phone}`}
                                          target="_blank" rel="noreferrer"
                                          className="hover-decoration">
                                          <Card.Subtitle
                                            className="mb-3 text-default-2 where-to-links-text">
                                            <FontAwesomeIcon icon={faPhone} /> {''}
                                            {restaurant.phone}
                                          </Card.Subtitle>
                                        </a>
                                      )}
                                      {restaurant.address && (
                                        <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(restaurant.address)}`}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="hover-decoration" >
                                          <Card.Subtitle className="mb-3 text-default-2 where-to-links-text">
                                            <FontAwesomeIcon icon={faDirections} /> {''}
                                            Directions
                                          </Card.Subtitle>
                                        </a>
                                      )}
                                      {restaurant.website && (
                                        <a href={restaurant.website}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="hover-decoration">
                                          <Card.Subtitle className="mb-3 text-default-2 where-to-links-text">
                                            <FontAwesomeIcon icon={faGlobe} /> {''} website
                                          </Card.Subtitle>
                                        </a>
                                      )}
                                    </Card.Body>
                                  </Card>
                                )
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Tab>
                </Tabs>
              </Toast>

            </div>


            <Modal.Footer className='p-5 modal-footers bg-colombia'>
            </Modal.Footer>
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


                <Button variant='flat' className='btn-invisible mr-3' onClick={handleShow}>
                  <div className='language-translate'>
                    <FontAwesomeIcon icon={faGlobe} className='language-translate-g language-icon' /> <FontAwesomeIcon icon={faLanguage} className=' language-translate-a language-icon' />
                  </div>
                </Button>




                <NavDropdown eventKey={3} title={<div style={{ display: "inline-block" }}>

                  <FontAwesomeIcon icon={faBars} className='' style={{ fontWeight: 'bolder' }} /><FontAwesomeIcon icon={faCircleUser} className='ml-2 ' size='2xl' style={{ fontWeight: 'bolder' }} />
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
                        <p className='pl-2 mb-0 mt-0 basic-nav-dropdown-text'>Language  <FontAwesomeIcon icon={faGlobe} /> <FontAwesomeIcon icon={faLanguage} /></p>
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

                <Button variant='flat' className='btn-invisible mr-3' onClick={handleShowLanguages}>
                  <div className='language-translate'>
                    <FontAwesomeIcon icon={faGlobe} className='language-translate-g language-icon' /> <FontAwesomeIcon icon={faLanguage} className=' language-translate-a .language-icon' />
                  </div>
                </Button>
                {/* <div className='ml-5 btn-invisible modal-div'> */}
                  <Modal show={showLanguages} animation={false} size="lg" dialogClassName="my-modal custom-modal">
                    <Modal.Header closeButton onClick={handleCloseLanguages}
                      className='close-button fixed-top'>
                    </Modal.Header>
                    <Modal.Body className='d-flex flex-wrap custom-modal' style={{ width: '80vw', height: '70vh' }} closeButton>
                      <h2 className="pr-5 mt-0 justify-content-center">
                        Choose a language and region
                      </h2>
                      <h2 className="text-center pb-4 section-divider-y w-100" >
                      </h2>
                      <h2 className="text-center section-divider-b w-100" >
                      </h2>
                      <h2 className="mb-0 text-center section-divider-r w-100" >
                      </h2>
                      <p className="mt-1 mb-auto pr-5 justify-content-center font-light text-small">
                        Currently, there are no available languages. Please check again later for updates.
                      </p>
                      <p className="mt-1 mb-auto pr-5 justify-content-center font-light text-small">
                        Currently, there are no available languages. Please check again later for updates.
                      </p>
                      <p className="mt-1 mb-auto pr-5 justify-content-center font-light text-small">
                        Currently, there are no available languages. Please check again later for updates.
                      </p>
                      <p className="mt-1 mb-auto pr-5 justify-content-center font-light text-small">
                        Currently, there are no available languages. Please check again later for updates.
                      </p>
                      <p className="mt-1 mb-auto pr-5 justify-content-center font-light text-small">
                        Currently, there are no available languages. Please check again later for updates.
                      </p>
                      <p className="mt-1 mb-auto pr-5 justify-content-center font-light text-small">
                        Currently, there are no available languages. Please check again later for updates.
                      </p>
                    </Modal.Body>
                  </Modal>
                {/* </div> */}

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



    </div >
  );
};


export default Header;
