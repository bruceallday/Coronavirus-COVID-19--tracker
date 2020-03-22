import React, { useState, useRef } from 'react'
// import {PAYPALSANDBOX} from './about-window.key'
import Typography from '@material-ui/core/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import StripeCheckoutButton from '../stripe-button/stripe-button.component'
import { PayPalButton } from "react-paypal-button-v2";
import { useStyles, CssTextField } from './about-window.styles'
// import { textStyles } from '../../constants/textColor'

const AboutWindow = ({ setAboutWindow, aboutWindow }) => {
    const classes = useStyles()
    // const textClass = textStyles()
    //PAYPAL
    const [paidFor, setPaidFor] = useState()
    let paypalRef = useRef()
    const [isLoading, setLoading] = useState(false)

    const product = {
        price: 0.01,
        description: "Donate to this project",
        // img: ''        
    }

    return(
        <div className={classes.root} >
            <Card style={{ backgroundColor: '#363636', width: '70%', height: '70%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} variant="outlined" >
                <CardContent>
                <ClearIcon
                    style={{ color: 'white' }}
                    onClick={() => {
                        setAboutWindow(!aboutWindow)
                    }}
                />

                <Typography style={{ color: 'white', paddingTop: 20, paddingLeft: 20, fontWeight: 'lighter' }} variant="h4" >
                    About Track Coronavirus (Covid-19)
                </Typography>

                <p style={{ color: 'white', padding: 20 , fontSize: '1.1em'}} >
                        Due to the panic and fear in society I created this application to provide correct infomation, on every country
                        where data has been recorded. Please also know, the data shown is recorded infomation, unrecorded infomation will not be shown.
                        <br/>
                        <a className={classes.linkText} href='https://www.worldometers.info/coronavirus/'>Data Source</a>
                        <br/>
                        <br/>
                        Track Coronavirus(COVID-19) is an independently developed, free to use web application. 
                        {/*The app will always remain free to use, you can help support the development of this project, 
                        including improved mobile support and the addition of new features
                        by sending a small donation.*/}
                </p>

                    {/*<div style={{ width: 100, height: 40, paddingLeft: 20 }}>
                        <div className={classes.donationInput}>

                            <CssTextField
                                className={classes.textField}
                                label="$"
                                variant="outlined"
                                size="small"
                                InputProps={{
                                    className: classes.textfieldInput
                                }}
                               
                            />
                        </div>
                        <PayPalButton
                            clientId={`https://www.paypal.com/sdk/js?client-id=${PAYPALSANDBOX}`}
                            amount="0.01"
                            currency='USD'
                            style={{ shape: 'pill', size: 'responsive' }}
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {
                                alert("Transaction completed by " + details.payer.name.given_name);
                                // OPTIONAL: Call your server to save the transaction
                                // return fetch("/paypal-transaction-complete", {
                                //     method: "post",
                                //     body: JSON.stringify({
                                //         orderID: data.orderID
                                //     })
                                // });
                            }}
                        />
                        </div>*/}
                </CardContent>
            </Card>
        </div>
    )

}

export default AboutWindow