import React, { useState, useEffect } from 'react'

import TextField from '@material-ui/core/TextField';

import Card from '../country-card/country-card.component'

import { useStyles } from './countries.styles'

const Countries = () => {

    const classes = useStyles()
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        getData()
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

    const handleChange = () =>{
        setSearch(event.target.value)
    }

    const filteredCountries = data.filter(item =>
        item.country.toLowerCase().includes(search.toLowerCase()))

    console.log("filtered", filteredCountries)

    return(
        <div>
            <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Search by country..."
                variant="outlined"
                onChange={handleChange} />

            <div className={classes.root} >
                {filteredCountries.map((item, index) => (
                    <Card key={index} country={item.country} />
                ))}
            </div>
        </div>
    )
}

export default Countries