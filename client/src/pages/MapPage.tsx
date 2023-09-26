import { useCallback, useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100vh',
  height: '90vh'
};

const initialCenter = {
  lat: -3.745,
  lng: -38.523
};

const MapPage = () => {
    // TODO get this initial center thing working
  const [center, setCenter] = useState(initialCenter);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA6MOS8FijRYgWnoQUDcL69Jj0K0Q0fkUs" 
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, [center]);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  useEffect(() => {
    // Use navigator.geolocation to get the user's position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setCenter(userPosition);
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []); // Empty dependency array to run this effect only once

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
    </GoogleMap>
  ) : <div>Loading...</div>;
};

export default MapPage;
