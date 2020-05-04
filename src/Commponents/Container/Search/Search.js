import React, { Component } from "react";

//component import
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import GridHolder from "../../UI/GridHolder/GridHolder";
import Thumbnail from "../../Articles/SinglePost/Thumbnail/Thumbnail";

// //utils import
import classes from "./Search.module.css";

class Search extends Component {
    componentDidMount() {
        this.props.resetNews();
    }

    componentDidUpdate(prevProps) {
        if (this.props.activeCountry !== prevProps.activeCountry) {
            this.props.search();
        }
    }

    render() {
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

        return (
            <Auxiliary>
                <h1
                    className={classes["Title"]}
                >{`Search top news from ${this.props.countryName} by term:`}</h1>
                <div className={classes["InputHolder"]}>
                    <input
                        type="text"
                        placeholder="Search tearm..."
                        className={classes["Input"]}
                        onChange={this.props.handleInput}
                        onBlur={this.props.search}
                    ></input>
                </div>
                <div>
                    <GridHolder loading={this.props.loading}>
                        {searchedNews}
                    </GridHolder>
                </div>
            </Auxiliary>
        );
    }
}

export default Search;
