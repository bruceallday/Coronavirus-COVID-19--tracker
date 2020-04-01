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
                [0, '#94C9BC'],
                [1, '#CFE5BC'],
                [50, '#FFFFCE'],
                [1000, '#FFEDA0'],
                [3000, '#FED976'],
                [10000, '#FEB24C'],
                [16000, '#FD8D3C'],
                [50000, '#FC4E2A'],
                [200000, '#E31A1C'],
            ]
        },
        'fill-opacity': 0.7
    }
};
