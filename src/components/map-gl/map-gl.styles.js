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
            property: 'pop_est',
            stops: [
                [0, '#ffeda0'],
                [1, '#ffeda0'],
                [2, '#fed976'],
                [3, '#feb24c'],
                [4, "#fd8d3c"],
                [5, '#fee08b'],
                [6, '#fdae61'],
                [7, '#f46d43'],
                [8, '#d53e4f']
            ]
        },
        'fill-opacity': 0.8
    }
};
