import React, { useState, useEffect } from "react";

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
    //Destructuring props
    const {
        activeCountry,
        searchKeyword,
        loading,
        topNews,
        resetTopNews,
        fetchSearchedNews,
        countryName,
    } = props;

    // Fetch data on load
    useEffect(() => {
        resetTopNews();
    }, []);

    // Fetch data on activeCountry prop change
    useEffect(() => {
        if (searchKeyword.length <= 0) return;
        fetchSearchedNews(activeCountry, searchKeyword, loading);
    }, [activeCountry]);

    // Populating thumbnail comp with data

    const searchedNews = topNews.map((article) => {
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

    // }

    return (
        <Auxiliary>
            <h1
                className={classes["Title"]}
            >{`Search top news from ${countryName} by term: ${searchKeyword}`}</h1>
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

//importing state from newsReducer
const mapStateToProps = (state) => ({
    topNews: state.news.topNews,
    searchKeyword: state.news.searchKeyword,
    activeCountry: state.news.activeCountry,
    loading: state.news.loading,
    countryName: state.news.countryName,
});

export default connect(mapStateToProps, {
    getSearchKeyword,
    fetchSearchedNews,
    resetTopNews,
})(Search);
