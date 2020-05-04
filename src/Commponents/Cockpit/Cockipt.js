import React from "react";

//component import
import Navigation from "./Navigation/Navigation";
import ContrySelector from "./CountrySelector/CountrySelector";
import DrawerToggle from "../Cockpit/Sidedrawer/DrawerToggle/DrawerToggle";
//utils import
import classes from "./Cockpit.module.css";

const Cockipt = (props) => {
    const { changeCoutry } = props;

    return (
        <div className={classes["Cockpit"]}>
            <div>
                <DrawerToggle />
                <div className={classes["DisplayNone"]}>
                    <Navigation />
                </div>

                <ContrySelector clicked={changeCoutry} />
            </div>
        </div>
    );
};

export default Cockipt;
