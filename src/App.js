import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline';

import Map from './components/map/map.component'
import Totals from './components/totals/totals.component'
import Countries from './components/countries/countries.component'

const App = () => {

    return(
        <div>
        <CssBaseline/>
            <div style={{ display: 'flex', flexDirection: 'row' }} >
                <Map />
                <Countries />
            </div>
        </div>
    )
}

export default App