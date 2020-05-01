import React from "react";

import Navigation from "../Navigation/Navigation";
import CountrySelector from "../CountrySelector/CountrySelector";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

import classes from "./Sidedrawer.module.css";

const Sidedrawer = (props) => {
    let attachedClasses = [classes["Sidedrawer"], classes["Close"]];
    if (props.show) {
        attachedClasses = [classes["Sidedrawer"], classes["Open"]];
    }

    return (
        <Auxiliary>
            <Backdrop clicked={props.changeShow} show={props.show} />
            <div className={attachedClasses.join(" ")}>
                <Navigation />
                {/* <CountrySelector /> */}
            </div>
        </Auxiliary>
    );
};

export default Sidedrawer;
