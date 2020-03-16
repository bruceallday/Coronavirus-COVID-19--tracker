import React, { useEffect, useState } from 'react'

import {DATA_KEY, YOUR_KEY} from './map.data'
import { useStyles } from './map.styles'

import { Chart } from "react-google-charts";

const Map = () => {

    const [allData, setAllData] = useState(null)
    const [countryData, setCountriesData] = useState([])

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

        const resultAll = await fetch(
            `https://corona.lmao.ninja/all`
        )
        const allData = await resultAll.json()

        const resultCountries = await fetch(
            `https://corona.lmao.ninja/countries`
        )
        const countryData = await resultCountries.json()

        if (allData.error) {
            console.log(allData.error)

        } else if (countryData.error) {
            console.log(countryData.error)
            
        }else{
            setAllData(allData)
            setCountriesData(countryData)
        }
        setLoading(false)
    }

    console.log("COUNTRY DATA", countryData)

    const countryArr = countryData.map((item, index) => {
        if(item.country == "UK"){
            return ["United Kingdom", item.cases, item.deaths]
        }else{
            return [item.country, item.cases, item.deaths]
        }
    })

    console.log("COUNTRY ARRAY", countryArr)

    let countriesData = [
        ['Country', 'Cases', 'Deaths'],
        ...countryArr,
    ]

    return(
        <div>
            <Chart
                width={'1000px'}
                height={'800px'}
                chartType="GeoChart"
                data={countriesData}
                mapsApiKey={YOUR_KEY}
                rootProps={{ 'data-testid': '1' }}
                options={{
                    colorAxis: { colors: [
                        'pink','#E50000', '#CC0000', '#B20000', '#7F0000', '#660000', 'black']},
                    // backgroundColor: '#81d4fa',
                    datalessRegionColor: '#81d4fa',
                }}
            />
        </div>
    )
}

export default Map