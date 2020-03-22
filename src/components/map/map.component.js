import React, { useEffect, useState } from 'react'
import {YOUR_KEY} from './map.data'

import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'
import { Chart } from "react-google-charts"

import AboutWindow from '../about-window/about-window.component.js'
import Footer from '../footer/footer.component'

import CircularProgress from '@material-ui/core/CircularProgress'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import { useStyles, CssTextField } from './map.styles'

const Map = () => {
    const classes = useStyles()
    const [data, setData] = useState([])
    const [aboutWindow, setAboutWindow] = useState(false)
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
                    <CircularProgress className={classes.loader} color={'secondary'} size={70} />
                ):(
                    <div>
                        <div className={classes.navIconDiv} >
                            {!aboutWindow && (
                                <MoreVertIcon
                                    className={classes.navIcon}
                                    onClick={() => {
                                        setAboutWindow(!aboutWindow)
                                    }}
                                />
                            )}
                        </div>

                    {aboutWindow && (
                        <AboutWindow 
                            setAboutWindow={setAboutWindow} 
                            aboutWindow={aboutWindow}/>
                        )
                    }

                    <Chart
                        forceIFrame={true}
                        width={'65vw'}
                        height={'80vh'}
                        chartType="GeoChart"
                        data={countriesData}
                        mapsApiKey={YOUR_KEY}
                        rootProps={{ 'data-testid': '1' }}
                        options={{
                            colorAxis: {
                                colors: [
                                    '#FEEDED','#FB7F81',
                                    '#FB4146','#FA030B',
                                    '#FB040C','#BC0309',
                                    '#7D0206'
                                ]
                            },
                            backgroundColor: '#81d4fa',
                            // datalessRegionColor: 'blue',
                        }}/>
                    </div>
                )}
            </div>
            <Footer
                setAboutWindow={setAboutWindow}
                aboutWindow={aboutWindow}
            />
        </div>
    )
}

export default Map

   