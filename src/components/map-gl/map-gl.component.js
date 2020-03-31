import React, { useState, useEffect } from 'react'
import MapGL, { Source, Layer } from 'react-map-gl'
import { dataLayer } from './map-gl.styles'
import { useStyles } from './map-gl.styles'
import { json as requestJson } from 'd3-request'
import { updatePercentiles } from '../../constants/utils'
import Typography from 'material-ui/styles/typography'

const TOKEN = process.env.MAPBOXKEY

const MapTest = () => {
    const classes = useStyles()
    const [isLoading, setLoading] = useState(false)

    const [state, setState] = useState({
        year: 2015,
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
            'https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/us-income.geojson',
            (error, response) => {
                if (!error) {
                    console.log("RESPONSE", response)
                    loadData(response);
                } else { 
                    console.log(error)
                }
                setLoading(false)
            }
        )
    }

    const loadData = data => {
        setState({data: updatePercentiles(data, f => f.properties.income[state.year])})
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
                    <div>State: {hoveredFeature.properties.name}</div>
                    <div>Median Household Income: {hoveredFeature.properties.value}</div>
                    <div>Percentile: {(hoveredFeature.properties.percentile / 8) * 100}</div>
                </div>
            )
        )
    }

    return (
        <div >
        {/*<h4 style={ { zIndex: 999, position: 'absolute', fontSize: 24 } }  >Improved maps in development</h4>*/}
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
        </div>
    );
}
export default MapTest



// import React, { Component } from 'react';
// import MapGL, { Source, Layer } from 'react-map-gl';

// import { dataLayer } from './map-gl.styles';
// import { json as requestJson } from 'd3-request';

// const MAPBOX_TOKEN = 'pk.eyJ1IjoiYnJ1Y2UwNCIsImEiOiJjazhla2psbWoxNjZoM2RvMXByZmh5amQxIn0.ZY2sxvVkPEFMwj2EJCTRjQ'; // Set your mapbox token here

// export  default class MapTest extends Component {
//     state = {
//         year: 2015,
//         data: null,
//         hoveredFeature: null,
//         viewport: {
//             latitude: 20,
//             longitude: 90,
//             zoom: 1.3,
//             bearing: 0,
//             pitch: 0
//         }
//     };

//     componentDidMount() {
        // requestJson(
        //     'https://bpouncey.github.io/geo-json-world/custom.geo.json',
        //     (error, response) => {
        //         if (!error) {
        //             console.log("RESPONSE", response)
        //             this._loadData(response);
        //         }else{}
        //     }
        // );
//     }

//     _loadData = data => {
//         this.setState({
//             data: updatePercentiles(data, f => f.properties.income[this.state.year])
//         });
//     };

//     _onViewportChange = viewport => this.setState({ viewport });

//     _onHover = event => {
//         const {
//             features,
//             srcEvent: { offsetX, offsetY }
//         } = event;
//         const hoveredFeature = features && features.find(f => f.layer.id === 'data');

//         this.setState({ hoveredFeature, x: offsetX, y: offsetY });
//     };

//     _renderTooltip() {
//         const { hoveredFeature, x, y } = this.state;

//         return (
//             hoveredFeature && (
//                 <div className="tooltip" style={{ left: 500, top: 500 }}>
//                     <div>State: {hoveredFeature.properties.name}</div>
//                     <div>Median Household Income: {hoveredFeature.properties.value}</div>
//                     <div>Percentile: {(hoveredFeature.properties.percentile / 8) * 100}</div>
//                 </div>
//             )
//         );
//     }

//     render() {
//         const { viewport, data } = this.state;

//         return (
//             <div style={{ height: '100%', position: 'relative' }}>
//                 <MapGL
//                     {...viewport}
//                     width="100vw"
//                     height="100vh"
//                     mapStyle="mapbox://styles/mapbox/light-v9"
//                     onViewportChange={this._onViewportChange}
//                     mapboxApiAccessToken={MAPBOX_TOKEN}
//                     onHover={this._onHover}
//                 >
//                 <Source type="geojson" data={data}>
//                     <Layer {...dataLayer} />
//                 </Source>
//                     {this._renderTooltip()}
//                 </MapGL>

//             </div>
//         );
//     }
// }

// import { range } from 'd3-array';
// import { scaleQuantile } from 'd3-scale';

// export function updatePercentiles(featureCollection, accessor) {
//     const { features } = featureCollection;
//     const scale = scaleQuantile()
//         .domain(features.map(accessor))
//         .range(range(9));
//     return {
//         type: 'FeatureCollection',
//         features: features.map(f => {
//             const value = accessor(f);
//             const properties = {
//                 ...f.properties,
//                 value,
//                 percentile: scale(value)
//             };
//             return { ...f, properties };
//         })
//     };
// }

