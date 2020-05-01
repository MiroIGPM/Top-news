import React, { Component } from "react";

//components import
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Cockipt from "../../Cockpit/Cockipt";
import TopNews from "../TopNews/TopNews";
import Search from "../Search/Search";
import FullPost from "../../Articles/SinglePost/FullPost/FullPost";
import Sidedrawer from "../../Cockpit/Sidedrawer/Sidedrawer";

//utils import11
import classes from "./NewsHolder.module.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

class NewsHolder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topNews: [],
            activeCountry: "GB",
            loading: false,
            searchKeyword: "",
            show: true,
        };
    }

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
    fetchTopNews = (country) => {
        this.setState({ loading: true });
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=185cffc9ba164d9ba9029e9106d9b4c7`
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
    fetchSearchedNews = (country, keyword) => {
        this.setState({ loading: true });
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=${country}&q=${keyword}&apiKey=185cffc9ba164d9ba9029e9106d9b4c7`
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
        this.setState({ activeCountry: e.target.textContent });
    };

    //change search keyword
    changeSearchKeywordHandler = (e) => {
        let searchValue = e.target.value;
        this.setState((prevState) => {
            return { ...prevState, searchKeyword: searchValue };
        });
        console.log(this.state.searchKeyword);
    };

    sideDrawerToggleHandler = () => {
        let show = this.state.show;
        this.setState((prevState) => {
            return {
                ...prevState,
                show: !show,
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
                        {/* Index route */}
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <TopNews
                                    activeCountry={activeCountry}
                                    fetchTopNews={this.fetchTopNews}
                                    topNews={this.state.topNews}
                                    loading={this.state.loading}
                                />
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
                                    searchKeyword={this.state.searchKeyword}
                                    topNews={this.state.topNews}
                                    loading={this.state.loading}
                                />
                            )}
                        />
                        {/* Single post route */}
                        <Route
                            path="/:id"
                            render={() => (
                                <FullPost topNews={this.state.topNews} />
                            )}
                        />
                    </Switch>
                </div>
            </Auxiliary>
        );
    }
}

export default NewsHolder;
