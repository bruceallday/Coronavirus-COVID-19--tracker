import React, { useEffect, useState, useRef } from 'react'
import {DATA_KEY, YOUR_KEY, PAYPALSANDBOXKEY} from './map.data'


import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import StripeCheckoutButton from '../stripe-button/stripe-button.component'
import { PayPalButton } from "react-paypal-button-v2";

import { useStyles } from './map.styles'
import { textStyles } from '../../constants/textColor'

import { Chart } from "react-google-charts";

const Map = () => {
    const classes = useStyles()
    const textClass = textStyles()
    const [data, setData] = useState([])
    const [totalsData, setTotalsData] = useState("")
    const [lastUpdate, setLastUpdate] = useState('')
    const [supportWindow, setSupportWindow] = useState(false)

    // E N D  P O I N T 2
    // const [data2, setData2] = useState("")

    //PAYPAL
    const [paidFor, setPaidFor] = useState()
    let paypalRef = useRef()
    const [isLoading, setLoading] = useState(false)
    const loader = '...'

    const product = {
        price: 0.01,
        description: "Donate to this project",
        // img: ''        
    }

    useEffect(() => {
        getData()
    }, [])

    const createDate = (date) => {
        let fullDate = new Date(date)
        let str = fullDate.toString()
        let trimStr = str.split('(')
        return trimStr[0]
    }


    const getData = async () => {
        setLoading(true)

        const totalsResult = await fetch(`
            https://corona.lmao.ninja/all
        `)
        const totalsData = await totalsResult.json()

        if (totalsData.error) {
            console.log("error", totalsData.error)
        } else {
            setTotalsData(totalsData)
        }

        let date = createDate(totalsData.updated)
        setLastUpdate(date)
    
        const result = await fetch(
            `https://corona.lmao.ninja/countries`
        )
        const data = await result.json()

        if (data.error) {
            console.log(data.error)
        }else{
            setData(data)
        }
                // E N D  P O I N T 2
        // const result2 = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        //         "x-rapidapi-key": DATA_KEY
        //     }
        // })

        // const data2 = await result2.json()

        // if (data2.error) {
        //     console.log("error", data2.error)
        // } else {
        //     setData2(data2)
        //     // console.log("data2 >>>>", data2)
        // }

        // console.log("DATA2", data2)

        setLoading(false)
    }

    const countryArr = data.map((item, index) => {
        if(item.country == "UK"){
            return ["United Kingdom", item.cases, item.deaths]
        }else{
            return [item.country, item.cases, item.deaths]
        }
    })

    let countriesData = [
        ['Country', 'Cases', 'Deaths'],
        ...countryArr,
    ]

    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className={classes.map} >
                {isLoading ? (
                    <CircularProgress className={classes.loader} color={'secondary'} size={70} />
                ):(
                <div>
                    {supportWindow && (
                        <div className={classes.aboutWindow} >
                            <div style={{ width: 100, height: 40 }}>
                                <PayPalButton
                                    clientId={`https://www.paypal.com/sdk/js?client-id=${PAYPALSANDBOXKEY}`}
                                    amount="0.01"
                                    currency='USD'
                                    style={{color: 'blue', shape: 'pill', size: 'responsive'}}
                                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                    onSuccess={(details, data) => {
                                        alert("Transaction completed by " + details.payer.name.given_name);
                                        // OPTIONAL: Call your server to save the transaction
                                        return fetch("/paypal-transaction-complete", {
                                            method: "post",
                                            body: JSON.stringify({
                                                orderID: data.orderID
                                            })
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    <Chart
                        forceIFrame={true}
                        width={'65vw'}
                        height={'80vh'}
                        chartType="GeoChart"
                        data={countriesData}
                        mapsApiKey={YOUR_KEY}
                        rootProps={{ 'data-testid': '1' }}
                        options={{
                            colorAxis: {
                                colors: [
                                    '#FEEDED', '#FB7F81', '#FB4146', '#FA030B', '#FB040C', '#BC0309', '#7D0206'
                                ]
                            },
                            backgroundColor: '#81d4fa',
                            // datalessRegionColor: 'blue',
                        }}
                    />
    
                </div>
                )}
            </div>

            <AppBar className={classes.appBar} >
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} >
                        | Total Cases: <span className={textClass.yellowText}>{`${totalsData.cases ? totalsData.cases : loader }`}</span>
                    </Typography>
                    <Typography className={classes.title} >
                        | Recovered: <span className={textClass.greenText} >{`${totalsData.recovered ? totalsData.recovered : loader}`}</span>
                    </Typography>
                    <Typography className={classes.title} >
                        | Deaths: <span className={textClass.redtext} >{`${totalsData.deaths ? totalsData.deaths : loader}`}</span>
                    </Typography>
                </Toolbar>
                
                <p 
                className={textClass.totalsText}>
                    | Numbers represent recorded cases  |  Last updated: <span style={{fontWeight: "Bold"}} >{lastUpdate}</span> | 
                    <a 
                        className={ textClass.linkText }
                        href="https://www.worldometers.info/coronavirus/">
                         Source 
                    </a> |

                    <a 
                        className={textClass.linkText }
                        href="https://github.com/NovelCOVID/">
                        API
                    </a> | 
                     
                    <a 
                        className={textClass.linkText }
                        href="https://github.com/BPouncey">
                        Author
                    </a> | 

                    <a
                        className={textClass.linkText }
                        onClick={() => {setSupportWindow(!supportWindow)}}>
                        Help support this project
                    </a> | 

                    </p>

                   {/* <div style={{ width: 100, height: 40 }}>
                        <PayPalButton
                            clientId={`https://www.paypal.com/sdk/js?client-id=${PAYPALSANDBOXKEY}`}
                            amount="0.01"
                            currency='USD'
                            style={{ color: 'blue', shape: 'pill', size: 'responsive' }}
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {
                                alert("Transaction completed by " + details.payer.name.given_name);
                                // OPTIONAL: Call your server to save the transaction
                                return fetch("/paypal-transaction-complete", {
                                    method: "post",
                                    body: JSON.stringify({
                                        orderID: data.orderID
                                    })
                                });
                            }}
                        />
                        </div>*/}
            </AppBar>
        </div>
    )
}

export default Map

   