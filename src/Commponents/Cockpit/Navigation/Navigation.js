import React from 'react'

//utils import
import classes from './Navigation.module.css'

 const Navigation = (props) => {
    return (
        <div>
            <nav className={classes["Navigation"]}>
                <ul>
                    <li>Top News</li>
                    <li>Categories</li>
                    <li>Search</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation