import React from "react";

//utils import
import classes from "./GridHolder.module.css";

const GridHolder = (props) => {
    return (
        <div className={classes["Main"]}>
            <div className={classes["Grid"]}>{props.children}</div>
        </div>
    );
};

export default GridHolder;
