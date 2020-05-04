import React, { useEffect } from "react";

//component import
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import GridHolder from "../../UI/GridHolder/GridHolder";
import Thumbnail from "../../Articles/SinglePost/Thumbnail/Thumbnail";

// //utils import
import classes from "./Search.module.css";
import { connect } from "react-redux";
import {
    getSearchKeyword,
    fetchSearchedNews,
    resetTopNews,
} from "../../../actions/newsActions";

const Search = (props) => {
    const {
        activeCountry,
        searchKeyword,
        loading,
        topNews,
        resetTopNews,
        fetchSearchedNews,
    } = props;

    useEffect(() => {
        resetTopNews();
    }, []);

    useEffect(() => {
        if (searchKeyword.length <= 0) return;
        fetchSearchedNews(activeCountry, searchKeyword, loading);
    }, [activeCountry]);

    let country = "";
    if (activeCountry === "US") {
        country = "United States";
    } else if (activeCountry === "GB") {
        country = "Great Britain";
    }
    let searchedNews = topNews.map((article) => {
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
            >{`Search top news from ${country} by term:`}</h1>
            <div className={classes["InputHolder"]}>
                <input
                    type="text"
                    placeholder="Search tearm..."
                    className={classes["Input"]}
                    onChange={props.getSearchKeyword}
                    onBlur={() =>
                        fetchSearchedNews(activeCountry, searchKeyword, loading)
                    }
                ></input>
            </div>
            <div>
                <GridHolder>{searchedNews}</GridHolder>
            </div>
        </Auxiliary>
    );
};

const mapStateToProps = (state) => ({
    topNews: state.news.topNews,
    searchKeyword: state.news.searchKeyword,
    activeCountry: state.news.activeCountry,
    loading: state.news.loading,
});

export default connect(mapStateToProps, {
    getSearchKeyword,
    fetchSearchedNews,
    resetTopNews,
})(Search);
