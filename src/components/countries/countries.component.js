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
    const [search, setSearch] = useState("")
    let fixedData

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const result = await fetch(`
            https://corona.lmao.ninja/countries
        `)
        const data = await result.json()

        if(data.error){
            console.log("error", data.error)
        }else{
            // getCountryCode(data)
            formatNumber(data)
        }
    }

    const formatNumber = (data) => {
        let ammendedData = data.map(item => {
            if (item.cases.toString().length === 5){
                item.cases = item.cases.toString()
                item.cases = [item.cases.slice(0, 2), ",", item.cases.slice(2)].join('')

            }else if (item.todayCases.toString().length === 5){
                item.todayCases = item.todayCases.toString()
                item.todayCases = [item.todayCases.slice(0, 2), ",", item.todayCases.slice(2)].join('')

            } else if (item.recovered.toString().length === 5){
                item.recovered = item.recovered.toString()
                item.recovered = [item.recovered.slice(0, 2), ",", item.recovered.slice(2)].join('')

            } else if (item.deaths.toString().length === 5 ){
                item.deaths = item.deaths.toString()
                item.deaths = [item.deaths.slice(0, 2), ",", item.deaths.slice(2)].join('')

            } else if (item.todayDeaths.toString().length === 5) {
                item.todayDeaths = item.todayDeaths.toString()
                item.todayDeaths = [item.todaySeaths.slice(0, 2), ",", item.todaySeaths.slice(2)].join('').cases

            } else if (item.critical.toString().length === 5) {
                item.critical = item.critical.toString()
                item.critical = [item.critical.slice(0, 2), ",", item.critical.slice(2)].join('')

            } else if (item.cases.toString().length === 6) {
                item.cases = item.cases.toString()
                item.cases = [item.cases.slice(0, 2), ",", item.cases.slice(2)].join('')

            } else if (item.todayCases.toString().length === 6) {
                item.todayCases = item.todayCases.toString()
                item.todayCases = [item.todayCases.slice(0, 2), ",", item.todayCases.slice(2)].join('')

            } else if (item.recovered.toString().length === 6) {
                item.recovered = item.recovered.toString()
                item.recovered = [item.recovered.slice(0, 2), ",", item.recovered.slice(2)].join('')

            } else if (item.deaths.toString().length === 6) {
                item.deaths = item.deaths.toString()
                item.deaths = [item.deaths.slice(0, 2), ",", item.deaths.slice(2)].join('')

            } else if (item.todayDeaths.toString().length === 6) {
                item.todayDeaths = item.todayDeaths.toString()
                item.todayDeaths = [item.todayDeaths.slice(0, 2), ",", item.todayDeaths.slice(2)].join('')

            } else if (item.critical.toString().length === 6) {
                item.critical = item.critical.toString()
                item.critical = [item.critical.slice(0, 2), ",", item.critical.slice(2)].join('')
            }
            return(item)
        })
        // let formattedData = ammendedData
        getCountryCode(ammendedData)
    }

    const getCountryCode = async (data) => {
        const result = await fetch(`
            https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json
        `)
        const codesData = await result.json()
        if (codesData.error) {
            console.log("error", codesData.error)
        } else {
            matchCode(codesData, data)
        }
    }

    const matchCode = (codesData, data) => {
        codesData.map(item => {
            let appendedData = data.map(country => {
                if (country.country === "Iran") {
                    country.countryCode = 'ir'
                } else if (country.country === "S. Korea") {
                    country.countryCode = 'kr'
                } else if (country.country === "USA") {
                    country.countryCode = 'us'
                } else if (country.country === "UK") {
                    country.countryCode = 'gb'
                } else if (country.country === "Czechia") {
                    country.countryCode ='cz'
                } else if (country.country === "UAE") {
                    country.countryCode = 'ae'
                } else if (country.country === "Russia") {
                    country.countryCode = 'ru'
                } else if (country.country === "Taiwan") {
                    country.countryCode = 'tw'
                } else if (country.country === "Vietnam") {
                    country.countryCode = 'vn'
                } else if (country.country === "Brunei") {
                    country.countryCode = 'bn'
                } else if (country.country === "Palestine") {
                    country.countryCode = 'ps'
                } else if (country.country === "Venezuela") {
                    country.countryCode = 've'
                } else if (country.country === "Moldova") {
                    country.countryCode = 'md'
                } else if (country.country === "North Macedonia") {
                    country.countryCode = 'mk'
                } else if (country.country === "Faeroe Islands") {
                    country.countryCode = 'fo'
                } else if (country.country === "Bolivia") {
                    country.countryCode = 've'
                } else if (country.country === "DRC") {
                    country.countryCode = 'do'
                } else if (country.country === "St. Barth") {
                    country.countryCode = 'bl'
                } else if (country.country === "Saint Martin") {
                    country.countryCode = 'mf'
                } else if (country.country === "CAR") {
                    country.countryCode = 'cf'
                } else if (country.country === "Vatican City") {
                    country.countryCode = 'va'
                } else if (country.country === "St. Vincent Grenadines") {
                    country.countryCode = 'vc'
                } else if (country.country === "Tanzania") {
                    country.countryCode = 'tz'
                } else if (country.country === "U.S. Virgin Islands") {
                    country.countryCode = 'vg'
                } else if (item.Name === country.country) {
                    const code = item.Code.toLowerCase()
                    country.countryCode = code
                } else {
                }
                return country
            })
            fixedData = appendedData
        })
        setData(fixedData)
    }

    const handleChange = () =>{
        setSearch(event.target.value)
    }

    const filteredCountries = data.filter(item =>
        item.country.toLowerCase().includes(search.toLowerCase())
    )

    return(
        <div>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} variant="h2" noWrap>
                        Track Coronavirus(COVID-19) 
                    </Typography>
                    <p className={classes.version} >v1.1.3</p> 
                    <div>
                        <CssTextField
                            className={classes.textField}
                            label="Search by country"
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
                        countryCode={item.countryCode}
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