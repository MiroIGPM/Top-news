import React from "react";

//utils import
import classes from "./CountySelector.module.css";
import { connect } from "react-redux";
import { setActiveCountry } from "../../../actions/newsActions";

const CountrySelector = (props) => {
    // Destructuring props
    const { buttonActive, activeCountry } = props;

    return (
        <div className={classes["CountySelector"]}>
            <button
                className={activeCountry === "GB" ? classes["Active"] : ""}
                onClick={() => props.setActiveCountry("GB", "Great Britain")}
                disabled={buttonActive}
            >
                GB
            </button>
            <button
                className={activeCountry === "US" ? classes["Active"] : ""}
                onClick={() => props.setActiveCountry("US", "United States")}
                disabled={buttonActive}
            >
                US
            </button>
        </div>
    );
};

// Importing state from newsReducer
const mapStateToProps = (state) => ({
    buttonActive: state.news.buttonActive,
    activeCountry: state.news.activeCountry,
});

export default connect(mapStateToProps, { setActiveCountry })(CountrySelector);
