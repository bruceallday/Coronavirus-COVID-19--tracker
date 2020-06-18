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

})

const MAX_ZOOM_LEVEL = 9

export const heatmapLayer = {
  maxzoom: MAX_ZOOM_LEVEL,
  id: 'data',
  type: 'heatmap',
  paint: {
    // increase weight as diameter breast height increases
    'heatmap-weight': {
      property: 'mag',
      type: 'exponential',
      stops: [
        [1, 0],
        [60, 1]
      ]
    },
    // increase intensity as zoom level increases
    'heatmap-intensity': {
      stops: [
        [11, 1],
        [15, 3]
      ]
    },
    // assign color values be applied to points depending on their density
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0, 'rgba(246,248,162,0)',
      0.2, '#EA9037',
      0.4, '#FDF3A7',
      0.6, '#441A66',
      0.8, '#000004'
    ],
    // increase radius as zoom increases
    'heatmap-radius': {
      stops: [
        [11, 15],
        [15, 20]
      ]
    },
    // decrease opacity to transition into the circle layer
    'heatmap-opacity': {
      default: 1,
      stops: [
        [14, 1],
        [15, 0]
      ]
    },
  }
}
export const unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'earthquakes',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#11b4da',
    'circle-radius': 4,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
}