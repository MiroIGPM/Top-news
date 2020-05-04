import React from "react";

//components import
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Cockipt from "../../Cockpit/Cockipt";
import TopNews from "../TopNews/TopNews";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";
<<<<<<< HEAD

=======
import Test from "../Test/Test";
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537
import FullPost from "../../Articles/SinglePost/FullPost/FullPost";
import Sidedrawer from "../../Cockpit/Sidedrawer/Sidedrawer";

//utils import11
import classes from "./NewsHolder.module.css";
<<<<<<< HEAD
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

const NewsHolder = (props) => {
    return (
        <Auxiliary>
            <div className={classes["NewsHolder"]}>
                <Cockipt />
                <Sidedrawer />

                <Switch>
                    {/* Index (Top news) route */}

                    <Route exact path="/" component={TopNews} />
=======
import axios from "axios";
import { Route, Switch, withRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

class NewsHolder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topNews: [],
            activeCountry: "GB",
            countryName: "Great Britain",
            loading: false,
            searchKeyword: "",
            show: false,
            categories: [
                "entertainment",
                "general",
                "health",
                "science",
                "sport",
                "technology",
            ],
            categoryNews: {
                entertainment: [],
                general: [],
                health: [],
                science: [],
                technology: [],
            },
            activeCategory: "",
        };
    }

    test = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                topNews: prevState.categoryNews[prevState.activeCategory],
            };
        });
    };

    //Reset news
    resetNews = (prevState) => {
        this.setState(() => {
            return {
                ...prevState,
                topNews: [],
                searchKeyword: "",
            };
        });
    };

    // fetchTopNews
    fetchTopNews = () => {
        this.setState({ loading: true });
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=${this.state.activeCountry}&apiKey=1d32a8601e374bcb89a2b431f91e8398`
            )
            .then((res) => {
                const posts = res.data.articles;
                const updatePost = posts.map((posts) => {
                    return {
                        ...posts,
                        id: uuidv4(),
                    };
                });
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        totalResults: res.data.totalResults,
                        topNews: updatePost,
                        loading: false,
                    };
                });
            })
            .catch((err) => console.log(err));
    };

    //fetch searched news
    fetchSearchedNews = () => {
        this.setState({ loading: true });
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=${this.state.activeCountry}&q=${this.state.searchKeyword}&apiKey=1d32a8601e374bcb89a2b431f91e8398`
            )
            .then((res) => {
                const posts = res.data.articles;
                const updatePost = posts.map((posts) => {
                    return {
                        ...posts,
                        id: uuidv4(),
                    };
                });
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        totalResults: res.data.totalResults,
                        topNews: updatePost,
                        loading: false,
                    };
                });
            })
            .catch((err) => console.log(err));
    };

    //fetch news by category
    fetchCategoryNews = () => {
        const categories = this.state.categories;

        categories.forEach((category) => {
            axios
                .get(
                    `https://newsapi.org/v2/top-headlines?country=${this.state.activeCountry}&category=${category}&apiKey=1d32a8601e374bcb89a2b431f91e8398`
                )
                .then((res) => {
                    const posts = res.data.articles;
                    const updatePost = posts.map((posts) => {
                        return {
                            ...posts,
                            id: uuidv4(),
                            category: category,
                        };
                    });

                    let categoryNews = { ...this.state.categoryNews };
                    categoryNews[category] = updatePost;
                    this.setState((prevState) => {
                        return {
                            ...prevState,
                            categoryNews: categoryNews,
                        };
                    });
                });
        });
    };

    //fetch searched news
    fetchSingleCategory = (category) => {
        this.setState({ loading: true });
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=${this.state.activeCountry}&category=${category}&apiKey=1d32a8601e374bcb89a2b431f91e8398`
            )
            .then((res) => {
                const posts = res.data.articles;
                const updatePost = posts.map((posts) => {
                    return {
                        ...posts,
                        id: uuidv4(),
                    };
                });
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        totalResults: res.data.totalResults,
                        topNews: updatePost,
                        loading: false,
                    };
                });
            })
            .catch((err) => console.log(err));
    };

    //change country function
    changeCountryHandler = (e) => {
        let activeCountry = e.target.textContent;
        let countryName = "Great Britain";
        if (activeCountry === "US") {
            countryName = "United States";
        }
        this.setState({
            activeCountry: activeCountry,
            countryName: countryName,
        });
    };

    //change search keyword
    changeSearchKeywordHandler = (e) => {
        let searchValue = e.target.value;
        this.setState((prevState) => {
            return { ...prevState, searchKeyword: searchValue };
        });
    };

    //change active category
    changeCategoryHandler = (e) => {
        let activeCategory = e.target.textContent;
        this.setState((prevState) => {
            return { ...prevState, activeCategory: activeCategory };
        });
    };
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537

                    {/* Single post route */}
                    <Route path={`/news/:id`} component={FullPost} />

<<<<<<< HEAD
                    {/* search route */}
                    <Route path="/search" component={Search} />

                    {/* Categories route */}
                    <Route path="/categories" component={Categories} />
                </Switch>
            </div>
        </Auxiliary>
    );
};

export default connect(null)(NewsHolder);
=======
    resetActiveCategory = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                activeCategory: "",
            };
        });
    };

    render() {
        //deconstructing state
        const { activeCountry } = this.state;

        return (
            <Auxiliary>
                <div className={classes["NewsHolder"]}>
                    <Cockipt
                        changeShow={this.sideDrawerToggleHandler}
                        changeCoutry={this.changeCountryHandler}
                    />
                    <Sidedrawer
                        show={this.state.show}
                        changeShow={this.sideDrawerToggleHandler}
                    />

                    <Switch>
                        {/* Index (Top news) route */}

                        <Route
                            exact
                            path="/"
                            render={() => (
                                <TopNews
                                    activeCountry={activeCountry}
                                    countryName={this.state.countryName}
                                    fetchTopNews={this.fetchTopNews}
                                    topNews={this.state.topNews}
                                    loading={this.state.loading}
                                    activeCategory={this.state.activeCategory}
                                    fetchSingleCategory={
                                        this.fetchSingleCategory
                                    }
                                    resetActiveCategory={
                                        this.resetActiveCategory
                                    }
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/categories/test"
                            render={() => (
                                <Test
                                    test={this.test}
                                    topNews={this.state.topNews}
                                />
                            )}
                        />
                        {/* Single post route */}
                        <Route
                            path={`/news/:id`}
                            render={() => (
                                <FullPost topNews={this.state.topNews} />
                            )}
                        />

                        {/* search route */}
                        <Route
                            path="/search"
                            render={() => (
                                <Search
                                    search={this.fetchSearchedNews}
                                    handleInput={
                                        this.changeSearchKeywordHandler
                                    }
                                    resetNews={this.resetNews}
                                    activeCountry={this.state.activeCountry}
                                    countryName={this.state.countryName}
                                    searchKeyword={this.state.searchKeyword}
                                    topNews={this.state.topNews}
                                    loading={this.state.loading}
                                />
                            )}
                        />

                        {/* Categories route */}
                        <Route
                            path="/categories"
                            render={() => (
                                <Categories
                                    fetch={this.fetchCategoryNews}
                                    categoryNews={this.state.categoryNews}
                                    activeCountry={this.state.activeCountry}
                                    activeCategory={this.state.activeCategory}
                                    loading={this.state.loading}
                                    changeCategory={this.changeCategoryHandler}
                                    test={this.test}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </Auxiliary>
        );
    }
}

export default withRouter(NewsHolder);
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537
