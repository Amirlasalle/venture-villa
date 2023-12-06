import React, { useState, useRef, useEffect } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';

const GooglePlacesSearch = () => {


  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState(null);

  const handleSelect = async (selectedAddress) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      setCoordinates(latLng);
    } catch (error) {
      console.error('Error selecting place:', error);
    }
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


  return (
    <div className="w-100 mb-5 mt-3 display-flex justify-center align-center">
      <PlacesAutocomplete
        value={address}
        onChange={(value) => setAddress(value)}
        onSelect={handleSelect}
        searchOptions={{
          key: 'AIzaSyDzy3wz5yxKZv9CaxbAHUstxBLvan78zsY',
          types: ['geocode'],
          componentRestrictions: { country: 'co' },
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="w-100 mb-5 mt-3 justify-center">
            <div className="w-100 display-flex justify-center align-center">
              <div ref={resetColor} variant='light' style={{ backgroundColor }} className='form-div  mx-3 p-3 text-left ' onClick={changeBgColor}>
                <span className="mx-1 ">
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="faMagGlass text-left" />
                </span>
                <input
                  {...getInputProps({
                    placeholder: 'Venture Search...',
                    className: 'w-100 form-input search-btn-form',
                  })}
                />
              </div>
            </div>
            <div className="mt-3">
              {loading && <div> <p className='pl-0 text-center'>Loading...</p></div>}
              {suggestions.map(suggestion => (
                <div
                  key={suggestion.placeId}
                  {...getSuggestionItemProps(suggestion, {})}
                  className="w-100 search-data-item p-2"
                >
                  <div className="search-data-icon-div">
                    <Image
                      src={process.env.PUBLIC_URL + "/assets/cities/placeholder.png"}
                      alt={suggestion.description}
                      className="search-data-icon"
                    />
                  </div>
                  <div className="search-data-text">{suggestion.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>


      {coordinates && (
        <div>
          <p>
            Selected Coordinates: {coordinates.lat}, {coordinates.lng}
          </p>
        </div>
      )}
    </div>
  );
};

export default GooglePlacesSearch;