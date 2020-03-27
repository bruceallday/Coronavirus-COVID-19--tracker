import React, { useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import InfoIcon from '@material-ui/icons/Info'
import { useStyles } from './menu.styles'
import { textStyles } from '../../constants/textColor'


const MenuWidget = (props) => {
    const { aboutWindow, setAboutWindow } = props
    const classes = useStyles()
    const textClass = textStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48
    const options = [
        <Button
            className={textClass.linkText}
            onClick={() => {
                setAboutWindow(!aboutWindow)
            }}>
            About
        </Button>,
        <Button
            className={textClass.linkText}
            href="https://www.worldometers.info/coronavirus/">
            Source
        </Button>,

        <Button
            className={textClass.linkText}
            href="https://github.com/NovelCOVID/">
            API
        </Button>,

        <Button
            className={textClass.linkText}
            href="https://github.com/BPouncey">
            Author
        </Button>,
    ]
   
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                {options.map((option, index) => (
                    <MenuItem key={index} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default MenuWidget