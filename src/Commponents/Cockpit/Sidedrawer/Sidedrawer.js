import React from "react";

import Navigation from "../Navigation/Navigation";

import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

import classes from "./Sidedrawer.module.css";
import { connect } from "react-redux";

const Sidedrawer = (props) => {
    let attachedClasses = [classes["Sidedrawer"], classes["Close"]];
    if (props.show) {
        attachedClasses = [classes["Sidedrawer"], classes["Open"]];
    }

    return (
        <Auxiliary>
            <Backdrop />
            <div className={attachedClasses.join(" ")}>
                <Navigation />
            </div>
        </Auxiliary>
    );
};

const mapStateToProps = (state) => ({
    show: state.news.show,
});

export default connect(mapStateToProps)(Sidedrawer);
