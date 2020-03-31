import React, { useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MapIcon from '@material-ui/icons/Map'
import { useStyles } from './map-menu.styles'
import { textStyles } from '../../constants/textColor'


const MapMenuWidget = (props) => {
    const classes = useStyles()
    const textClass = textStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48
   
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const options = [
        // {
        //     action: (() => { setAboutWindow(!aboutWindow) }),
        //     href: null,
        //     title: "About"
        // },
        {
            action: null,
            href: null,
            title: "Coming Soon"
        },
        {
            action: null,
            href: null,
            title: "Coming Soon"
        },
        {
            action: null,
            href: null,
            title: "Coming Soon",
        }

    ]
    return (
        <div className={classes.menuContainer} >
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MapIcon className={classes.navIcon} />
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
                        width: '20ch',
                        backgroundColor: '#363636',
                    },
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        style={{color: 'cyan'}} key={index} selected={option === 'Pyxis'}>
                        <Button
                            className={textClass.linkText}
                            onClick={option.action}
                            href={option.href}>
                            {option.title}
                        </Button>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default MapMenuWidget