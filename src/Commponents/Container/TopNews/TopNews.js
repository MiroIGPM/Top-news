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
        error,
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
    let country = "";
    if (activeCountry === "US") {
        country = "United States";
    } else if (activeCountry === "GB") {
        country = "Great Britain";
    }
    let title = `Top news from ${country}`;
    if (activeCategory.length > 0) {
        title = `Top  ${activeCategory} from ${country}`;
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

    // Local error handling
    let handleError = <h1>SOMETHING WENT WRONG</h1>;
    if (!error) {
        handleError = <GridHolder>{topNewsArticles}</GridHolder>;
    }

    return (
        <Auxiliary>
            <h1 className={classes["Title"]}>{title}</h1>
            {handleError}
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
});

export default connect(mapStateToProps, {
    fetchTopNews,
    resetCategory,
    fetchSingleCategory,
    resetTopNews,
})(withRouter(TopNews));
