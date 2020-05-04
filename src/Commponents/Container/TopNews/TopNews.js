import React, { Component } from "react";

//component import
import Thumbnail from "../../Articles/SinglePost/Thumbnail/Thumbnail";
import GridHolder from "../../UI/GridHolder/GridHolder";

//utils import11
import classes from "./TopNews.module.css";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import { withRouter } from "react-router-dom";

class TopNews extends Component {
    // componentDidMount() {

    //     if (this.props.activeCategory.length === 0) {
    //         this.fetchTopNews();
    //         } else if (this.props.location.state.from === "/categories") {
    //             console.log("Sdadasdsads");
    //         }
    //     }
    // }

    componentDidMount() {
        if (this.props.activeCategory.length === 0) {
            this.props.fetchTopNews();
        } else {
            this.props.fetchSingleCategory(this.props.activeCategory);
        }
        this.props.resetActiveCategory();
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.activeCountry !== prevProps.activeCountry) {
            this.props.fetchTopNews();
        }
    }

    render() {
        let country = "";
        if (this.props.activeCountry === "US") {
            country = "United States";
        } else if (this.props.activeCountry === "GB") {
            country = "Great Britain";
        }

        // maping over fetched data
        const topNewsArticles = this.props.topNews.map((article) => {
            const { id, title, urlToImage, description } = article;
            return (
                <Thumbnail
                    key={id}
                    id={id}
                    title={title}
                    urlToImage={urlToImage}
                    description={description}
                />
            );
        });

        return (
            <Auxiliary>
                <h1
                    className={classes["Title"]}
                >{`Top news from ${this.props.countryName}`}</h1>
                <GridHolder loading={this.props.loading}>
                    {topNewsArticles}
                </GridHolder>
            </Auxiliary>
        );
    }
}

export default withRouter(TopNews);
