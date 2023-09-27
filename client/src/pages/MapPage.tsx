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
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY as string
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
  }, []); 

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
