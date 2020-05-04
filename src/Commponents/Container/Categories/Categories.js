<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React, { Component } from "react";
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537

//component import
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Slider from "../../UI/Slider/Slider";
<<<<<<< HEAD
import Spinner from "../../UI/Spinner/Spinner";

import classes from "./Categories.module.css";

import { connect } from "react-redux";
import { fetchCategories, resetTopNews } from "../../../actions/newsActions";

//utils import

const Categories = (props) => {
    const {
        fetchCategories,
        categories,
        topNews,
        loading,
        activeCountry,
        resetTopNews,
    } = props;

    useEffect(() => {
        resetTopNews();
        fetchCategories(categories, activeCountry, loading);
    }, [activeCountry]);

    const key = categories.map((category) => {
        let article = [];
        topNews.forEach((news) => {
            if (news.category === category) article.push(news);
        });
        return <Slider categoryNews={article} category={category} />;
    });

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
=======
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
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537
