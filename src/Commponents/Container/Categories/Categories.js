import React, { useEffect } from "react";

//component import
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Slider from "../../UI/Slider/Slider";
import Spinner from "../../UI/Spinner/Spinner";

//utils import
import classes from "./Categories.module.css";
import { connect } from "react-redux";
import { fetchCategories, resetTopNews } from "../../../actions/newsActions";

const Categories = (props) => {
    // Destructuring props
    const {
        fetchCategories,
        categories,
        topNews,
        loading,
        activeCountry,
        resetTopNews,
    } = props;

    // Trigger fetch on load and on activeCountry prop change
    useEffect(() => {
        resetTopNews();
        fetchCategories(categories, activeCountry, loading);
    }, [activeCountry]);

    // Pupulating slider components with fetched data
    const key = categories.map((category) => {
        let article = [];
        topNews.forEach((news) => {
            if (news.category === category) article.push(news);
        });
        return <Slider categoryNews={article} category={category} />;
    });

    // Setting up render component based on loading prop
    let render = <Spinner />;
    if (!loading) {
        render = <div className={classes["Categories"]}>{key}</div>;
    }

    return (
        <Auxiliary>
            <h1
                className={classes["Title"]}
            >{`Top 5 news by category from ${activeCountry}`}</h1>
            {render}
        </Auxiliary>
    );
};

// importing state from newsReducer
const mapStateToProps = (state) => ({
    topNews: state.news.topNews,
    activeCountry: state.news.activeCountry,
    categories: state.news.categories,
    categoryNews: state.news.categoryNews,
    loading: state.news.loading,
});

export default connect(mapStateToProps, { fetchCategories, resetTopNews })(
    Categories
);
