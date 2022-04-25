import React, { useState } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.lng,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <MapGL
      mapStyle={'mapbox://styles/mapbox/streets-v9'}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(e) => setViewport(e.viewState)}
    >
      {searchResults.map((result) => (
        <div>
          <Marker latitude={result.lat} longitude={result.lng}>
            <a
              onClick={() => {
                setSelectedLocation(result);
              }}
            >
              <p role="img" aria-label="push-pin">
                👇
              </p>
            </a>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
              latitude={result.lat}
              longitude={result.long}
            >
              <h1>{result.title}</h1>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </MapGL>
  );
};

export default MapComponent;
