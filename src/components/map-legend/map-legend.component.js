import React from 'react'

import { useStyles } from './map-legend.styles'

const MapLegend = () => {
    const classes = useStyles()
    const colours = [
        ['#94C9BC', '0'],
        ["#CFE5BC", '1'],
        ["#FFFFCE", '50'],
        ["#FFEDA0", '1000'],
        ["#FED976", '3000'],
        ["#FEB24C", '8000'],
        ["#FD8D3C", '18,000'],
        ["#FC4E2A", '50,000'],
        ["#E31A1C", '200,000 +'],
    ]


    return(
        <div className={classes.legend} >
            {colours.map((item, index) => (
                <div
                    key={index}
                    style={{backgroundColor: item[0]}} 
                    className={classes.colourSq}> 
                    <span 
                        style={{ marginLeft: 20 }}
                        >{item[1]}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default MapLegend