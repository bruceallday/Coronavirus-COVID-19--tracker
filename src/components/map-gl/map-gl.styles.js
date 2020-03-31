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


// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/s
// Copyright (c) 2015 Uber Technologies, Inc.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


