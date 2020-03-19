import React, { useEffect, useState } from 'react'

import {DATA_KEY, YOUR_KEY} from './map.data'
import Paper from '@material-ui/core/Paper'
import { useStyles } from './map.styles'

import { Chart } from "react-google-charts";

const Map = () => {
    const classes = useStyles()
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
        <div className={classes.root} >
            <Paper elevation={3} style={{ width: '60vw', height: '15vh',  backgroundColor: '#363636'}} >  </Paper>
            <Chart
                width={'60vw'}
                height={'80vh'}
                chartType="GeoChart"
                data={countriesData}
                mapsApiKey={YOUR_KEY}
                rootProps={{ 'data-testid': '1' }}
                options={{
                    sizeAxis: { minValue: 10, maxValue: 50000 },
                    colorAxis: { colors: [
                         '#FEEDED', '#FB7F81', '#FB4146', '#FA030B', '#FB040C', '#BC0309', '#7D0206', '#360202']},
                    // backgroundColor: '#81d4fa',
                    // datalessRegionColor: 'blue',
                }}
            />
        </div>
    )
}

export default Map