import React from 'react'

//utils import
// import classes from './Navigation.module.css';
import './Navigation.css'
import { NavLink } from 'react-router-dom';

 const Navigation = (props) => {
    return (
        <div>
            <nav className={"Navigation"}>
                <ul>
                    <li><NavLink exact to="/">Top News</NavLink></li>
                    <li><NavLink to="categories">Categories</NavLink></li>
                    <li><NavLink to="/search">Search</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation