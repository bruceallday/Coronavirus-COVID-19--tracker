import React, { useEffect, useState } from 'react'

import Footer from '../footer/footer.component'
import MainMenu from '../main-menu/main-menu.component'
import ChoroplethMap from '../map-gl/map-gl.component'

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
        isMobile 
    } = props
        
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
        }
        setLoading(false)
    }

    const countryArr = data.map((item, index) => {
        return {
            cases: item.cases, 
            deaths: item.deaths, 
            recovered: item.recovered, 
            countryInfo: item.countryInfo
        }
    })

    return(
        <div >
            <div className={classes.map}>
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
                        <ChoroplethMap covidData={countryArr} />
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

   