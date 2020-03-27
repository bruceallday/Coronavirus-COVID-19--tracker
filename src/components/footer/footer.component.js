import React, { useState, useEffect } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import MenuWidget from '../menu/menu.component'

import { textStyles } from '../../constants/textColor'
import { useStyles } from './footer.styles'

const Footer = ({ aboutWindow, setAboutWindow, isMobile }) => {

    const classes = useStyles()
    const textClass = textStyles()
    // const [isMobile, setIsMobile] = useState()
    const [totalsData, setTotalsData] = useState("")
    const [lastUpdate, setLastUpdate] = useState('')
    const [isLoading, setLoading] = useState(false)

    const loader = '...'

    useEffect(() => {
        getData()
    }, [])

    const createDate = (date) => {
        let fullDate = new Date(date)
        let str = fullDate.toString()
        let trimStr = str.split('(')
        return trimStr[0]
    }

    const formatNumber = (num) => {
        let str = num.toString()
        if (str.length === 4) {
            str = [str.slice(0, 1), ",", str.slice(1)].join('')
            console.log("STR TYOE", typeof(str), "STR", str)
        } else if (str.length === 5) {
            str = [str.slice(0, 2), ",", str.slice(2)].join('')

        } else if (str.length === 6) {
            str = [str.slice(0, 3), ",", str.slice(3)].join('')
        } 
        return str
    }

   

    const getData = async () => {
        setLoading(true)

        const totalsResult = await fetch(`
            https://corona.lmao.ninja/all
        `)
        const totalsData = await totalsResult.json()

        if (totalsData.error) {
            console.log("error", totalsData.error)
        } else {
            setTotalsData(totalsData)
        }

        let date = createDate(totalsData.updated)
        setLastUpdate(date)
        setLoading(false)

        let totalCases = formatNumber(totalsData.deaths)
    }


    return (
        <AppBar className={classes.appBar} >
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title} >
                    Total Cases: <span className={textClass.yellowText}>{`${totalsData.cases ? formatNumber(totalsData.cases) : loader}`}</span>
                </Typography>
                <Typography className={classes.title} >
                    Recovered: <span className={textClass.greenText} >{`${totalsData.recovered ? formatNumber(totalsData.recovered) : loader}`}</span>
                </Typography>
                <Typography className={classes.title} >
                    Deaths: <span className={textClass.redtext} >{`${totalsData.deaths ? formatNumber(totalsData.deaths) : loader}`}</span>
                </Typography>

                {isMobile && (
                    <MenuWidget
                        aboutWindow={aboutWindow}
                        setAboutWindow={setAboutWindow}
                    />
                )}
             
            </Toolbar>

            <div className={textClass.totalsText}>

                <p>Last updated: <span style={{ fontWeight: "Bold" }} >{lastUpdate}</span></p>

                <div className={classes.linkContainer} >
                    <Button
                        className={textClass.linkText}
                        onClick={() => {
                            setAboutWindow(!aboutWindow)
                        }}>
                        About
                    </Button> 
                </div> <div className={classes.linkContainer}>|</div>

                <div className={classes.linkContainer} >
                    <Button
                        className={textClass.linkText}
                        href="https://www.worldometers.info/coronavirus/">
                        Source
                    </Button> 
                </div> <div className={classes.linkContainer}>|</div>

                <div className={classes.linkContainer} >
                    <Button
                        className={textClass.linkText}
                        href="https://github.com/NovelCOVID/">
                        API
                    </Button> 
                </div> <div className={classes.linkContainer}>|</div>
            
                <div className={classes.linkContainer} >
                    <Button
                        className={textClass.linkText}
                        href="https://github.com/BPouncey">
                        Author
                    </Button>
                </div> <div className={classes.linkContainer}>|</div>
     

                
            </div>
            
    </AppBar>)
}

export default Footer