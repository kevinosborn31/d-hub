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
  const [center, setCenter] = useState(initialCenter);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY as string
  });

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);

    // Assuming you have an array of doctor and medical center data
    const doctorData = [
      { lat: -3.7451, lng: -38.5231, name: 'Doctor 1' },
      { lat: -3.7452, lng: -38.5232, name: 'Doctor 2' },
      // Add more data points here
    ];

    const markerArray = doctorData.map((data) => {
      return new window.google.maps.Marker({
        position: { lat: data.lat, lng: data.lng },
        map: map,
        title: data.name, // Display name as a tooltip
      });
    });

    setMarkers(markerArray as any);
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
      {/* Render additional map components here */}
    </GoogleMap>
  ) : <div>Loading...</div>;
};

export default MapPage;