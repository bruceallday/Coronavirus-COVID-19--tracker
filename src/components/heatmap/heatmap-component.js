import React, { useState, useEffect } from 'react'
import MapGL, { Source, Layer } from 'react-map-gl'
import MapLegend from '../map-legend/map-legend.component'

import { formatNumber } from '../../constants/utils'
import { heatmapLayer } from './heatmap.styles'
// import { useStyles } from './heatmap.styles'
import { textStyles } from '../../constants/textColor'

const TOKEN = process.env.MAPBOXKEY

const Heatmap = ({ covidData }) => {
    const textClass = textStyles()
    // const classes = useStyles()
    const [isLoading, setLoading] = useState(false)

    const [state, setState] = useState({
        data: null,
    })

    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 110,
        zoom: 1.3,
        bearing: 0,
        pitch: 0
    })

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)

        const result = await fetch(
            'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
        )
        const data = await result.json()

        if (data.error) {
            console.log(data.error)
        } else {
            // data.features.map(country => {
            //     covidData.map(countryData => {
            //         if (country.properties.iso_a3 === countryData.countryInfo.iso3) {

            //             country.properties = {
            //                 ...countryData,
            //                 ...country.properties
            //             }
            //         }
            //     })
            //     if (!country.properties.cases) {
            //         country.properties.cases = 0
            //     }
            // })
            // console.log("data", data)
            setState({ data: data })
        }
        setLoading(false)
    }

    const onHover = event => {
        const { features, srcEvent: { offsetX, offsetY } } = event
        const hoveredFeature = (features && features.find(f => f.layer.id === 'data'))
        setState({ hoveredFeature, x: offsetX, y: offsetY })
    }

    const renderTooltip = () => {
        const { hoveredFeature, x, y } = state
        return (
            hoveredFeature && (
                <div className={classes.tooltip} style={{ left: x, top: y }}>

                    <div>Country:
                        {hoveredFeature.properties.sovereignt}
                    </div>

                    <div>Cases:
                        <span
                            className={textClass.yellowText}>
                            {formatNumber(hoveredFeature.properties.cases)}
                        </span>
                    </div>

                    <div>Recovered:
                        <span
                            className={textClass.greenText}>
                            {formatNumber(hoveredFeature.properties.recovered)}
                        </span>
                    </div>
                </div>
            )
        )
    }

    return (
        <div>
            <MapGL
                {...viewport}
                width="100vw"
                height="100vh"
                mapStyle={'mapbox://styles/mapbox/dark-v9'}
                onViewportChange={setViewport}
                mapboxApiAccessToken={TOKEN}
            >
                <Source type="geojson" data={state.data}>
                    <Layer {...heatmapLayer} />
                </Source>
            </MapGL>
        </div>


    )
}
export default Heatmap
