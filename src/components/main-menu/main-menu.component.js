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
        setStatsWindow,
        mapDark,
        setMapDark,
    } = props

    const classes = useStyles()

    return (
        <div className={classes.root} >
            <IconButton
                onClick={() => {
                    setAboutWindow(!aboutWindow)
                }}>
                <InfoIcon
                    style={{ color: mapDark ? 'cyan' : '#363636' }}
                    className={classes.navIcon}
            />
            </IconButton>

            <IconButton
                onClick={() => {
                    setNewsWindow(!newsWindow)
                }}>
                <PriorityHighIcon
                    style={{ color: mapDark ? 'cyan' : '#363636' }}
                    className={classes.navIcon}
            />
            </IconButton>

            <IconButton
                onClick={() => {
                    setStatsWindow(!statsWindow)
                }}>
                <AssessmentIcon
                    style={{ color: mapDark ? 'cyan' : '#363636' }}
                    className={classes.navIcon}
            />
            </IconButton>

            <MapMenuWidget
                mapDark={mapDark}
                setMapDark={setMapDark}
            />
        </div>
    )
}

export default MainMenu