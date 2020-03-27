import React, { useState, useRef } from 'react'
import Typography from '@material-ui/core/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ads from '../../../ads'

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
            <Card className={classes.aboutCard} variant="outlined" >
                <CardContent>
                <ClearIcon
                    style={{ color: 'white' }}
                    onClick={() => {
                        setAboutWindow(!aboutWindow)
                    }}
                />

                <Typography className={classes.heading} variant="h4" >
                    About Track Coronavirus (Covid-19)
                </Typography>

                <p className={classes.paragraphText} >
                        Due to the panic and fear in society I created this application to provide correct infomation, on every country
                        where data has been recorded. Please also know, the data shown is recorded infomation, unrecorded infomation will not be shown.
                        For more uptodate infomation on the Coronavirus(COVID-19) visit the Center for Disease Control and Prevention website <br />
                        <a className={classes.linkText} href={"https://www.cdc.gov/coronavirus/2019-ncov/index.html"}>cdc.gov/coronavirus/2019-ncov/index.html</a> <br/>
                        <br/>
                        <a className={classes.linkText} href='https://www.worldometers.info/coronavirus/'>Website Data Source</a>
                        <br/>
                        <br/>
                        Help prevent the spread of Coronavirus(COVID-19) by taking necessary precautions.
                        Consider the following items.
                        {/*The app will always remain free to use, you can help support the development of this project, 
                        including improved mobile support and the addition of new features
                        by sending a small donation.*/}
                </p>
                <div className={classes.adsContainer} >
                    
                        <a
                            target={ads[0].target}
                            href={ads[0].href}
                        >
                            <img
                                border={ads[0].border}
                                src={ads[0].src[0]}
                            />
                        </a>
                        <img
                            src={ads[0].src[1]}
                            width={ads[0].width}
                            height={ads[0].height}
                            alt={ads[0].alt}
                        
                        />
                 
                        <a
                            target={ads[1].target}
                            href={ads[1].href}
                        >
                            <img
                                border={ads[1].border}
                                src={ads[1].src[0]}
                            />
                        </a>
                        <img
                            src={ads[1].src[1]}
                            width={ads[1].width}
                            height={ads[1].height}
                            alt={ads[1].alt}
                        
                        />

                        <a
                            target={ads[2].target}
                            href={ads[2].href}
                        >
                            <img
                                border={ads[2].border}
                                src={ads[2].src[0]}
                            />
                        </a>
                        <img
                            src={ads[2].src[2]}
                            width={ads[2].width}
                            height={ads[2].height}
                            alt={ads[2].alt}

                        />

                        <a
                            target={ads[3].target}
                            href={ads[3].href}
                        >
                            <img
                                border={ads[3].border}
                                src={ads[3].src[0]}
                            />
                        </a>
                        <img
                            src={ads[3].src[2]}
                            width={ads[3].width}
                            height={ads[3].height}
                            alt={ads[3].alt}

                        />
                 
                </div>
                    <p className={classes.paragraphText}>Track Coronavirus(COVID-19) is an independently developed, free to use web application.</p> 
                </CardContent>
            </Card>
        </div>
    )

}

export default AboutWindow