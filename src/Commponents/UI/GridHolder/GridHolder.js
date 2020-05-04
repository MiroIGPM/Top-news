import React from "react";

import Spinner from "../Spinner/Spinner";

//utils import
import classes from "./GridHolder.module.css";

const GridHolder = (props) => {
    let gridHolder = <Spinner />;
    if (!props.loading) {
        return (
            <div className={classes["Main"]}>
                <div className={classes["Grid"]}>{props.children}</div>;
            </div>
        );
    }

    return <div>{gridHolder}</div>;
};

export default GridHolder;
