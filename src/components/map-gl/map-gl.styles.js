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
                [1, '#FFEDA0'],
                [100, '#FFEDA0'],
                [500, '#FEB24C'],
                [1000, '#FD8D3C'],
                [1500, "#FC4E2A"],
                [5000, '#E31A1C'],
                [10000, '#BD0026'],
                [20000, '#FB040C'],
                [50000, '#BC0309'],
                [100000, 'firebrick'],
            ]
        },
        'fill-opacity': 0.7
    }
};
