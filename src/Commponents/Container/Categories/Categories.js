import React, { Component } from "react";

//component import
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Slider from "../../UI/Slider/Slider";
import classes from "./Categories.module.css";
import { withRouter } from "react-router-dom";

//utils import

class Categories extends Component {
    componentDidMount() {
        this.props.fetch();
        console.log("cat", this.props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.activeCountry !== prevProps.activeCountry) {
            this.props.fetch();
        } else if (this.props.activeCategory !== prevProps.activeCategory) {
            this.props.test();
        }
    }

    render() {
        const objectKeys = Object.keys(this.props.categoryNews);
        const keys = objectKeys.map((key, index) => {
            return (
                <Slider
                    categoryNews={this.props.categoryNews[key]}
                    category={key}
                    clicked={this.props.changeCategory}
                />
            );
        });

        return (
            <Auxiliary>
                <h1
                    className={classes["Title"]}
                >{`Top 5 news by category from ${this.props.activeCountry}`}</h1>
                <div className={classes["Categories"]}>{keys}</div>
            </Auxiliary>
        );
    }
}

export default withRouter(Categories);
