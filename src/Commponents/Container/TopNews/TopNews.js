import React, { Component } from "react";

//component import
import Thumbnail from "../../Articles/SinglePost/Thumbnail/Thumbnail";
import GridHolder from "../../UI/GridHolder/GridHolder";
import Spinner from "../../UI/Spinner/Spinner";

//utils import11
import classes from "./TopNews.module.css";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

class TopNews extends Component {
    componentDidMount() {
        this.props.fetchTopNews(this.props.activeCountry);
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.activeCountry !== prevProps.activeCountry) {
            this.props.fetchTopNews(this.props.activeCountry);
        }
    }

    render() {
        let country = "";
        if (this.props.activeCountry === "US") {
            country = "United States";
        } else if (this.props.activeCountry === "GB") {
            country = "Great Britain";
        }

        let topNewsArticles = <Spinner />;
        if (!this.props.loading) {
            // maping over fetched data
            topNewsArticles = this.props.topNews.map((article) => {
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
        }

        return (
            <Auxiliary>
                <h1
                    className={classes["Title"]}
                >{`Top news from ${country}`}</h1>
                <GridHolder>{topNewsArticles}</GridHolder>
            </Auxiliary>
        );
    }
}

export default TopNews;
