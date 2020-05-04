import React, { useEffect } from "react";

//component import
import Thumbnail from "../../Articles/SinglePost/Thumbnail/Thumbnail";
import GridHolder from "../../UI/GridHolder/GridHolder";

//utils import
import classes from "./TopNews.module.css";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
    fetchTopNews,
    resetCategory,
    fetchSingleCategory,
    resetTopNews,
} from "../../../actions/newsActions";

const TopNews = (props) => {
    //Destructuring props
    const {
        activeCountry,
        topNews,
        loading,
        activeCategory,
        fetchTopNews,
        fetchSingleCategory,
        resetCategory,
        countryName,
    } = props;

    // Fetch data on load
    useEffect(() => {
        if (activeCategory.length === 0) {
            fetchTopNews(activeCountry, loading);
        } else {
            fetchSingleCategory(activeCountry, activeCategory);
        }
    }, []);

    // Fetch data on activeCountry prop change
    useEffect(() => {
        if (activeCategory.length === 0) {
            fetchTopNews(activeCountry, loading);
        } else {
            fetchSingleCategory(activeCountry, activeCategory);
        }
    }, [activeCountry]);

    // Reset activCategory on unload
    useEffect(() => {
        return () => {
            resetCategory();
        };
    }, []);

    // Setting up title
    let title = `Top news from ${countryName}`;
    if (activeCategory.length > 0) {
        title = `Top  ${activeCategory} from ${countryName}`;
    }

    // Populating Thumbnail component with fetched data
    const topNewsArticles = topNews.map((article) => {
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
            <h1 className={classes["Title"]}>{title}</h1>
            <GridHolder>{topNewsArticles}</GridHolder>
        </Auxiliary>
    );
};

// Import state from newsReducer
const mapStateToProps = (state) => ({
    topNews: state.news.topNews,
    activeCountry: state.news.activeCountry,
    loading: state.news.loading,
    activeCategory: state.news.activeCategory,
    error: state.news.error,
    countryName: state.news.countryName,
});

export default connect(mapStateToProps, {
    fetchTopNews,
    resetCategory,
    fetchSingleCategory,
    resetTopNews,
})(withRouter(TopNews));
