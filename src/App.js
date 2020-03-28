import React, { useState, useEffect } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline';

import Map from './components/map/map.component'
import AboutWindow from './components/about-window/about-window.component'
import Countries from './components/countries/countries.component'
import NewsWindow from './components/news/news.component'

const App = () => {
    console.log("COMPONENT LOADED")
    const [aboutWindow, setAboutWindow] = useState(false)
    const [newsWindow, setNewsWindow] = useState(false)
    const [isMobile, setIsMobile] = useState(null)

    useEffect(() => {
        if(screen.width <= 414){
            setIsMobile(true)
        }
    }, [])

    window.addEventListener("orientationchange", () => {
        if (screen.width <= 414) {
            setIsMobile(!isMobile)
        }
    });

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

                {newsWindow && (
                    <NewsWindow
                        setNewsWindow={setNewsWindow}
                        newsWindow={newsWindow}
                    />
                )}

                <Map 
                    aboutWindow={aboutWindow} 
                    setAboutWindow={setAboutWindow}
                    isMobile={isMobile}
                />

                <Countries />

            </div>
        </div>
    )
}

export default App