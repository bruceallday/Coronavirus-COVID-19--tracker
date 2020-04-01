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
    }
});

export const dataLayer = {
    id: 'data',
    type: 'fill',
    paint: {
        'fill-color': {
            property: 'cases',
            stops: [
                [0, '#3288bd'],
                [10, '#66c2a5'],
                [200, '#abdda4'],
                [1000, '#ffffbf'],
                [10000, '#fee08b'],
                [15000, '#fdae61'],
                [30000, '#f46d43'],
                [50000, '#d53e4f'],
                [80000, '#FB040C'],
                [100000, '#BC0309']
            ]
        },
        'fill-opacity': 0.7
    }
};
