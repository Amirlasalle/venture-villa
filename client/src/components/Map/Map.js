import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  return (
    <div className='map-container'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDzy3wz5yxKZv9CaxbAHUstxBLvan78zsY' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ fullscreenControl: false }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      >
            <FontAwesomeIcon 
            icon={faLocation} 
            position={coordinates} 
            draggable={true} 
            size='2xl'
            beat
            className='text-colombia'
            onDragEnd={(e) => setCoordinates({ lat: e.latLng.lat(), lng: e.latLng.lng() })} 
            />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
