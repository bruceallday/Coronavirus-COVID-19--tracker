const MAX_ZOOM_LEVEL = 9

export const heatmapLayer = {
    maxzoom: MAX_ZOOM_LEVEL,
    type: 'heatmap',
    paint: {
        // increase weight as diameter breast height increases
        'heatmap-weight': {
            property: 'mag',
            type: 'exponential',
            stops: [
                [1, 0],
                [62, 1]
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
};