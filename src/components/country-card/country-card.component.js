import React from 'react'

import Paper from '@material-ui/core/Paper';
import { useStyles}  from './country-card.styles'

const Card = (props) => {

    const classes = useStyles()

    const { 
        country, 
        cases, 
        casesToday, 
        deaths, 
        deathsToday, 
        recovered, 
        critical } = props

    return(
            <Paper 
                elevation={3}
                style={{
                    width: '30vh', 
                    height: '15vh', 
                    margin: 10}}>
                    { country }
            </Paper>
    )
}

export default Card