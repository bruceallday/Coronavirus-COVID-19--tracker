import React, { useState } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline';

import Map from './components/map/map.component'
import Totals from './components/totals/totals.component'
import AboutWindow from './components/about-window/about-window.component'
import Countries from './components/countries/countries.component'

const App = () => {

    const [aboutWindow, setAboutWindow] = useState(false)

    return(
        <div>
            <CssBaseline/>
            <div style={{ display: 'flex', flexDirection: 'row' }} >

                {aboutWindow && (
                    <AboutWindow 
                        setAboutWindow={setAboutWindow} 
                        aboutWindow={aboutWindow} 
                    />
                )}

                <Map 
                    aboutWindow={aboutWindow} 
                    setAboutWindow={setAboutWindow}  />
                    
                <Countries />
            </div>
        </div>
    )
}

export default App