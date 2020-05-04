import React from "react";

//utils import
import classes from "./Error.module.css";

export default function Error() {
    return (
        <div className={classes["Error"]}>
            <div>
                <h2>
                    Something went wrong please reload the page or check the
                    console.log!
                </h2>
            </div>
        </div>
    );
}
