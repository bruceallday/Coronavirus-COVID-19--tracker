import React, { useEffect, useState } from 'react'

import {DATA_KEY, YOUR_KEY} from './map.data'
import { useStyles } from './map.styles'

import { Chart } from "react-google-charts";

const Map = () => {

    const [data, setData] = useState(null)
    const [isLoadding, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)

        const result = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                "x-rapidapi-key": DATA_KEY
            }
        })

        const data = await result.json()

        if (data.error) {
            console.log(data.error)
        } else {
            setData(data)
        }
        setLoading(false)
    }

    console.log("COVID-19 DATA", data)

    let countriesData = [
        ['Country', 'Cases', 'Deaths'],
        ['Germany', 200, 100],
        ['United States', 300, 150],
        ['Brazil', 400, 90],
        ['Canada', 500, 69],
        ['France', 600, 300],
        ['RU', 700, 900],
    ]

    return(
        <div>
            <Chart
                width={'800px'}
                height={'600px'}
                chartType="GeoChart"
                data={countriesData}
                mapsApiKey={YOUR_KEY}
                rootProps={{ 'data-testid': '1' }}
                options={{
                    colorAxis: { colors: ['white', 'red'] },
                }}
            />
        </div>
    )
}

export default Map