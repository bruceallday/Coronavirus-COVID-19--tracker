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
    borderRadius: 5,
    zIndex: 999999
  },

  '@media (max-width: 414px)': {
    root: {
      background: 'black'
    },
    container: {
      display: 'none'
    }
  }
});

export const dataLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'active',
      stops: [
        [0, '#00b4d8'],
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



