import React, { useState, useEffect } from 'react'

import useStyles from './countries.styles'

const Countries = () => {

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
    
    return(
        <div>COUNTRIES LIST</div>
    )
}

export default Countries