import React, { useState, useEffect } from 'react'

import TextField from '@material-ui/core/TextField';
import AppBar from'@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import Card from '../country-card/country-card.component'

import { useStyles, CssTextField } from './countries.styles'


const Countries = () => {

    const classes = useStyles()
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        getData()
        // getCountryCodes()
    }, [])

    const getData = async () => {
        setLoading(true)

        const result = await fetch(`
            https://corona.lmao.ninja/countries
        `)
        const data = await result.json()

        if(data.error){
            console.log("error", data.error)
        }else{
            setData(data)
        }
        setLoading(false)
    }

    console.log("COVID-19 DATA", data)

    const handleChange = () =>{
        setSearch(event.target.value)
    }

    const filteredCountries = data.filter(item =>
        item.country.toLowerCase().includes(search.toLowerCase()))

    return(
        <div>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} variant="h2" noWrap>
                        Coronavirus (COVID-19) Tracker
                    </Typography>
                    <div>
                        <CssTextField
                            className={classes.textField}
                            label="Search by country..."
                            variant="outlined"
                            onChange={handleChange}
                            InputProps={{
                                className: classes.textfieldInput
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            

            <div className={classes.root} >
                {filteredCountries.map((item, index) => (
                    <Card
                        key={index}
                        country={item.country}
                        cases={item.cases}
                        todayCases={item.todayCases}
                        deaths={item.deaths}
                        todayDeaths={item.todayDeaths}
                        recovered={item.recovered}
                        critical={item.critical}
                        InputProps={{
                            className: classes.multilineColor
                        }}
                        />
                ))}
            </div>
        </div>
    )
}

export default Countries