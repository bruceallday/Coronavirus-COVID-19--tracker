import React, { useState, useEffect } from 'react'

import Card from '../country-card/country-card.component'

import { useStyles } from './countries.styles'

const Countries = () => {

    const classes = useStyles()

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

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

    // const countries = data.map((item, index) => {
    //     // console.log("ITEM", item)
    //     <Card country={item.country} />
    // })

    // console.log("COUNTRIES", countries)


    return(
        <div className={classes.root} >
           {data.map((item, index) => (
                <Card country={item.country} />
           ))}
        </div>
    )
}

export default Countries