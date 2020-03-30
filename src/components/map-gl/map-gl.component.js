import React, { useState, useEffect } from 'react'
import MapGL from 'react-map-gl'

const TOKEN = 'pk.eyJ1IjoiYnJ1Y2UwNCIsImEiOiJjazhla2psbWoxNjZoM2RvMXByZmh5amQxIn0.ZY2sxvVkPEFMwj2EJCTRjQ'

const MapTest = () => {
    const [viewport, setViewport] = useState({
        latitude: 40,
        longitude: 100,
        zoom: 1.3,
        bearing: 0,
        pitch: 0
    });

    return (
        <MapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle="mapbox://styles/mapbox/light-v9"
            onViewportChange={setViewport}
            mapboxApiAccessToken={TOKEN}
        />   
    );
}  
export default MapTest

