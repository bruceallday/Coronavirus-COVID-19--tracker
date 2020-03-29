import React, { useEffect, useState } from 'react'

import { Chart } from "react-google-charts"

import Footer from '../footer/footer.component'
import MainMenu from '../main-menu/main-menu.component'

import CircularProgress from '@material-ui/core/CircularProgress'

import { useStyles } from './map.styles'

const Map = (props) => {
    const {
        aboutWindow,
        setAboutWindow,
        newsWindow,
        setNewsWindow,
        statsWindow,
        setStatsWindow,
        isMobile } = props
        
    const classes = useStyles()
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)
    
        const result = await fetch(
            `https://corona.lmao.ninja/countries`
        )
        const data = await result.json()

        if (data.error) {
            console.log(data.error)
        }else{
            setData(data)
            console.log("novelCOVID DATA", data)
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
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className={classes.map} >
                {isLoading ? (
                    <CircularProgress
                        className={classes.loader}
                        color={'secondary'}
                        size={70}
                    />
                ):(
                    <div>
                    <MainMenu
                        aboutWindow={aboutWindow}
                        setAboutWindow={setAboutWindow}
                        newsWindow={newsWindow}
                        setNewsWindow={setNewsWindow}
                        statsWindow={statsWindow}
                        setStatsWindow={setStatsWindow}
                    />
                  
                    <div className={classes.chart} >
                        <Chart
                            // forceIFrame={true}
                            width={'65vw'}
                            height={'77.7vh'}
                            chartType="GeoChart"
                            data={countriesData}
                            mapsApiKey={process.env.YOUR_KEY}
                            rootProps={{ 'data-testid': '1' }}
                            options={{
                                colorAxis: {
                                    colors: [
                                        '#FEEDED','#FB7F81',
                                        '#FB4146','#FA030B',
                                        '#FB040C','#BC0309',
                                        
                                    ]
                                },
                                backgroundColor: '#81d4fa',
                                // datalessRegionColor: 'blue',
                            }}/>
                        </div>
                    </div>
                )}
            </div>
            <Footer
                setAboutWindow={setAboutWindow}
                aboutWindow={aboutWindow}
                newsWindow={newsWindow}
                setNewsWindow={setNewsWindow}
                statsWindow={statsWindow}
                setStatsWindow={setStatsWindow}
                isMobile={isMobile}
            />
        </div>
    )
}

export default Map

   