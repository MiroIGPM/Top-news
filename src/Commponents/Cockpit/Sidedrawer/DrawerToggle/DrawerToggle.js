import React from "react";
import { connect } from "react-redux";
import { toggleSidedrawer } from "../../../../actions/newsActions";

import classes from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
    return (
        <div
            className={classes["DrawerToggle"]}
            onClick={() => props.toggleSidedrawer(props.show)}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    show: state.news.show,
});

export default connect(mapStateToProps, { toggleSidedrawer })(DrawerToggle);
