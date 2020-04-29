import React from 'react'

//utils import
import classes from './CountySelector.module.css'

 const CountrySelector = (props) => {
    return (
        <div className={classes["CountySelector"]}>
            <div>GB</div>
            <div>US</div>
        </div>
    )
}

export default CountrySelector