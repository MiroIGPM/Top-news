import React from "react";

// component import
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

// import state from newsReducer
const mapStateToProps = (state) => ({
    loading: state.news.loading,
});

export default connect(mapStateToProps)(GridHolder);
