import React from "react";

// utills import
import classes from "./Backdrop.module.css";
import { connect } from "react-redux";
import { toggleSidedrawer } from "../../../actions/newsActions";

const Backdrop = (props) => {
    return props.show ? (
        <div
            className={classes["Backdrop"]}
            // Toggle close mobile menu
            onClick={() => props.toggleSidedrawer(props.show)}
        ></div>
    ) : null;
};

const mapStateToProps = (state) => ({
    show: state.news.show,
});

export default connect(mapStateToProps, { toggleSidedrawer })(Backdrop);
