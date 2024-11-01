import React, { useState, useEffect, useRef } from 'react';
import
PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { getAttractionsData } from '../components/ApiAttractions/index';
import Map from '../components/Map/Map'
import {
    Row,
    Image,
    Button,
    Modal,
    Card
} from 'react-bootstrap';
import '../App.css'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faStar,
    faGlobe,
    faDirections,
    faPhone,
    faMap,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';



function Restaurants() {

    const [address, setAddress] = useState('');

    const handleSelect = async (selectedAddress) => {
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
            getAttractionsData(selectedBounds.sw, selectedBounds.ne)
                .then((data) => {
                    setPlaces(data);
                })
                .finally(() => {
                    setLoading(false);
                });
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


    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

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

    const [autocomplete, setAutocomplete] = useState(null);
    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
    };

    return (
        <div className="home">
            <div className='w-100 '>
                <Row className=''>
                    <h2 className="text-center pb-4 section-divider-y w-100" >
                    </h2>
                    <h2 className="text-center section-divider-b w-100" >
                    </h2>
                    <h2 className="mb-0 text-center section-divider-r w-100" >
                    </h2>
                </Row>
            </div>

            <div className='w-100'>
                <Row className=''>
                    <h2 className="mt-3 pr-5 justify-content-center">
                        Explore Colombia's Wonders
                    </h2>
                </Row>
            </div>

            <div className=''>
                <Row className='mt-3'>
                    <h4 className="pr-5 justify-content-center">
                        Embark on Captivating Adventures and Discover Unique Attractions
                    </h4>
                    <p className="mt-1 mb-auto pr-5 justify-content-center font-light text-small">
                        From breathtaking landscapes to cultural marvels, our curated guide invites you to explore the diverse wonders of Colombia. Immerse yourself in the rich tapestry of attractions that promise an unforgettable journey.
                    </p>
                </Row>
            </div>


            <div className="w-100 display-flex justify-center align-center">
                <PlacesAutocomplete
                    onLoad={onLoad}
                    onPlaceChanged={onPlaceChanged}
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

            <div className="fixed-top bg-body-tertiary map-btn-div">
                <Button
                    variant="info"
                    onClick={handleShow}
                    className="map-btn"
                ><div className='map-btn-text'><span className='mx-1 map-btn-text'>Map</span><span className='mx-1'><FontAwesomeIcon icon={faMap} /></span></div>
                </Button>
                <div className='ml-5'>
                    <Modal
                        show={show}
                        fullscreen={fullscreen}
                        onHide={() => setShow(false)}>
                        <div className='display-flex justify-center align-center transparent'>
                            <Modal.Header closeButton
                                className='close-button fixed-top transparent'>
                            </Modal.Header>
                        </div>
                        <Modal.Body className='search-modal-body justify-center'>
                            <Map
                                setCoordinates={setCoordinates}
                                setBounds={setBounds}
                                coordinates={coordinates}
                            />
                        </Modal.Body>
                        <Modal.Footer className='p-5 modal-footers bg-colombia'>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

            <Row className='mt-5'>
                <div className='display-flex justify-center align-center'>
                    {loading &&
                        <div className="w-100 display-flex justify-center align-center mb-5">
                            <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#0011ff", }} size='2xl' />
                        </div>
                    }
                </div>
                {!loading && (
                    <div
                        id="restaurantCards"
                        className="d-flex flex-wrap justify-content-center pt-3 pb-3 cards-bg">
                        {places &&
                            places.map((place, key) => (
                                (place.phone || place.address || place.website) && (
                                    <Card
                                        key={key}
                                        className="m-2 p-2 restaurant-cards"
                                        style={{ maxWidth: '22rem' }}>
                                        <Image
                                            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                            alt={place.name}
                                            className="img-fluid d-flex flex-wrap justify-content-around cards-image"
                                        />
                                        <Card.Body className="w-100 mt-2 ml-0 mr-0">
                                            <Card.Subtitle className="mb-2 mr-1 card-titles">
                                                {place.name}
                                                <span className="rating">
                                                    <span className="text-muted">
                                                        <FontAwesomeIcon icon={faStar} /> {''}
                                                        {place.rating}
                                                    </span>
                                                </span>
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
                                                        className="mb-3 text-default-2 restaurant-details">
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
                                                    <Card.Subtitle className="mb-3 text-default-2 restaurant-details">
                                                        <FontAwesomeIcon icon={faDirections} /> {''}
                                                        {place.address}
                                                    </Card.Subtitle>
                                                </a>
                                            )}
                                            {place.website && (
                                                <a href={place.website}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="hover-decoration">
                                                    <Card.Subtitle className="mb-3 text-default-2 restaurant-details">
                                                        <FontAwesomeIcon icon={faGlobe} /> {''} website
                                                    </Card.Subtitle>
                                                </a>
                                            )}
                                        </Card.Body>
                                    </Card>
                                )
                            ))}

                    </div>
                )}

            </Row>
            <h2 className="text-center pb-5 mt-5 section-divider-y w-100" >
            </h2>
            <h2 className="text-center section-divider-b w-100" >
            </h2>
            <h2 className="text-center section-divider-r mb-0 w-100" >
            </h2>

        </div>
    );
}



export default Restaurants;