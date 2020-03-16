import React, { useEffect, useState } from 'react'

import { useStyles } from './map.styles'

import { Chart } from "react-google-charts";

const Map = () => {

    const [data, setData] = useState({})
    const [isLoadding, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setData(null)
        setLoading(true)

        const result = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                "x-rapidapi-key": "1a7130203bmsh6dc4ed6f9e52a2cp18ec4ejsnc05fef1e303c"
            }
        })

        const data = await result.json()

        if (data.error) {
            console.log(data.error)
            setLoading(false)
        } else {
            setData(data)
            setLoading(false)
        }
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
                mapsApiKey="AIzaSyAKnPETi-b68l3iYZlJ0GlGq_fR4b4ZVzk"
                rootProps={{ 'data-testid': '1' }}
                options={{
                    colorAxis: { colors: ['white', 'red'] },
                }}
            />
        </div>
    )
}

export default Map