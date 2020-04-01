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
        latitude: -15,
        longitude: 85,
        zoom: 1.4,
        bearing: 20,
        pitch: 20
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
                    if (!country.properties.cases) {
                        country.properties.cases = 0
                    }
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
            <div className={classes.legend} >
                <div style={{ backgroundColor: '#94C9BC' }} className={classes.colourSq}><span style={{ marginLeft: 20 }} >0</span></div>
                <div style={{ backgroundColor: '#CFE5BC' }} className={classes.colourSq}><span style={{ marginLeft: 20 }} >1</span></div>
                <div style={{ backgroundColor: '#FFFFCE' }} className={classes.colourSq}><span style={{ marginLeft: 20 }} >50</span></div>
                <div style={{ backgroundColor: '#FFEDA0' }} className={classes.colourSq}><span style={{ marginLeft: 20 }} >1000</span></div>
                <div style={{ backgroundColor: '#FED976' }} className={classes.colourSq}><span style={{ marginLeft: 20 }} >3000</span></div>
                <div style={{ backgroundColor: '#FEB24C' }} className={classes.colourSq}><span style={{ marginLeft: 20 }} >8,000</span></div>
                <div style={{ backgroundColor: '#FD8D3C' }} className={classes.colourSq}><span style={{ marginLeft: 20 }} >18,000</span></div>
                <div style={{ backgroundColor: '#FC4E2A' }} className={classes.colourSq}><span style={{ marginLeft: 20 }} >50,000</span></div>
                <div style={{ backgroundColor: '#E31A1C' }} className={classes.colourSq}><span style={{ marginLeft: 20 }} >200,000+</span></div>
            </div>
        </MapGL>
   
    )
}
export default ChoroplethMap
