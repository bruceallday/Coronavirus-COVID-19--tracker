import React from 'react'

import Map from './components/map/map.component'
import Totals from './components/totals/totals.component'
import Countries from './components/countries/countries.component'

const App = () => {

    return(
        <div>
            <Totals />
            <div>
                <Map />
                <Countries />
            </div>
        </div>
    )
}

export default App