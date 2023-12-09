import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ setCoordinates, setBounds, coordinates}) => {

  return (
    <div className='map-container'>
        <GoogleMapReact 
            bootstrapURLKeys={{ key: 'AIzaSyDzy3wz5yxKZv9CaxbAHUstxBLvan78zsY'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={{ fullscreenControl: false }}
            onChange={(e) => {
                setCoordinates({ lat: e.center.lat, lng: e.center.lng})
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
            }}
            onChildClick={''}
            >
        </GoogleMapReact>
    </div>
  )
}

export default Map