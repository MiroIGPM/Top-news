import React from "react";

//utils import
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    return (
        <div>
            <ul className={"Navigation"}>
                <li>
                    <NavLink exact to="/">
                        Top News
                    </NavLink>
                </li>
                <li>
                    <NavLink to="categories">Categories</NavLink>
                </li>
                <li>
                    <NavLink to="/search">Search</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
