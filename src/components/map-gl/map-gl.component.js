import React, { useState, useEffect } from 'react'
import MapGL, { Source, Layer } from 'react-map-gl'
import { json as requestJson } from 'd3-request'

import { formatNumber } from '../../constants/utils'
import { dataLayer } from './map-gl.styles'
import { useStyles } from './map-gl.styles'
import { textStyles } from '../../constants/textColor'

const TOKEN = process.env.MAPBOXKEY

const ChoroplethMap = ({ covidData }) => {
    const textClass = textStyles()
    const classes = useStyles()
    const [isLoading, setLoading] = useState(false)

    const [state, setState] = useState({
        data: null,
        hoveredFeature: null,
    })

    const [viewport, setViewport] = useState({
        latitude: 10,
        longitude: 100,
        zoom: 1.3,
        bearing: 0,
        pitch: 0
    })

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)
        await requestJson(
           'https://bpouncey.github.io/geo-json-world/custom.geo.json',
            (error, response) => {
                if ( !error ) {
                response.features.map( country => {
                    covidData.map( countryData => {
                        if ( country.properties.iso_a3 === countryData.countryInfo.iso3 ){
                            country.properties = { 
                                ...countryData, 
                                ...country.properties
                             }
                        }
                    })
                })
                setState({data: response})
                } else { 
                    console.log(error)
                }
                setLoading(false)
            }
        )
    }

    const onHover = event => {
        const { features, srcEvent: { offsetX, offsetY } } = event
        const hoveredFeature = (features && features.find(f => f.layer.id === 'data'))
        setState( { hoveredFeature, x: offsetX, y: offsetY } )
    }

    const renderTooltip = () => {
        const { hoveredFeature, x, y } = state

        return (
            hoveredFeature && (
                <div className={classes.tooltip} style={{ left: x, top: y }}>
                    <div>Country: {hoveredFeature.properties.sovereignt}</div>
                    <div>Cases: <span className={textClass.yellowText} >{formatNumber(hoveredFeature.properties.cases)}</span></div>
                    <div>Recovered: <span className={textClass.greenText} >{formatNumber(hoveredFeature.properties.recovered)}</span></div>
                </div>
            )
        )
    }

    return (
        <MapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle="mapbox://styles/mapbox/light-v9"
            onViewportChange={setViewport}
            mapboxApiAccessToken={TOKEN}
            onHover={onHover}
        >
            <Source type="geojson" data={state.data}>
                <Layer {...dataLayer} />
            </Source>
            {renderTooltip()}
        </MapGL>
    )
}
export default ChoroplethMap
