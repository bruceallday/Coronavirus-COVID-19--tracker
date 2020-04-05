import React, { useState, useEffect } from 'react'
import MapGL, { Source, Layer } from 'react-map-gl'
import MapLegend from '../map-legend/map-legend.component'

import { formatNumber } from '../../constants/utils'
import { heatmapLayer } from './heatmap.styles'
// import { useStyles } from './heatmap.styles'
import { textStyles } from '../../constants/textColor'
import { ImageTexture } from 'material-ui/svg-icons'

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

        const result = await fetch('https://corona.lmao.ninja/v2/jhucsse')
       
        const data = await result.json()

        if (data.error) {
            console.log(data.error)
        } else {

            console.log("DATA ", data)

            // console.log("data", data[2].stats.confirmed)
            // console.log("latitude ",parseFloat(data[2].coordinates.latitude))
            // console.log("longitude ", parseFloat(data[2].coordinates.longitude))

            // let cases = data[2].stats.confirmed
            // let lat = parseFloat(data[2].coordinates.latitude)
            // let lon = parseFloat(data[2].coordinates.longitude)

            const test = data.map((item, index)=> (
                {
                    "type": "Feature",
                        "properties": {
                        "mag": item.stats.confirmed, 
                    },
                    "geometry": {
                        "type":
                        "Point",
                        "coordinates": [parseFloat(item.coordinates.longitude), parseFloat(item.coordinates.latitude)]
                    }
                }
            ))
            
            const featureCollection = 
            { 
                "type": "FeatureCollection",
                "features":[...test]    
            }

            console.log("NEW OBJECT", featureCollection)
            console.log("TEST", test)


            setState({ data: featureCollection })
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
