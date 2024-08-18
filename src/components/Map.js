import React from 'react';
import { GoogleMap, LoadScript, Polygon, Marker } from '@react-google-maps/api';

const MapComponent = () => {
    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: -4.04,
        lng: 39.67,
    };

    const polygonPaths = [
        { lat: -4.04, lng: 39.67 },
        { lat: -4.03, lng: 39.68 },
        { lat: -4.05, lng: 39.69 },
        { lat: -4.06, lng: 39.66 },
        { lat: -4.04, lng: 39.67 },
    ];

    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
                <Polygon
                    paths={polygonPaths}
                    options={{
                        fillColor: '#00FF00',
                        fillOpacity: 0.4,
                        strokeColor: '#00FF00',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                    }}
                />
                <Marker position={{ lat: -4.04, lng: 39.67 }} label="Water Point" />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
