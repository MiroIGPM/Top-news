import React from "react";

import Spinner from "../Spinner/Spinner";

//utils import
import classes from "./GridHolder.module.css";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => ({
    loading: state.news.loading,
});

export default connect(mapStateToProps)(GridHolder);
