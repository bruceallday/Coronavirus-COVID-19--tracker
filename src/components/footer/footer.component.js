import React, { useState, useEffect } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { textStyles } from '../../constants/textColor'
import { useStyles } from './footer.styles'

const Footer = ({ setAboutWindow, aboutWindow }) => {

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
    }

    return (
        <AppBar className={classes.appBar} >
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title} >
                    | Total Cases: <span className={textClass.yellowText}>{`${totalsData.cases ? totalsData.cases : loader}`}</span>
                </Typography>
                <Typography className={classes.title} >
                    | Recovered: <span className={textClass.greenText} >{`${totalsData.recovered ? totalsData.recovered : loader}`}</span>
                </Typography>
                <Typography className={classes.title} >
                    | Deaths: <span className={textClass.redtext} >{`${totalsData.deaths ? totalsData.deaths : loader}`}</span>
                </Typography>
            </Toolbar>

            <div className={textClass.totalsText}>
                <p>Numbers represent recorded cases</p> | 
                <p>Last updated: <span style={{ fontWeight: "Bold" }} >{lastUpdate}</span></p> |

                <Button
                    className={textClass.linkText}
                    onClick={() => {
                        setAboutWindow(!aboutWindow)
                    }}>
                    About
                </Button> |

                <Button
                    className={textClass.linkText}
                    href="https://www.worldometers.info/coronavirus/">
                    Source
                </Button> |

                <Button
                    className={textClass.linkText}
                    href="https://github.com/NovelCOVID/">
                    API
                </Button> |

                <Button
                    className={textClass.linkText}
                    href="https://github.com/BPouncey">
                    Author
                </Button>

            </div>
    </AppBar>)
}

export default Footer