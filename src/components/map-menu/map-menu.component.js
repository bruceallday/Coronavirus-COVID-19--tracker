import React, { useState, useEffect } from 'react'

import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MapIcon from '@material-ui/icons/Map'
import Switch from '@material-ui/core/Switch'

import { useStyles } from './map-menu.styles'
import { textStyles } from '../../constants/textColor'


const MapMenuWidget = ({ mapDark, setMapDark }) => {
    const classes = useStyles()
    const textClass = textStyles()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48
   
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const options = [
        {
            action: (() => { setMapDark(!mapDark) }),
            href: null,
            title: "Choropleth",
        },
        {
            action: (() => { setMapDark(!mapDark) }),
            href: null,
            title: "Heatmap",
        },
        // {
        //     action: null,
        //     href: null,
        //     title: "Coming Soon"
        // },
    ]

    const handleChange = () => {
        setMapDark(!mapDark)
    }

    return (
        <div className={classes.menuContainer} >
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MapIcon 
                    className={classes.navIcon}
                    style={{ color: mapDark ? 'cyan' : '#363636' }}
                 />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '10vw',
                        backgroundColor: '#363636',
                    },
                }}
            >

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
                    <Switch onChange={handleChange} />
                    <p className={textClass.linkText} >{mapDark ? 'Heatmap' : 'Choropleth'}</p>
                </div>
            
                
            </Menu>
        </div>
    )
}

export default MapMenuWidget