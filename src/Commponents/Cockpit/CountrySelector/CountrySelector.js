import React from 'react'

//utils import
import classes from './CountySelector.module.css'

 const CountrySelector = (props) => {

    const { clicked } = props

    return (
        <div className={classes["CountySelector"]}>
            <div onClick={clicked}>GB</div>
            <div onClick={clicked}>US</div>
        </div>
    )
}

export default CountrySelector