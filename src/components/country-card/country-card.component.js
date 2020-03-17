import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { useStyles}  from './country-card.styles'

const Card = (props) => {

    const classes = useStyles()

    const { 
        country, 
        cases, 
        todayCases, 
        deaths, 
        todayDeaths, 
        recovered, 
        critical } = props

    return(
            <Paper elevation={3}className={classes.root}>
                <Typography variant="h4">
                    {country}
                </Typography>

                <Typography variant="body1" >
                    {`Cases: ${cases} | Today: ${todayCases}`}
                </Typography>

                <Typography variant="body1" >
                    {`Recovered: ${recovered}`}
                </Typography>

                <Typography variant="body1" >
                    {`Deaths: ${deaths} | Today: ${todayDeaths}`}
                </Typography>

                <Typography variant="body1" >
                    {`Critical: ${critical}`}
                </Typography>
            </Paper>
    )
}

export default Card