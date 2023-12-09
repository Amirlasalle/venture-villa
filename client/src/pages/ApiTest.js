import React, { useState, useEffect } from 'react';
import { getPlacesData } from '../components/api/index';
import { Image, Card } from 'react-bootstrap';
import '../App.css'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGlobe, faPhone, faDirections } from '@fortawesome/free-solid-svg-icons';

const GooglePlacesSearch = () => {


  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
      setBounds({ sw: { lat: latitude - 0.1, lng: longitude - 0.1 }, ne: { lat: latitude + 0.1, lng: longitude + 0.1 } });
    })
  }, [])

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [coordinates, bounds]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }



  return (
    <div className='home'>

      <div id="restaurantCards" className="d-flex flex-wrap justify-content-center pt-3 pb-3 cards-bg">
        {places && places.map((place, key) => (
          <Card key={key} className="m-2 p-2  restaurant-cards" style={{ maxWidth: '22rem' }}>

            <Image
              src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name} className="img-fluid d-flex flex-wrap justify-content-around cards-image" />
            <Card.Body className='w-100 mt-2 ml-0 mr-0'>
              <Card.Subtitle className="mb-2 mr-1 card-titles">{place.name}
                <span className='rating'>
                  <span className='text-muted'>
                    <FontAwesomeIcon icon={faStar} /> {place.rating}
                  </span>
                </span>
              </Card.Subtitle>
              <Card.Subtitle className="mb-3 card-price">
                {place.price_level}
              </Card.Subtitle>
              <a href={`tel:${place.phone}`} target="_blank" rel="noreferrer" className="hover-decoration">
                <Card.Subtitle className="mb-3 text-default-2 restaurant-details">
                  <FontAwesomeIcon icon={faPhone} />   {place.phone}
                </Card.Subtitle>
              </a>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.address)}`}
                target="_blank"
                rel="noreferrer"
                className="hover-decoration">
               <Card.Subtitle className="mb-3 text-default-2 restaurant-details">
                <FontAwesomeIcon icon={faDirections} />   {place.address}
              </Card.Subtitle>
            </a>
            <a href={place.website} target="_blank" rel="noreferrer" className="hover-decoration">
              <Card.Subtitle className="mb-3 text-default-2 restaurant-details">
                <FontAwesomeIcon icon={faGlobe} />   website
              </Card.Subtitle>
            </a>

            <style type="text/css">
            </style>
          </Card.Body>

          </Card>

        ))}
    </div>





    </div >
  );
};

export default GooglePlacesSearch;