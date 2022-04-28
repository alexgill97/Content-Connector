import React, { useState } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '../../styles/MapComponent.module.scss';

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
  // console.log(Marker);

  return (
    <MapGL
      mapStyle={'mapbox://styles/mapbox/streets-v9'}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(e) => setViewport(e.viewState)}
    >
      {searchResults.map((result) => (
        <div>
          <Marker
            style={{ backgroundColor: 'transparent' }}
            latitude={result.lat}
            longitude={result.lng}
            offsetTop={-50}
            onClick={() => {
              setSelectedLocation(result);
            }}
          >
            <div className={styles.marker}>
              <img src={result.avatar} alt="" />
            </div>
          </Marker>
          {selectedLocation.lng === result.lng ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
              latitude={result.lat}
              longitude={result.lng}
              className={styles.popup}
            >
              <div className={styles.popupdiv}>
                <img src={result.avatar} />
                <div>
                  <h1>{result.postTitle}</h1>
                  <h3>{result.description}</h3>
                </div>
              </div>
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
