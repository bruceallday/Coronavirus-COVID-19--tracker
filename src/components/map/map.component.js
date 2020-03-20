import React, { useEffect, useState } from 'react'

import {DATA_KEY, YOUR_KEY} from './map.data'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './map.styles'

import { Chart } from "react-google-charts";

const Map = () => {
    const classes = useStyles()
    const [data, setData] = useState([])
    const [totalsData, setTotalsData] = useState([])
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

        const totalResult = await fetch(`
            https://corona.lmao.ninja/all
        `)

        const totalData = await totalResult.json()

        if (totalData.error) {
            console.log("error", totalData.error)
        } else {
            setTotalsData(data)
        }
        setLoading(false)
    


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
        <div>
            <div className={classes.map} >
            {/*<Paper elevation={3} style={{ width: '60vw', height: '15vh',  backgroundColor: '#363636', borderRadius: 0}} >  </Paper>*/}
                <Chart
                    width={'65vw'}
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


            <AppBar className={classes.appBar} position="fixed" >
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} variant="h2" noWrap>
                        Totals
                    </Typography>
                </Toolbar>
            </AppBar>




        </div>
    )
}

export default Map

   