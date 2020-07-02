import React, { useState, useEffect } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import MobileMenuWidget from '../mobile-menu/mobile-menu.component'
import { formatNumber } from '../../constants/utils'

import { textStyles } from '../../constants/textColor'
import { useStyles } from './footer.styles'

const Footer = (props) => {
  const {
    aboutWindow,
    setAboutWindow,
    newsWindow,
    setNewsWindow,
    statsWindow,
    setStatsWindow,
    isMobile,
  } = props

  const classes = useStyles()
  const textClass = textStyles()
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

  const getData = async () => {
    setLoading(true)

    const totalsResult = await fetch(`
            https://corona.lmao.ninja/v2/all
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
  }


  return (
    <AppBar className={classes.appBar} >
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} >
          Recovered:
          <span className={textClass.greenText} >
            {`${totalsData.recovered ? (
              formatNumber(totalsData.recovered)
            ) : (
                loader
              )}`}
          </span>
        </Typography>
        <Typography className={classes.title} >
          Active Cases:
            <span className={textClass.yellowText} >
            {`${totalsData.active ? (
              formatNumber(totalsData.active)
            ) : (loader)}`}
          </span>
        </Typography>
        <Typography className={classes.title} >
          Total Cases:
          <span className={textClass.orangeText}>
            {`${totalsData.cases ? (
              formatNumber(totalsData.cases)
            ) : (
                loader
              )}`}
          </span>
        </Typography>
        <Typography className={classes.title} >
          Deaths:
          <span className={textClass.redtext} >
            {`${totalsData.deaths ? (
              formatNumber(totalsData.deaths)
            ) : (
                loader
              )}`}
          </span>
        </Typography>

        {isMobile && (
          <MobileMenuWidget
            aboutWindow={aboutWindow}
            setAboutWindow={setAboutWindow}
            newsWindow={newsWindow}
            setNewsWindow={setNewsWindow}
            statsWindow={statsWindow}
            setStatsWindow={setStatsWindow}
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
            href="https://github.com/BPouncey/Coronavirus-COVID-19--tracker">
            Docs
                    </Button>
        </div> <div className={classes.linkContainer}>|</div>

        <div className={classes.linkContainer} >
          <Button
            className={textClass.linkText}
            href="https://github.com/disease-sh/API#sources">
            DATA SOURCES
          </Button>
        </div> <div className={classes.linkContainer}>|</div>

        <div className={classes.linkContainer} >
          <Button
            className={textClass.linkText}
            href="https://hellobruce.co.uk">
            Author
                    </Button>
        </div> <div className={classes.linkContainer}>|</div>

        <div className={classes.linkContainer} >
          <Button
            className={textClass.linkText}
            href={"mailto:" + 'brucematthewp@gmail.com'}>
            Contact
                    </Button>
        </div> <div className={classes.linkContainer}>|</div>
      </div>

    </AppBar>)
}

export default Footer