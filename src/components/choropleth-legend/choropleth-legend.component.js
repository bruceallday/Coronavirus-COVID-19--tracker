import React from 'react'

import { useStyles } from './choropleth-legend.styles'

const ChoroplethLegend = () => {
  const classes = useStyles()
  const colours = [
    ['black', 'No data'],
    ['#00b4d8', 'Fully recovered'],
    ["#CFE5BC", '1'],
    ["#FFFFCE", '50'],
    ["#FFEDA0", '1000'],
    ["#FED976", '3000'],
    ["#FEB24C", '8000'],
    ["#FD8D3C", '18,000'],
    ["#FC4E2A", '50,000'],
    ["#E31A1C", '200,000+'],
  ]

  return (
    <div className={classes.legend} >
      {colours.map((item, index) => (
        <div key={index} style={{ display: 'flex' }} >
          <div
            style={{ backgroundColor: item[0] }}
            className={classes.colourSq}>
          </div>
          <span
            style={{ marginLeft: 20 }}
          >{item[1]}
          </span>
        </div>
      ))}
      <p>Active cases per country</p>
    </div>
  )
}

export default ChoroplethLegend