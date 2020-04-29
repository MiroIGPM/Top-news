import React from 'react'

//component import
import Navigation from './Navigation/Navigation'
import ContrySelector from './CountrySelector/CountrySelector'

//utils import
import classes from './Cockpit.module.css'

const Cockipt = (props) => {

    const { changeCoutry } = props

    return (
        <div className={classes["Cockpit"]}>
            <Navigation />
            <ContrySelector clicked={changeCoutry}/>
        </div>
    )
}

export default Cockipt