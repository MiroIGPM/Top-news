import React from "react";

//utils import
import classes from "./CountySelector.module.css";
import { connect } from "react-redux";
import { setActiveCountry } from "../../../actions/newsActions";

const CountrySelector = (props) => {
    const { buttonActive, activeCountry } = props;

    return (
        <div className={classes["CountySelector"]}>
            <button
                className={activeCountry === "GB" ? classes["Active"] : ""}
                onClick={() => props.setActiveCountry("GB")}
                disabled={buttonActive}
            >
                GB
            </button>
            <button
                className={activeCountry === "US" ? classes["Active"] : ""}
                onClick={() => props.setActiveCountry("US")}
                disabled={buttonActive}
            >
                US
            </button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    buttonActive: state.news.buttonActive,
    activeCountry: state.news.activeCountry,
});

export default connect(mapStateToProps, { setActiveCountry })(CountrySelector);
