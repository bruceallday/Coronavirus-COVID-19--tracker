import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
    tooltip: {
        position: 'absolute',
        margin: '8px',
        padding: 5,
        color: 'white',
        backgroundColor: '#363636',
        opacity: 0.9,
        color: '#fff',
        maxWidth: '350px',
        fontSize: '14px',
        zIndex: '9',
        pointerEvents: 'none',
        borderRadius: 5
    },

});

export const dataLayer = {
    id: 'data',
    type: 'fill',
    paint: {
        'fill-color': {
            property: 'cases',
            stops: [
                [0, '#94C9BC'],
                [1, '#CFE5BC'],
                [50, '#FFFFCE'],
                [1000, '#FFEDA0'],
                [3000, '#FED976'],
                [8000, '#FEB24C'],
                [18000, '#FD8D3C'],
                [50000, '#FC4E2A'],
                [200000, '#E31A1C'],
            ]
        },
        'fill-opacity': 0.7
    }
};

// const MAX_ZOOM_LEVEL = 9

// export const heatmapLayer = {
//     maxzoom: MAX_ZOOM_LEVEL,
//     type: 'heatmap',
//     paint: {
//         // Increase the heatmap weight based on frequency and property magnitude
//         'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
//         // Increase the heatmap color weight weight by zoom level
//         // heatmap-intensity is a multiplier on top of heatmap-weight
//         'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, MAX_ZOOM_LEVEL, 3],
//         // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
//         // Begin color ramp at 0-stop with a 0-transparancy color
//         // to create a blur-like effect.
//         'heatmap-color': [
//             'interpolate',
//             ['linear'],
//             ['heatmap-density'],
//             0,
//             'rgba(33,102,172,0)',
//             0.2,
//             'rgb(103,169,207)',
//             0.4,
//             'rgb(209,229,240)',
//             0.6,
//             'rgb(253,219,199)',
//             0.8,
//             'rgb(239,138,98)',
//             0.9,
//             'rgb(255,201,101)'
//         ],
//         // Adjust the heatmap radius by zoom level
//         'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, MAX_ZOOM_LEVEL, 20],
//         // Transition from heatmap to circle layer by zoom level
//         'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
//     }
// };


