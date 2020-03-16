import React, { useEffect, useState } from 'react'

import {DATA_KEY, YOUR_KEY} from './map.data'
import { useStyles } from './map.styles'

import { Chart } from "react-google-charts";

const Map = () => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)

        // const result = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        //         "x-rapidapi-key": DATA_KEY
        //     }
        // })

        const result = await fetch(
            `https://corona.lmao.ninja/countries`
        )
        const data = await result.json()

        if (data.error) {
            console.log(data.error)
        }else{
            setData(data)
        }
        setLoading(false)
    }

    const countryArr = data.map((item, index) => {
        if(item.country == "UK"){
            return ["United Kingdom", item.cases, item.deaths]
        }else{
            return [item.country, item.cases, item.deaths]
        }
    })

    let countriesData = [
        ['Country', 'Cases', 'Deaths'],
        ...countryArr,
    ]

    return(
        <div >
            <Chart
                width={'1000px'}
                height={'800px'}
                chartType="GeoChart"
                data={countriesData}
                mapsApiKey={YOUR_KEY}
                rootProps={{ 'data-testid': '1' }}
                options={{
                    colorAxis: { colors: [
                         '#FEEDED', '#FB7F81', '#FB4146', '#FA030B', '#FB040C', '#BC0309', '#7D0206', '#360202']},
                    // backgroundColor: '#81d4fa',
                    datalessRegionColor: 'white',
                }}
            />
        </div>
    )
}

export default Map