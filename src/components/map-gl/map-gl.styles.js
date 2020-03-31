import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
   tooltip: {
    position: 'absolute',
    margin: '8px',
    padding: '4px',
    background: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    maxWidth: '300px',
    fontSize: '10px',
    zIndex: '9',
    pointerEvents: 'none',
}
});
export const dataLayer = {
    id: 'data',
    type: 'fill',
    paint: {
        'fill-color': {
            property: 'percentile',
            stops: [
                [0, '#3288bd'],
                [1, '#66c2a5'],
                [2, '#abdda4'],
                [3, '#e6f598'],
                [4, '#ffffbf'],
                [5, '#fee08b'],
                [6, '#fdae61'],
                [7, '#f46d43'],
                [8, '#d53e4f']
            ]
        },
        'fill-opacity': 0.8
    }
};
