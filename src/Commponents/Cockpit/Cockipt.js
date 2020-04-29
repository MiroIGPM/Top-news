import React from 'react'

//component import
import Navigation from './Navigation/Navigation'
import ContrySelector from './CountrySelector/CountrySelector'

//utils import
import classes from './Cockpit.module.css'

const Cockipt = () => {
    return (
        <div className={classes["Cockpit"]}>
            <Navigation />
            <ContrySelector />
        </div>
    )
}

export default Cockipt