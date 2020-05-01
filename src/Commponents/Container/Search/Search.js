import React, { Component } from "react";

//component import
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import GridHolder from "../../UI/GridHolder/GridHolder";
import Thumbnail from "../../Articles/SinglePost/Thumbnail/Thumbnail";
import Spinner from "../../UI/Spinner/Spinner";

// //utils import
import classes from "./Search.module.css";

class Search extends Component {
    componentDidMount() {
        this.props.resetNews();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.activeCountry !== prevProps.activeCountry &&
            this.props.topNews.length > 0
        ) {
            this.props.search(
                this.props.activeCountry,
                this.props.searchKeyword
            );
        }
    }

    render() {
        let country = "";
        if (this.props.activeCountry === "US") {
            country = "United States";
        } else if (this.props.activeCountry === "GB") {
            country = "Great Britain";
        }

        let searchedNews = this.props.topNews.map((article) => {
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

        let fetchedNews = <Spinner />;
        if (!this.props.loading) {
            fetchedNews = <GridHolder>{searchedNews}</GridHolder>;
        }

        return (
            <Auxiliary>
                <h1
                    className={classes["Title"]}
                >{`Search top news from ${country} by term:`}</h1>
                <div className={classes["InputHolder"]}>
                    <input
                        type="text"
                        placeholder="Search tearm..."
                        className={classes["Input"]}
                        onChange={this.props.handleInput}
                        onBlur={() =>
                            this.props.search(
                                this.props.activeCountry,
                                this.props.searchKeyword
                            )
                        }
                    ></input>
                </div>
                <div>{fetchedNews}</div>
            </Auxiliary>
        );
    }
}

export default Search;
