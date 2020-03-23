# Track Coronavirus(COVID-19) v1.0.0
A Selection of Coronavirus COVID-19 endpoints <br>

## Home
[trackcoronavirus.info](trackcoronavirus.info)
:laughing:
![](./readme-images/readme.gif)

### Run locally
Clone project <br>
run ```yarn``` in the project directory to install all dependancies <br>
```yarn start``` to spin up a local server <br>
View at ```localhost:1234/```<br>

### Technologies used
* [JS ES6](http://es6-features.org/)
* [React](https://reactjs.org/)
* [JSS](https://cssinjs.org/?v=v10.0.4)
* [Material-UI](https://material-ui.com)
* [Parcel](https://parceljs.org/)

### Endpoints:
* Map - [Google GeoCharts](https://developers.google.com/chart/interactive/docs/gallery/geochart)
* Coronavirus(COVID-19) data - [NovelCOVID/API](https://github.com/NovelCOVID/API)
* Country Codes - [https://datahub.io/core/country-list](https://datahub.io/core/country-list)
* Country Flags - [https://www.countryflags.io/](https://www.countryflags.io/)

### Media Query Breakpoints

| Device      | Width         | Height        | 
|:-----------:|:-------------:|:-------------:|
| Mobile      | 320           | 568           |
| Tablet      | 768           | 1024          |
| Desktop     | 1240          | 800           |

## API Tutorial:

```javascript
import React, { useState, useEffect } from 'react'

import { useStyles } from './totals.styles'

const Totals = () => {
    const classes = useStyles()
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)

        const result = await fetch(`
            https://corona.lmao.ninja/all
        `)

        const data = await result.json()

        if (data.error) {
            console.log("error", data.error)
        } else {
            setData(data)
        }
        setLoading(false)
    }

    return (
        <div className={classes.root}>
            {!isLoading && (
                data.map((item, index) => {
                    <h3>{item.country}</h3>
                    <p>{item.cases}</p>
                })
            )}
        </div>
    )
}

export default Totals
```

## Features

### Dynamic search engine
Making use of the React ```useState()``` hook to make an event based search engine. <br>

### Interactive map
After sorting my Promised data, I give relevant data to associated parameters, in my [GeoChart](https://developers.google.com/chart/interactive/docs/gallery/geochart), to dynammically create a real-time data visual of COVID-19 cases around the world <br>
![](./readme-images/map-gif.gif)





## Environment
* macOS catalina: 10.15.3
* VS Code: 1.39.1

## Authors
* **Bruce Pouncey** - *Initial work* - [BPouncey](https://github.com/BPouncey)

## License
(MIT)

## Acknowledgments
[@NovelCOVID](github.com/NovelCOVID)