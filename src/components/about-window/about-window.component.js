import React, { useState, useRef } from 'react'
import Typography from '@material-ui/core/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import { useStyles } from './about-window.styles'
// import { textStyles } from '../../constants/textColor'

const AboutWindow = ({ setAboutWindow, aboutWindow }) => {
    const classes = useStyles()


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
                    <p className={classes.paragraphText}>Track Coronavirus(COVID-19) is an independently developed, free to use web application.</p> 
                    <p>Due to the panic and fear in society I created this application to provide correct infomation, on every country
                    where data has been recorded. Please also know, the data shown is recorded infomation, unrecorded infomation will not be shown.
                    To find out more, and for more upto date infomation on the Coronavirus(COVID-19) pandemic visit the following links.</p>

                    <p style={{ fontStyle: 'italic' }} >World Health Organisation -
                        <a className={classes.linkText} href={"https://www.who.int/health-topics/coronavirus#tab=tab_1"}> who.int/health-topics/coronavirus</a>
                    </p>

                    <p style={{ fontStyle: 'italic' }} >Center for Disease Control and Prevention website -
                        <a className={classes.linkText} href={"https://www.cdc.gov/coronavirus/2019-ncov/index.html"}> cdc.gov/coronavirus/2019-ncov/index.html</a>
                    </p>

                    <p style={{ fontStyle: 'italic' }} >European Centre for Disease Prevention and Control  -
                        <a className={classes.linkText} href={'https://www.ecdc.europa.eu/en/novel-coronavirus-china'}> ecdc.europa.eu/en/novel-coronavirus</a>
                    </p>
                </p>
                </CardContent>
            </Card>
        </div>
    )
}


export default AboutWindow


