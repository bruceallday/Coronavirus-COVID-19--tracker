import React, { useState, useEffect } from 'react'

import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import AssessmentIcon from '@material-ui/icons/Assessment'

import MapMenuWidget from '../map-menu/map-menu.component'

import { useStyles } from './main-menu.styles'

const MainMenu = (props) => {
    const {
        aboutWindow,
        setAboutWindow,
        newsWindow,
        setNewsWindow,
        statsWindow,
        setStatsWindow
    } = props

    const classes = useStyles()
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)

        const result = await fetch(`
            https://corona.lmao.ninja/all
        `)

        const data = await result.json()

        if (data.error) {
            console.log("error", data.error)
        } else {
            setData(data)
        }
        setLoading(false)
    }

    return (
        <div className={classes.root} >
            <IconButton
                onClick={() => {
                    setAboutWindow(!aboutWindow)
                }}>
                <InfoIcon
                    className={classes.navIcon}
                />
            </IconButton>

            <IconButton
                onClick={() => {
                    setNewsWindow(!newsWindow)
                }}>
                <PriorityHighIcon
                    className={classes.navIcon}
                />
            </IconButton>

            <IconButton
                onClick={() => {
                    setStatsWindow(!statsWindow)
                }}>
                <AssessmentIcon
                    className={classes.navIcon}
                />
            </IconButton>
            <MapMenuWidget />
        </div>
    )
}

export default MainMenu