import React, { useState } from 'react'
import {PAYPALSANDBOX} from './about-window.key'
import Typography from '@material-ui/core/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import { PayPalButton } from "react-paypal-button-v2";
import { useStyles } from './about-window.styles'

const AboutWindow = ({ setAboutWindow, aboutWindow }) => {
    // const [supportWindow, setAboutWindow] = useState(false)
    const open = setAboutWindow
    const classes = useStyles()

    return(
        <div className={classes.root} >
            <Card style={{ backgroundColor: '#363636', width: '70%', height: '70%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} variant="outlined" >
                <ClearIcon
                    style={{ color: 'white' }}
                    onClick={() => {
                        setAboutWindow(!aboutWindow)
                    }}
                />

                <Typography style={{ color: 'white', padding: 20, fontWeight: 'lighter' }} variant="h4" >
                    Track Coronavirus (Covid-19)
                </Typography>

                <Typography style={{ color: 'white', padding: 20 }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque vel est nec nisi blandit ornare vel a orci.
                    Sed eget elementum elit. Donec scelerisque, orci et elementum lobortis,
                    risus erat viverra nisi, nec luctus erat urna sit amet massa.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque vel est nec nisi blandit ornare vel a orci.
                    Sed eget elementum elit. Donec scelerisque, orci et elementum lobortis,
                    risus erat viverra nisi, nec luctus erat urna sit amet massa.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque vel est nec nisi blandit ornare vel a orci.
                </Typography>

                <CardContent>
                    <div style={{ width: 100, height: 40 }}>
                        <div className={classes.donationInput}>

                            {/*<CssTextField
                                                className={classes.textField}
                                                label="$"
                                                variant="outlined"
                                                size="small"
                                                onChange={handleChange('numberformat')}
                                                // onChange={handleChange}
                                                // id="formatted-numberformat-input"
                                                InputProps={{
                                                    inputComponent: NumberFormatCustom,
                                                    className: classes.textfieldInput,
                                                }}
                                            />*/}
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
                    </div>
                </CardContent>
            </Card>
        </div>
    )

}

export default AboutWindow