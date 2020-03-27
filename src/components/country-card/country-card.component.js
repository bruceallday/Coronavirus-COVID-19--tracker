import React, { useEffect, useState } from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { textStyles } from '../../constants/textColor'

import { useStyles}  from './country-card.styles'

const Card = (props) => {
    const classes = useStyles()
    const textClasses = textStyles()

    const { 
        country,
        countryCode,
        cases, 
        todayCases, 
        deaths, 
        todayDeaths, 
        recovered, 
        critical } = props

    // const formatNumber = (num) => {
    //   let test = num.toString()
    //   let proto
    //   if (test.length === 4){
    //       proto = [test.slice(0, 1), ",", test.slice(1)].join('')
    //       console.log(proto)
    //   }else if(test.length === 5){
    //       proto = [test.slice(0, 2), ",", test.slice(2)].join('')
    //       console.log(proto)
    //   }else if (test.length === 6){
    //       proto = [test.slice(0, 3), ",", test.slice(3)].join('')
    //       console.log(proto)
    //   }else{
    //     return
    //   }
    //   return test
    // }

    // useEffect(() => {
    //     formatNumber(1000000)
    // }, [])

    // let recov = formatNumber(recovered)

    console.log("CASES", typeof(recovered))
    
    return(
        <Paper elevation={3} className={classes.root}>
        
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
                {countryCode && (
                    <img 
                        style={{ marginRight: 10 }}
                        src={`https://www.countryflags.io/${countryCode}/flat/32.png`}>
                    </img>
                )}
            
                <Typography  variant="h5">
                    {` ${country}`}
                </Typography>
            </div>
            <Typography style={{paddingLeft: 5}} variant="body1" >
                {`Cases: ${cases} | Today: `}<span className={textClasses.yellowText}>{`${todayCases}`}</span>
            </Typography>

            <Typography style={{ paddingLeft: 5 }} variant="body1" >
                {`Recovered: `}<span className={textClasses.greenText}>{`${recovered}`}</span>
            </Typography>

            <Typography style={{ paddingLeft: 5 }} variant="body1" >
                {`Deaths: ${deaths} | Today: `}<span className={textClasses.redtext}>{`${todayDeaths}`}</span>
            </Typography>

            <Typography style={{ paddingLeft: 5 }} variant="body1" >
                {`Critical: ${critical}`}
            </Typography>
        </Paper>
    )
}

export default Card