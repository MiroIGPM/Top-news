import React from "react";

// utils import
import classes from "./DrawerToggle.module.css";
import { connect } from "react-redux";
import { toggleSidedrawer } from "../../../../actions/newsActions";

const DrawerToggle = (props) => {
    return (
        <div
            className={classes["DrawerToggle"]}
            // Toggle open/close side menu
            onClick={() => props.toggleSidedrawer(props.show)}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

// Importing state from newsReducer
const mapStateToProps = (state) => ({
    show: state.news.show,
});

export default connect(mapStateToProps, { toggleSidedrawer })(DrawerToggle);
