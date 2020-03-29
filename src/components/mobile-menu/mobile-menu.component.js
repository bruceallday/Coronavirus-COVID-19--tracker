import React, { useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import InfoIcon from '@material-ui/icons/Info'
import { useStyles } from './mobile-menu.styles'
import { textStyles } from '../../constants/textColor'


const MobileMenuWidget = (props) => {
    const { aboutWindow, 
            setAboutWindow,
            newsWindow,
            setNewsWindow,
            statsWindow,
            setStatsWindow, 
    } = props
    const classes = useStyles()
    const textClass = textStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const ITEM_HEIGHT = 48
   
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null)
    };
    
    const mobileOptions = [
        {
            action: (() => { setAboutWindow( !aboutWindow ) }),
            href: null,
            title: "About"
        },

        {
            action: (() => { setNewsWindow( !newsWindow ) }),
            href: null,
            title:"News",
        },

        {
            action: (() => { setStatsWindow( !statsWindow ) }),
            href: null,
            title: "Stats",
        },

        {
            action: null,
            href: "https://www.worldometers.info/coronavirus/",
            title: "Source"
        },
        {
            action: null,
            href: "https://github.com/NovelCOVID/",
            title: "API"
        },
        {
            action: null,
            href: "https://github.com/BPouncey",
            title: "Author",
        },
        

    ]
    return (
        <div className={classes.menuContainer} >
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <InfoIcon className={classes.root} />
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
                {mobileOptions.map((option, index) => (
                    <MenuItem key={index} selected={option === 'Pyxis'}>
                        <Button
                            onClick={option.action}
                            className={textClass.linkText}
                            href={option.href}>
                            {option.title}
                        </Button>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default MobileMenuWidget