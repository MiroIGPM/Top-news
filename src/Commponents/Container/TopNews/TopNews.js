import React, { useEffect } from "react";

//component import
import Thumbnail from "../../Articles/SinglePost/Thumbnail/Thumbnail";
import GridHolder from "../../UI/GridHolder/GridHolder";

//utils import11
import classes from "./TopNews.module.css";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import { withRouter } from "react-router-dom";
<<<<<<< HEAD
import { connect } from "react-redux";
import {
    fetchTopNews,
    resetCategory,
    fetchSingleCategory,
    resetTopNews,
} from "../../../actions/newsActions";

const TopNews = (props) => {
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

    useEffect(() => {
        if (activeCategory.length === 0) {
            fetchTopNews(activeCountry, loading);
        } else {
            fetchSingleCategory(activeCountry, activeCategory);
=======

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
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537
        }
    }, []);

    useEffect(() => {
        if (activeCategory.length === 0) {
            fetchTopNews(activeCountry, loading);
        } else {
            fetchSingleCategory(activeCountry, activeCategory);
        }
    }, [activeCountry]);

<<<<<<< HEAD
    useEffect(() => {
        return () => {
            resetCategory();
        };
    }, []);
=======
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
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537

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

    const topNewsArticles = topNews.map((article) => {
        const { id, title, urlToImage, description } = article;
        return (
<<<<<<< HEAD
            <Thumbnail
                key={id}
                id={id}
                title={title}
                urlToImage={urlToImage}
                description={description}
            />
=======
            <Auxiliary>
                <h1
                    className={classes["Title"]}
                >{`Top news from ${this.props.countryName}`}</h1>
                <GridHolder loading={this.props.loading}>
                    {topNewsArticles}
                </GridHolder>
            </Auxiliary>
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537
        );
    });

    let handleError = <h1>SOMETHING WENT WRONG</h1>;
    if (!error) {
        handleError = <GridHolder>{topNewsArticles}</GridHolder>;
    }

<<<<<<< HEAD
    return (
        <Auxiliary>
            <h1 className={classes["Title"]}>{title}</h1>
            {handleError}
        </Auxiliary>
    );
};

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
=======
export default withRouter(TopNews);
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537
