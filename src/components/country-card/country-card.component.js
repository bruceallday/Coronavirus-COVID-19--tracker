import React, { useEffect, useState } from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { useStyles}  from './country-card.styles'

const Card = (props) => {

    const classes = useStyles()
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [code, setCode] = useState([])

    const { 
        country, 
        cases, 
        todayCases, 
        deaths, 
        todayDeaths, 
        recovered, 
        critical } = props

    // useEffect(() => {
    //     getData()
    // }, [])

    // const getData = async () => {
    //     setLoading(true)

    //     const result = await fetch(`
    //         https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json
    //     `)
    //     const data = await result.json()

    //     if (data.error) {
    //         console.log("error", data.error)
    //     } else {
    //         setData(data)
    //     }
    //     setLoading(false)

    // }

    // console.log("DATA", data)

    // const countryCode = data.map((item) => {
    //     if (item.Name === country){
    //         setCode(item.Code)
    //     }
    // })

    return(
            <Paper elevation={3}className={classes.root}>

                <div style={{display: 'flex', flexDirection: 'row'}} >
                    <img style={{paddingRight: 5}} src="https://www.countryflags.io/be/flat/32.png"></img>
                    <Typography variant="h5">
                        {country}
                    </Typography>
                </div>


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