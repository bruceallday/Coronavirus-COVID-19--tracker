import React, { useEffect, useState } from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { useStyles}  from './country-card.styles'

const Card = (props) => {

    const classes = useStyles()
    const [code, setCode] = useState("")
    const [isLoading, setLoading] = useState(true)

    const { 
        country, 
        cases, 
        todayCases, 
        deaths, 
        todayDeaths, 
        recovered, 
        critical } = props

    useEffect(() => {
        getCountryCode()
    }, [])

    const getCountryCode = async () => {

        if (!isLoading) return
        setLoading(false)

        if (!isLoading) 
        setLoading(true)
        const result = await fetch(`
            https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json
        `)
        const data = await result.json()

        if (data.error) {
            console.log("error", data.error)
        } else {
            matchCode(data)
        }
        setLoading(false)
    }

    const matchCode = (data) => {
        data.map(item => {

            if (country === "Iran"){
                setCode("https://www.countryflags.io/ir/flat/64.png")
            }else if (country === "S. Korea"){
                setCode("https://www.countryflags.io/kr/flat/64.png")
            } else if (country === "USA") {
                setCode("https://www.countryflags.io/us/flat/64.png")
            } else if (country === "UK") {
                setCode("https://www.countryflags.io/gb/flat/64.png")
            } else if (country === "Czechia") {
                setCode("https://www.countryflags.io/cz/flat/64.png")
            } else if (country === "UAE") {
                setCode("https://www.countryflags.io/ae/flat/64.png")
            } else if (country === "Russia") {
                setCode("https://www.countryflags.io/ru/flat/64.png")
            } else if (country === "Taiwan") {
                setCode("https://www.countryflags.io/tw/flat/64.png")
            } else if (country === "Vietnam") {
                setCode("https://www.countryflags.io/vn/flat/64.png")
            } else if (country === "Brunei") {
                setCode("https://www.countryflags.io/bn/flat/64.png")
            } else if (country === "Palestine") {
                setCode("https://www.countryflags.io/ps/flat/64.png")
            } else if (country === "Venezuela") {
                setCode("https://www.countryflags.io/ve/flat/64.png")
            } else if (country === "Moldova") {
                setCode("https://www.countryflags.io/md/flat/64.png")
            } else if (country === "North Macedonia") {
                setCode("https://www.countryflags.io/mk/flat/64.png")
            } else if (country === "Faeroe Islands") {
                setCode("https://www.countryflags.io/fo/flat/64.png")
            } else if (country === "Bolivia") {
                setCode("https://www.countryflags.io/ve/flat/64.png")
            } else if (country === "DRC") {
                setCode("https://www.countryflags.io/do/flat/64.png")
            } else if (country === "St. Barth") {
                setCode("https://www.countryflags.io/bl/flat/64.png")
            } else if (country === "Saint Martin") {
                setCode("https://www.countryflags.io/mf/flat/64.png")
            } else if (country === "CAR") {
                setCode("https://www.countryflags.io/cf/flat/64.png")
            } else if (country === "Vatican City") {
                setCode("https://www.countryflags.io/va/flat/64.png")
            } else if (country === "St. Vincent Grenadines") {
                setCode("https://www.countryflags.io/vc/flat/64.png")
            } else if (country === "Tanzania") {
                setCode("https://www.countryflags.io/tz/flat/64.png")
            } else if (country === "U.S. Virgin Islands") {
                setCode("https://www.countryflags.io/vg/flat/64.png")
            }else if (item.Name === country){
                const code = item.Code.toLowerCase()
                setCode(`https://www.countryflags.io/${code}/flat/64.png`)
            }
        })
    }

    return(
            <Paper elevation={3}className={classes.root}>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
                    <img style={{marginRight: 10}} src={`${code}`}></img>
                    <Typography  variant="h4">
                        {` ${country}`}
                    </Typography>
                </div>


                <Typography style={{paddingLeft: 5}} variant="body1" >
                    {`Cases: ${cases} | Today: ${todayCases}`}
                </Typography>

                <Typography style={{ paddingLeft: 5 }} variant="body1" >
                    {`Recovered: ${recovered}`}
                </Typography>

                <Typography style={{ paddingLeft: 5 }} variant="body1" >
                    {`Deaths: ${deaths} | Today: ${todayDeaths}`}
                </Typography>

                <Typography style={{ paddingLeft: 5 }} variant="body1" >
                    {`Critical: ${critical}`}
                </Typography>
            </Paper>
    )
}

export default Card