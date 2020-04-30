import React, { Component } from "react";

//components import
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Cockipt from "../Cockpit/Cockipt";
import TopArticles from "../Articles/TopArticles/TopArticles";
import FullPost from "../Articles/SinglePost/FullPost/FullPost";

//utils import
import classes from "./NewsHolder.module.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

class NewsHolder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topNews: [],
            totalResults: null,
            activeCountry: "GB",
            loading: false,
        };
    }

    //initial fetch data
    componentDidMount() {
        this.fetchData(this.state.activeCountry);
    }

    // fetch data function
    fetchData = (country) => {
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
                this.setState({
                    totalResults: res.data.totalResults,
                    topNews: updatePost,
                    loading: false,
                });
            })
            .catch((err) => console.log(err));
    };

    //change country function
    changeCountryHandler = (e) => {
        this.fetchData(e.target.textContent);
        this.setState({ activeCountry: e.target.textContent });
    };

    render() {
        //deconstructing state
        const { topNews, loading, activeCountry } = this.state;

        return (
            <Auxiliary>
                <div className={classes["NewsHolder"]}>
                    <Cockipt changeCoutry={this.changeCountryHandler} />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <TopArticles
                                    topNews={topNews}
                                    loading={loading}
                                    activeCountry={activeCountry}
                                />
                            )}
                        />
                        <Route path="/search" render={() => <h1>Search</h1>} />
                        <Route
                            path="/:id"
                            render={() => <FullPost topNews={topNews} />}
                        />
                    </Switch>
                </div>
            </Auxiliary>
        );
    }
}

export default NewsHolder;
