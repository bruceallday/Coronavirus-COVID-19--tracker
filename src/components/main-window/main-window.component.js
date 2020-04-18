import React, { useEffect, useState } from 'react'

import Footer from '../footer/footer.component'
import MainMenu from '../main-menu/main-menu.component'
import ChoroplethMap from '../choropleth-map/choropleth-map.component'
import Heatmap from '../heatmap/heatmap-component'

import CircularProgress from '@material-ui/core/CircularProgress'
import { useStyles } from './main-window.styles'


const MainWindow = (props) => {
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
    const [mapDark, setMapDark] = useState(false)

    useEffect(() => {
        getData()
    }, [])
 
    const getData = async () => {
        setLoading(true)

        const result = await fetch(
            `https://corona.lmao.ninja/v2/countries`
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
                            mapDark={mapDark}
                            setMapDark={setMapDark}
                       />

                       {mapDark ? (
                            <Heatmap
                                covidData={countryArr}
                            />
                       ):(
                            <ChoroplethMap
                                covidData={countryArr}
                            />
                       )}
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

export default MainWindow

   